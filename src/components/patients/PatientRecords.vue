<template>
  <div>

    <!-- TODO: Improve semantic structure and accessibility -->
     <!-- Add Tags like "Patient Records in the for attribute of the respective input elements for a clear approach" -->
    <div class="patient-records">
      <div class="header">
        <h1>Patient Records</h1>
        <input 
          type="text"
          v-model="searchQuery"
          placeholder="Search patients..."
        />
      </div>

      <div class="records-list">
        <div 
          v-for="patient in patients" 
          :key="patient.id"
          class="patient-card"
          @click="selectPatient(patient)"
        >
          <div class="patient-info">
            <div class="name">{{ patient.name }}</div>
            <div class="details">
              <span>ID: {{ patient.id }}</span>
              <span>Age: {{ patient.age }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePatients } from '@/composables/usePatients'

const { fetchPatients } = usePatients()
const patients = ref([])
const searchQuery = ref('')

// TODO: Implement caching and lazy loading
onMounted(async () => {
  try {
    // First We Need To Add loading state for patient record data like loading spinner
    patients.value = await fetchPatients()
  } catch (error) {
    // We Need To Add error handling for failed API requests like - Patient Not Found Check the name or email
    console.error('Failed to fetch patients:', error)
  }
})
</script> 