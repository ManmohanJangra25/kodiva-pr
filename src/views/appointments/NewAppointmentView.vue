<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Schedule New Appointment</h1>
    
    <div class="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Patient Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Patient</label>
          <select 
            v-model="formData.patientId"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          >
            <option value="">Select Patient</option>
            <option v-for="patient in patients" :key="patient.id" :value="patient.id">
              {{ patient.name }}
            </option>
          </select>
        </div>

        <!-- Date Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Date</label>
          <input 
            type="date" 
            v-model="formData.date"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          >
        </div>

        <!-- Time Selection -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Time</label>
          <select 
            v-model="formData.time"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          >
            <option value="">Select Time</option>
            <option v-for="slot in availableTimeSlots" :key="slot.time" :value="slot.time">
              {{ slot.time }}
            </option>
          </select>
        </div>

        <!-- Appointment Type -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Type</label>
          <select 
            v-model="formData.type"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            required
          >
            <option value="">Select Type</option>
            <option value="Regular Checkup">Regular Checkup</option>
            <option value="Follow-up">Follow-up</option>
            <option value="Consultation">Consultation</option>
          </select>
        </div>

        <!-- Notes -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Notes</label>
          <textarea 
            v-model="formData.notes"
            rows="3"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end space-x-4">
          <router-link 
            to="/"
            class="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </router-link>
          <button 
            type="submit"
            class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? 'Scheduling...' : 'Schedule Appointment' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { appointmentService } from '@/services/appointmentService'
import { patientService } from '@/services/patientService'

const router = useRouter()
const patients = ref([])
const availableTimeSlots = ref([])
const isSubmitting = ref(false)

const formData = ref({
  patientId: '',
  date: '',
  time: '',
  type: '',
  notes: ''
})

// Fetch patients and available time slots
onMounted(async () => {
  try {
    const [patientsResponse] = await Promise.all([
      patientService.getPatients()
    ])
    patients.value = patientsResponse.data
  } catch (error) {
    console.error('Failed to load form data:', error)
  }
})

// Watch for date changes to fetch available time slots
watch(() => formData.value.date, async (newDate) => {
  if (newDate) {
    try {
      const response = await appointmentService.checkTimeSlotAvailability(newDate)
      // Filter only available time slots
      availableTimeSlots.value = response.data.filter(slot => slot.available)
    } catch (error) {
      console.error('Failed to load time slots:', error)
      availableTimeSlots.value = [] // Set empty array on error
    }
  } else {
    availableTimeSlots.value = [] // Clear time slots when no date is selected
  }
})

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    const selectedPatient = patients.value.find(p => p.id === parseInt(formData.value.patientId))
    const appointmentData = {
      ...formData.value,
      patientName: selectedPatient.name,
      status: 'pending'
    }
    
    await appointmentService.createAppointment(appointmentData)
    router.push('/appointments')
  } catch (error) {
    console.error('Failed to create appointment:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script> 