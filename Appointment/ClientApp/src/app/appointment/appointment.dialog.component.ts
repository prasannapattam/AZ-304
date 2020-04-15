import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Appointment } from './appointment.model';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AppointmentViewModel } from './appointment.view.model';
import { Doctor } from '../doctor/doctor.model';
import { Patient } from '../patient/patient.model';

@Component({
  selector: 'appointment-dialog',
  templateUrl: './appointment.dialog.component.html',
  styleUrls: ['./appointment.dialog.component.css'],
})
export class AppointmentDialogComponent {
    public form: FormGroup;
    public appointment: Appointment;
    public doctors: Doctor[];
    public patients: Patient[];
    public action: string;

    nameFormControl: FormControl = new FormControl('', [ Validators.required ]);

    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<AppointmentDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data) 
        { 
            this.appointment = data.appointment;
            this.doctors = data.doctors;
            this.patients = data.patients;
            this.action = data.action;
        }

    ngOnInit() {
        let disabled: boolean = this.action == "delete"
        this.form = this.fb.group({
            patient: [{value: this.appointment.patient, disabled: disabled}, Validators.required],
            doctor: [{value: this.appointment.doctor, disabled: disabled}, Validators.required],
            appointmentDate: [{value: new Date(this.appointment.appointmentDate).toISOString().substring(0,10), disabled: disabled}, Validators.required]
        });
    }

    compareIds(i1, i2){
        return i1 != undefined && i2 != undefined && i1.id == i2.id;
    }

    onSave() {
        if(this.form.valid || this.form.disabled) {
            Object.assign(this.appointment, this.form.value);
            this.dialogRef.close(this.appointment);
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }        
}
