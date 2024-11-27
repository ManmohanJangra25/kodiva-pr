import axios from 'axios'
import { mockPatients, mockAppointments, mockTimeSlots } from './mockData'

// Create mock adapter
const useMockApi = true // Set to true to use mock data

export const api = {
  async get(url, config = {}) {
    if (!useMockApi) {
      return axios.get(url, config)
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    console.log('url', url)
    // Mock API responses
    if (url === '/patients') {
      return { data: mockPatients }
    }

    if (url.startsWith('/patients/')) {
      const id = parseInt(url.split('/').pop())
      const patient = mockPatients.find((p) => p.id === id)
      if (!patient) throw new Error('Patient not found')
      return { data: patient }
    }

    if (url === '/appointments') {
      return { data: mockAppointments }
    }

    if (url === '/appointments/check-availability') {
      const { timeSlot } = config.params
      const slot = mockTimeSlots.find((s) => s.time === timeSlot)
      return {
        data: {
          available: slot ? slot.available : false
        }
      }
    }

    throw new Error('Not found')
  },

  async post(url, data) {
    if (!useMockApi) {
      return axios.post(url, data)
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    if (url === '/appointments') {
      // Validate appointment data
      if (!data.patientName || !data.time) {
        throw new Error('Invalid appointment data')
      }

      // Check for duplicate appointments
      const existingAppointment = mockAppointments.find(
        (apt) => apt.date === data.date && apt.time === data.time
      )
      if (existingAppointment) {
        throw new Error('Time slot already booked')
      }

      // Create new appointment
      const newAppointment = {
        id: mockAppointments.length + 1,
        ...data,
        status: 'pending'
      }
      mockAppointments.push(newAppointment)
      return { data: newAppointment }
    }

    throw new Error('Not found')
  }
}
