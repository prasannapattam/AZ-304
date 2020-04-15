import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Patient } from './patient.model';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'patient-dialog',
  templateUrl: './patient.dialog.component.html',
  styleUrls: ['./patient.dialog.component.css'],
})
export class PatientDialogComponent {
    form: FormGroup;
    patient: Patient;
    action: string;

    nameFormControl: FormControl = new FormControl('', [ Validators.required ]);

    constructor(public fb: FormBuilder, public dialogRef: MatDialogRef<PatientDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) 
        { 
            this.patient = data.patient;
            this.action = data.action;
        }

    ngOnInit() {
        let disabled: boolean = this.action == "delete"
        this.form = this.fb.group({
            name: [{value: this.patient.name, disabled: disabled}, Validators.required],
            phone: [{value: this.patient.phone, disabled: disabled}]
        });
    }

    onSave() {
        if(this.form.valid || this.form.disabled) {
            Object.assign(this.patient, this.form.value);
            this.dialogRef.close(this.patient);
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }        
}
