<template>
  <button
    :type="type"
    :class="[
      'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium',
      variantClasses[variant]
    ]"
    :disabled="loading || disabled"
  >
    <span v-if="loading" class="mr-2">
      <!-- Add loading spinner -->
    </span>
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button'
  },
  variant: {
    type: String,
    default: 'primary'
  },
  loading: Boolean,
  disabled: Boolean
})

const variantClasses = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700'
}
</script> 