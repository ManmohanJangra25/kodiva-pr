import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import NewAppointmentView from '@/views/appointments/NewAppointmentView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/appointments/new',
    name: 'new-appointment',
    component: NewAppointmentView
  },
  {
    path: '/appointments',
    name: 'Appointments',
    component: () => import('@/views/AppointmentsView.vue')
  },
  {
    path: '/patients',
    name: 'PatientRecords',
    component: () => import('@/views/PatientRecordsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(''),
  routes
})

export default router
