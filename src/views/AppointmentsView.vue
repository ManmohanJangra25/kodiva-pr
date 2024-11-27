<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Appointments</h1>
    <div class="space-y-8">
      <AppointmentForm />
      <AppointmentList />
    </div>
  </div>
</template>

<script setup>
import AppointmentForm from '@/components/appointments/AppointmentForm.vue'
import AppointmentList from '@/components/appointments/AppointmentList.vue'
</script> 