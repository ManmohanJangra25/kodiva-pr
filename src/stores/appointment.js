import { defineStore } from "pinia";
import { appointmentService } from "@/services/appointmentService";

export const useAppointmentStore = defineStore("appointment", {
  state: () => ({
    appointments: [],
    loading: false,
    error: null,
  }),

  actions: {
    // TODO: Add caching and optimization
    async fetchAppointments() {
      this.loading = true;
      try {
        const response = await appointmentService.getAppointments();
        this.appointments = response.data;
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async createAppointment(appointmentData) {
      // TODO: Add validation and duplicate checking
      try {
        await appointmentService.createAppointment(appointmentData);
        await this.fetchAppointments();
      } catch (error) {
        throw error;
      }
    },
  },
});
