const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  patientName: { type: String, require: true },
  doctorName: { type: String, require: true },
  date: { type: Date, required: true },
});
const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
