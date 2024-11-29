// Consider breaking down this large function into smaller, more manageable pieces.
// This will improve readability and make it easier to test individual components.

import { api } from './api'

// Mock appointment data
const mockAppointments = [
  {
    id: 1,
    patientId: 1,
    patientName: 'John Doe',
    date: '2024-03-20',
    time: '09:00',
    duration: 30,
    type: 'Regular Checkup',
    status: 'confirmed',
    doctor: 'Dr. Smith',
    department: 'General Medicine',
    notes: 'Annual physical examination',
    createdAt: '2024-03-15T10:30:00',
    updatedAt: '2024-03-15T10:30:00'
  },
  {
    id: 2,
    patientId: 2,
    patientName: 'Jane Smith',
    date: '2024-03-21',
    time: '10:30',
    duration: 45,
    type: 'Pregnancy Checkup',
    status: 'confirmed',
    doctor: 'Dr. Williams',
    department: 'Obstetrics',
    notes: 'Monthly prenatal visit',
    createdAt: '2024-03-14T15:45:00',
    updatedAt: '2024-03-14T15:45:00'
  },
  {
    id: 3,
    patientId: 3,
    patientName: 'Robert Johnson',
    date: '2024-03-22',
    time: '14:00',
    duration: 30,
    type: 'Follow-up',
    status: 'pending',
    doctor: 'Dr. Brown',
    department: 'Cardiology',
    notes: 'Blood pressure monitoring',
    createdAt: '2024-03-16T09:15:00',
    updatedAt: '2024-03-16T09:15:00'
  }
]

// Mock time slots data
const mockTimeSlots = [
  {
    id: 1,
    time: '09:00',
    duration: 30,
    available: true,
    doctor: 'Dr. Smith',
    department: 'General Medicine'
  },
  {
    id: 2,
    time: '09:30',
    duration: 30,
    available: true,
    doctor: 'Dr. Smith',
    department: 'General Medicine'
  },
  {
    id: 3,
    time: '10:00',
    duration: 30,
    available: false,
    doctor: 'Dr. Williams',
    department: 'Obstetrics'
  },
  {
    id: 4,
    time: '10:30',
    duration: 30,
    available: true,
    doctor: 'Dr. Brown',
    department: 'Cardiology'
  }
]

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const appointmentService = {
  async getAppointments() {
    await delay(500)
    return { data: mockAppointments }
  },

  async createAppointment(data) {
    await delay(500)

    // Need to be done - Implement correct error handling for API requests like - Patient Not Found Check the name or email

    // Validate appointment data
    if (!data.patientName || !data.time) {
      
    // Need to be done - Add more elaborated error messages for failed requests
      throw new Error('Invalid appointment data')
    }

    // Check for duplicate appointments
    const existingAppointment = mockAppointments.find(
      (apt) => apt.date === data.date && apt.time === data.time
    )
    if (existingAppointment) {
      // Add error messages like - Time slot already booked please choose another time
      throw new Error('Time slot already booked')
    }

    // Create new appointment
    const newAppointment = {
      id: mockAppointments.length + 1,
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    mockAppointments.push(newAppointment)
    return { data: newAppointment }
  },

  async checkTimeSlotAvailability(date) {
    await delay(500)
    // Return all time slots for the given date
    return {
      data: mockTimeSlots // Now returns an array that can be filtered
    }
  }
}
