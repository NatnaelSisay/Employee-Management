// CALL MONGOSE AND CREATE SCHEMA HERE
const EmployeeSchema = {
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  salary: {
    type: Float32Array,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
};
