<template>
  <div class="form-control">
    <label :for="id" class="block text-sm font-medium text-gray-700">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
      v-bind="$attrs"
    />
    <span v-if="error" class="text-sm text-red-600">{{ error }}</span>
  </div>
</template>

<script setup>
defineProps({
  id: String,
  label: String,
  modelValue: [String, Number],
  type: {
    type: String,
    default: 'text'
  },
  required: Boolean,
  error: String
})

defineEmits(['update:modelValue'])
</script> 