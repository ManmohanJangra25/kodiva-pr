// Mock patient data
const mockPatients = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    age: 45,
    gender: 'Male',
    dateOfBirth: '1979-05-15',
    address: '123 Main St, Boston, MA 02108',
    lastVisit: '2024-03-15',
    medicalHistory: [
      {
        id: 1,
        date: '2024-03-15',
        diagnosis: 'Regular Checkup',
        notes: 'Blood pressure: 120/80, Weight: 75kg',
        doctor: 'Dr. Smith'
      },
      {
        id: 2,
        date: '2024-02-01',
        diagnosis: 'Flu',
        notes: 'Prescribed Tamiflu 75mg',
        doctor: 'Dr. Johnson'
      }
    ],
    insurance: {
      provider: 'HealthCare Plus',
      policyNumber: 'HP123456789',
      expiryDate: '2024-12-31'
    }
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '098-765-4321',
    age: 32,
    gender: 'Female',
    dateOfBirth: '1992-08-20',
    address: '456 Park Ave, Boston, MA 02109',
    lastVisit: '2024-03-10',
    medicalHistory: [
      {
        id: 3,
        date: '2024-03-10',
        diagnosis: 'Pregnancy Checkup',
        notes: '20 weeks, fetal heartbeat normal',
        doctor: 'Dr. Williams'
      }
    ],
    insurance: {
      provider: 'MediCare Solutions',
      policyNumber: 'MS987654321',
      expiryDate: '2025-06-30'
    }
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert.j@example.com',
    phone: '555-123-4567',
    age: 58,
    gender: 'Male',
    dateOfBirth: '1966-11-03',
    address: '789 Oak Rd, Boston, MA 02110',
    lastVisit: '2024-03-01',
    medicalHistory: [
      {
        id: 5,
        date: '2024-03-01',
        diagnosis: 'Hypertension Follow-up',
        notes: 'Blood pressure: 135/85',
        doctor: 'Dr. Brown'
      }
    ],
    insurance: {
      provider: 'Global Health Insurance',
      policyNumber: 'GH456789123',
      expiryDate: '2024-09-30'
    }
  }
]

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


// This function is not modulated and has too many work to do.
// Break it down into smaller functions, each with a single responsibility.
export const patientService = {
  // TODO: Implement caching layer
  async getPatients() {
    await delay(500)
    return { data: mockPatients }
  },

  async getPatientById(id) {
    await delay(500)
    const patient = mockPatients.find((p) => p.id === parseInt(id))
    // Implement proper error handling for API requests like - Patient Not Found Check the name or email
    if (!patient) {
      // Implement more detailed error messages for failed requests - Like Patient Not Found Check the name or email
      throw new Error('Patient not found')
    }
    return { data: patient }
  },

  // Additional method for searching patients
  async searchPatients(query) {
    await delay(500)
    const searchResults = mockPatients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(query.toLowerCase()) ||
        patient.email.toLowerCase().includes(query.toLowerCase())
    )
    return { data: searchResults }
  }
}
