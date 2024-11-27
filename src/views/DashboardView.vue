<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Healthcare Portal Dashboard</h1>
    
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Quick Actions Card -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
        <div class="space-y-4">
          <router-link 
            to="/appointments/new"
            class="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book New Appointment
            </div>
          </router-link>
          <router-link 
            to="/patients"
            class="block p-4 border rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              View Patient Records
            </div>
          </router-link>
        </div>
      </div>

      <!-- Statistics Card -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Today's Overview</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-gray-600">Today's Appointments</p>
            <p class="text-2xl font-bold text-blue-600">
              {{ isLoading ? '...' : todayAppointments.length }}
            </p>
          </div>
          <div class="p-4 bg-green-50 rounded-lg">
            <p class="text-sm text-gray-600">Total Patients</p>
            <p class="text-2xl font-bold text-green-600">
              {{ isLoading ? '...' : totalPatients }}
            </p>
          </div>
        </div>
      </div>

      <!-- Recent Appointments -->
      <div class="bg-white p-6 rounded-lg shadow md:col-span-2">
        <h2 class="text-xl font-semibold mb-4">Recent Appointments</h2>
        <div v-if="isLoading" class="text-center py-4">
          Loading...
        </div>
        <div v-else-if="recentAppointments.length === 0" class="text-center py-4 text-gray-500">
          No recent appointments
        </div>
        <div v-else class="space-y-4">
          <div v-for="appointment in recentAppointments" 
               :key="appointment.id"
               class="p-4 border rounded-lg hover:bg-gray-50">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="font-semibold">{{ appointment.patientName }}</h3>
                <p class="text-sm text-gray-600">
                  {{ formatDate(appointment.date) }} at {{ appointment.time }}
                </p>
                <p class="text-sm text-gray-600">{{ appointment.type }}</p>
              </div>
              <span :class="getStatusClass(appointment.status)"
                    class="px-2 py-1 rounded-full text-xs">
                {{ appointment.status }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { appointmentService } from '@/services/appointmentService'
import { patientService } from '@/services/patientService'

const appointments = ref([])
const patients = ref([])
const isLoading = ref(true)
const error = ref(null)

// Computed properties
const todayAppointments = computed(() => {
  const today = new Date().toISOString().split('T')[0]
  return appointments.value.filter(apt => apt.date === today)
})

const totalPatients = computed(() => patients.value.length)

const recentAppointments = computed(() => {
  return [...appointments.value]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)
})

// Methods
const fetchDashboardData = async () => {
  isLoading.value = true
  try {
    const [appointmentsResponse, patientsResponse] = await Promise.all([
      appointmentService.getAppointments(),
      patientService.getPatients()
    ])
    appointments.value = appointmentsResponse.data
    patients.value = patientsResponse.data
  } catch (err) {
    error.value = 'Failed to load dashboard data'
    console.error('Dashboard data error:', err)
  } finally {
    isLoading.value = false
  }
}

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  })
}

const getStatusClass = (status) => {
  const statusClasses = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    cancelled: 'bg-red-100 text-red-800'
  }
  return statusClasses[status] || 'bg-gray-100 text-gray-800'
}

// Lifecycle hooks
onMounted(() => {
  fetchDashboardData()
})
</script>

<style scoped>
.transition-colors {
  transition: background-color 0.2s ease;
}
</style> 