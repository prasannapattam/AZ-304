import { Patient } from "../patient/patient.model";
import { Doctor } from "../doctor/doctor.model";
import { Appointment } from "./appointment.model";

export class AppointmentViewModel {
    appointments: Appointment[];
    doctors: Doctor[];
    patients: Patient[];
}
