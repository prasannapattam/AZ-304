import { Patient } from "../patient/patient.model";
import { Doctor } from "../doctor/doctor.model";

export class Appointment {
    id: string;
    patient: Patient;
    doctor: Doctor;
    appointmentDate: Date;
}
