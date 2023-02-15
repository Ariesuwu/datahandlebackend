const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentPermentId: { type: String, required: false },
    studentFullName: { type: String, required: true },
    email: { type: String, required: false },
    fatherName: { type: String, required: false },
    motherName: { type: String, required: false },
    studentPhoneNumber: { type: String, required: false },
    guardianPhoneNumber: { type: String, required: false },
    specialNote: { type: String, required: false },
    studentPhoto: { type: String, required: false },
    studentSchool: { type: String, required: false },
    sllabys: { type: String, required: false },
    subject: { type: String, required: false },
    StartDate: { type: Date, required: false },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
