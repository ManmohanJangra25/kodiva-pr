<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Basic form without proper validation -->
    <div>
      <label for="patientName">Patient Name</label>
      <input
        id="patientName"
        v-model="formData.patientName"
        type="text"
        class="form-input"
      />
    </div>

    <div>
      <label for="email">Email</label>
      <input
        id="email"
        v-model="formData.email"
        type="email"
        class="form-input"
      />
    </div>

    <div>
      <label for="phone">Phone Number</label>
      <input
        id="phone"
        v-model="formData.phone"
        type="tel"
        class="form-input"
      />
    </div>

    <TimeSlotPicker v-model="formData.timeSlot" />

    <button type="submit" class="btn-primary">
      Book Appointment
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import TimeSlotPicker from './TimeSlotPicker.vue'

const formData = ref({
  patientName: '',
  email: '',
  phone: '',
  timeSlot: null
})

// TODO: Implement proper validation
const handleSubmit = async () => {
  try {
    // Basic submission without validation
    await appointmentService.createAppointment(formData.value)
  } catch (error) {
    console.error('Failed to book appointment:', error)
  }
}
</script> 