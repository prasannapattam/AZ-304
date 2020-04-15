import { Component, ViewChild } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from './patient.model';
import { MatDialog } from '@angular/material/dialog';
import { PatientDialogComponent } from './patient.dialog.component';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css'],
})
export class PatientComponent {
  public patients: Patient[];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private service: PatientService, private route: ActivatedRoute, private dialog: MatDialog) { 
    this.patients = this.route.snapshot.data['patients'];
  }

  onDataInitialize(): void {
    if(confirm("Delete and reinitialize data?")) {
      this.service.initializeData()
      .subscribe(patients => {
        this.table.dataSource = patients;
        this.table.renderRows();
        });
    }
  }

  onAdd(): void {
    this.showDialog(<Patient>{}, "add");
  }

  onEdit(patient: Patient): void {
    this.showDialog(patient, "edit");
  }

  onDelete(patient: Patient): void {
    this.showDialog(patient, "delete");
  }

  showDialog(patient: Patient, action: string): void {
    const dialogRef = this.dialog.open(PatientDialogComponent, {
      width: '275px',
      data: { patient: Object.assign({}, patient), action: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined) {
        Object.assign(patient, result);
        let req: Observable<Patient[]>;
        switch(action) {
          case "add":
            req = this.service.addPatient(patient);
            break;
          case "edit":
            req = this.service.updatePatient(patient);
            break;
          case  "delete":
            req = this.service.deletePatient(patient);
            break;
        }
        req.subscribe(patients => {
          this.table.dataSource = patients;
          this.table.renderRows();
          });
      }
    });
  }
}
