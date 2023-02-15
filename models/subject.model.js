const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema(
  {
    subject: { type: String, required: false },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
