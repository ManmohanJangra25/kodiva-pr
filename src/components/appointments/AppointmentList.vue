<template>
  <div class="space-y-4">
    <h2 class="text-xl font-semibold">Upcoming Appointments</h2>
    <!-- TODO: Implement lazy loading for better performance -->
    <div class="grid gap-4">
      <div
        v-for="appointment in appointments"
        :key="appointment.id"
        class="border rounded-lg p-4"
      >
        <div class="flex justify-between">
          <div>
            <h3 class="font-medium">{{ appointment.patientName }}</h3>
            <p class="text-gray-600">{{ formatDate(appointment.date) }}</p>
          </div>
          <div class="text-sm">
            <span class="px-2 py-1 rounded-full" :class="statusClass(appointment.status)">
              {{ appointment.status }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAppointmentStore } from '@/stores/appointment'
import { formatDate } from '@/utils/formatters'

const appointmentStore = useAppointmentStore()

const appointments = computed(() => appointmentStore.appointments)

const statusClass = (status) => ({
  'bg-green-100 text-green-800': status === 'confirmed',
  'bg-yellow-100 text-yellow-800': status === 'pending',
  'bg-red-100 text-red-800': status === 'cancelled'
})
</script> 