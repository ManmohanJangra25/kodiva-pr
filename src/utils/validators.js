// TODO: Implement comprehensive validation rules
export const validators = {
  required: (value) => !!value || "This field is required",
  email: (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value) || "Invalid email format";
  },
  phone: (value) => {
    const pattern = /^\d{10}$/;
    return pattern.test(value) || "Invalid phone number";
  },
};
