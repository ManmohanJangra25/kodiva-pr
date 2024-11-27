import { defineStore } from "pinia";
import { patientService } from "@/services/patientService";

export const usePatientStore = defineStore("patient", {
  state: () => ({
    patients: [],
    selectedPatient: null,
    loading: false,
    error: null,
  }),

  actions: {
    // TODO: Implement caching mechanism
    async fetchPatients() {
      this.loading = true;
      try {
        const response = await patientService.getPatients();
        this.patients = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchPatientDetails(id) {
      try {
        const response = await patientService.getPatientById(id);
        this.selectedPatient = response.data;
      } catch (error) {
        this.error = error;
      }
    },
  },
});
