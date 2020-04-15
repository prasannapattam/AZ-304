import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorResolve } from './doctor/doctor.resolve';
import { PatientComponent } from './patient/patient.component';
import { PatientResolve } from './patient/patient.resolve';
import { AppointmentResolve } from './appointment/appointment.resolve';
import { AppointmentComponent } from './appointment/appointment.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'doctor', 
    component: DoctorComponent,
    resolve: {
      doctors: DoctorResolve
    }
  },
  { 
    path: 'patient', 
    component: PatientComponent,
    resolve: {
      patients: PatientResolve
    }
  },
  { 
    path: 'appointment', 
    component: AppointmentComponent,
    resolve: {
      appointmentViewModel: AppointmentResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
