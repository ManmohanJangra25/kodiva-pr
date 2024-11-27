import { ref } from "vue";
import { patientService } from "@/services/patientService";

export function usePatients() {
  const patients = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // TODO: Implement caching mechanism
  const fetchPatients = async () => {
    loading.value = true;
    try {
      const response = await patientService.getPatients();
      patients.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err;
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    patients,
    loading,
    error,
    fetchPatients,
  };
}
