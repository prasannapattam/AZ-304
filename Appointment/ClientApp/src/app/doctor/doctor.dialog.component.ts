import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Doctor } from './doctor.model';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'doctor-dialog',
  templateUrl: './doctor.dialog.component.html',
  styleUrls: ['./doctor.dialog.component.css'],
})
export class DoctorDialogComponent {
    form: FormGroup;
    action: string;
    doctor: Doctor;

    nameFormControl: FormControl = new FormControl('', [ Validators.required ]);

    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<DoctorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) 
        { 
            this.doctor = data.doctor;
            this.action = data.action;
        }

    ngOnInit() {
        let disabled: boolean = this.action == "delete"
        this.form = this.fb.group({
            name: [{value: this.doctor.name, disabled: disabled}, Validators.required],
            speciality: [{value: this.doctor.speciality, disabled: disabled}, Validators.required]
        });
    }

    onSave() {
        if(this.form.valid || this.form.disabled) {
            Object.assign(this.doctor, this.form.value);
            this.dialogRef.close(this.doctor);
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }        
}
