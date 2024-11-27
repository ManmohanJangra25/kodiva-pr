// Mock patient data with more realistic information
export const mockPatients = [
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
        notes: '20 weeks, fetal heartbeat normal, blood pressure stable',
        doctor: 'Dr. Williams'
      },
      {
        id: 4,
        date: '2024-01-15',
        diagnosis: 'Prenatal Care',
        notes: 'First trimester screening completed, all results normal',
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
        notes: 'Blood pressure: 135/85, medication adjusted',
        doctor: 'Dr. Brown'
      },
      {
        id: 6,
        date: '2024-02-15',
        diagnosis: 'Diabetes Check',
        notes: 'HbA1c: 6.8%, maintaining good control',
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

// Mock appointment data with more detailed information
export const mockAppointments = [
  {
    id: 1,
    patientId: 1,
    patientName: 'John Doe',
    date: '2024-03-20',
    time: '09:00',
    duration: 30, // in minutes
    type: 'Regular Checkup',
    status: 'confirmed',
    doctor: 'Dr. Smith',
    department: 'General Medicine',
    notes: 'Annual physical examination',
    createdAt: '2024-03-15T10:30:00',
    updatedAt: '2024-03-15T10:30:00'
  },
  {
    id: 2,
    patientId: 2,
    patientName: 'Jane Smith',
    date: '2024-03-21',
    time: '10:30',
    duration: 45,
    type: 'Pregnancy Checkup',
    status: 'confirmed',
    doctor: 'Dr. Williams',
    department: 'Obstetrics',
    notes: 'Monthly prenatal visit',
    createdAt: '2024-03-14T15:45:00',
    updatedAt: '2024-03-14T15:45:00'
  },
  {
    id: 3,
    patientId: 3,
    patientName: 'Robert Johnson',
    date: '2024-03-22',
    time: '14:00',
    duration: 30,
    type: 'Follow-up',
    status: 'pending',
    doctor: 'Dr. Brown',
    department: 'Cardiology',
    notes: 'Blood pressure monitoring',
    createdAt: '2024-03-16T09:15:00',
    updatedAt: '2024-03-16T09:15:00'
  }
]

// Available time slots with more context
export const mockTimeSlots = [
  {
    id: 1,
    time: '09:00',
    duration: 30,
    available: true,
    doctor: 'Dr. Smith',
    department: 'General Medicine'
  },
  {
    id: 2,
    time: '09:30',
    duration: 30,
    available: true,
    doctor: 'Dr. Smith',
    department: 'General Medicine'
  },
  {
    id: 3,
    time: '10:00',
    duration: 30,
    available: false,
    doctor: 'Dr. Williams',
    department: 'Obstetrics'
  },
  {
    id: 4,
    time: '10:30',
    duration: 45,
    available: true,
    doctor: 'Dr. Williams',
    department: 'Obstetrics'
  },
  {
    id: 5,
    time: '11:00',
    duration: 30,
    available: true,
    doctor: 'Dr. Brown',
    department: 'Cardiology'
  },
  {
    id: 6,
    time: '11:30',
    duration: 30,
    available: false,
    doctor: 'Dr. Brown',
    department: 'Cardiology'
  },
  {
    id: 7,
    time: '14:00',
    duration: 30,
    available: true,
    doctor: 'Dr. Smith',
    department: 'General Medicine'
  },
  {
    id: 8,
    time: '14:30',
    duration: 30,
    available: true,
    doctor: 'Dr. Williams',
    department: 'Obstetrics'
  },
  {
    id: 9,
    time: '15:00',
    duration: 30,
    available: true,
    doctor: 'Dr. Brown',
    department: 'Cardiology'
  },
  {
    id: 10,
    time: '15:30',
    duration: 30,
    available: false,
    doctor: 'Dr. Brown',
    department: 'Cardiology'
  }
]

// Add doctors data for more context
export const mockDoctors = [
  {
    id: 1,
    name: 'Dr. Smith',
    department: 'General Medicine',
    specialization: 'Internal Medicine',
    availability: ['Monday', 'Wednesday', 'Friday']
  },
  {
    id: 2,
    name: 'Dr. Williams',
    department: 'Obstetrics',
    specialization: 'Obstetrics & Gynecology',
    availability: ['Tuesday', 'Thursday']
  },
  {
    id: 3,
    name: 'Dr. Brown',
    department: 'Cardiology',
    specialization: 'Cardiovascular Disease',
    availability: ['Monday', 'Tuesday', 'Thursday']
  }
]

// Add departments data
export const mockDepartments = [
  {
    id: 1,
    name: 'General Medicine',
    description: 'Primary healthcare and general medical services'
  },
  {
    id: 2,
    name: 'Obstetrics',
    description: 'Pregnancy and childbirth care'
  },
  {
    id: 3,
    name: 'Cardiology',
    description: 'Heart and cardiovascular system care'
  }
]
