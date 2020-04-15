import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PatientService } from './patient.service';
import { Patient } from './patient.model';
import { Observable } from 'rxjs';

@Injectable()
export class PatientResolve implements Resolve<Patient[]> {

  constructor(private service: PatientService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Patient[]> {
    return this.service.getPatients();
  }
}
