import { Component, ViewChild } from '@angular/core';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.model';
import { MatDialog } from '@angular/material/dialog';
import { DoctorDialogComponent } from './doctor.dialog.component';
import { MatTable } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
})
export class DoctorComponent {
  public doctors: Doctor[];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(private service: DoctorService, private route: ActivatedRoute, private dialog: MatDialog) { 
    this.doctors = this.route.snapshot.data['doctors'];
  }

  onDataInitialize(): void {
    if(confirm("Delete and reinitialize data?")) {
      this.service.initializeData()
      .subscribe(doctors => {
        this.table.dataSource = doctors;
        this.table.renderRows();
        });
    }
  }

  onAdd(): void {
    this.showDialog(<Doctor>{}, "add");
  }

  onEdit(doctor: Doctor): void {
    this.showDialog(doctor, "edit");
  }

  onDelete(doctor: Doctor): void {
    this.showDialog(doctor, "delete");
  }

  showDialog(doctor: Doctor, action: string): void {
    const dialogRef = this.dialog.open(DoctorDialogComponent, {
      width: '275px',
      data: {doctor: Object.assign({}, doctor), action: action }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result != undefined) {
        Object.assign(doctor, result);
        let req: Observable<Doctor[]>;
        switch(action) {
          case "add":
            req = this.service.addDoctor(doctor);
            break;
          case "edit":
            req = this.service.updateDoctor(doctor);
            break;
          case  "delete":
            req = this.service.deleteDoctor(doctor);
            break;
        }
        req.subscribe(doctors => {
          this.table.dataSource = doctors;
          this.table.renderRows();
          });
      }
    });
  }
}
