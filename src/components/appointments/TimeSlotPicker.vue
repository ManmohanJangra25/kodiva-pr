<template>
  <div class="time-slot-picker">
    <label class="block text-sm font-medium text-gray-700">Select Time Slot</label>
    <div class="grid grid-cols-4 gap-2 mt-1">
      <button
        v-for="slot in timeSlots"
        :key="slot.time"
        type="button"
        :class="[
          'px-4 py-2 text-sm rounded-md',
          modelValue === slot.time
            ? 'bg-primary text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        ]"
        @click="$emit('update:modelValue', slot.time)"
      >
        {{ slot.time }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  modelValue: String
})

defineEmits(['update:modelValue'])

// TODO: Implement dynamic time slots based on availability
const timeSlots = ref([
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: true },
  { time: '02:00 PM', available: true },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: true },
])
</script> 