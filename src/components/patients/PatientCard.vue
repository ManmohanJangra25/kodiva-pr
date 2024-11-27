<template>
  <div 
    class="patient-card border rounded-lg p-4 hover:shadow-md transition-shadow"
  >
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-lg font-medium">{{ patient.name }}</h3>
        <p class="text-gray-600">ID: {{ patient.id }}</p>
      </div>
      <div class="text-sm text-gray-500">
        <p>Age: {{ patient.age }}</p>
        <p>Last Visit: {{ formatDate(patient.lastVisit) }}</p>
      </div>
    </div>
    <div class="mt-4">
      <button 
        class="text-primary hover:text-primary-dark"
        @click="$emit('view-details', patient)"
      >
        View Details
      </button>
    </div>
  </div>
</template>

<script setup>
import { formatDate } from '@/utils/formatters'

defineProps({
  patient: {
    type: Object,
    required: true
  }
})

defineEmits(['view-details'])
</script> 