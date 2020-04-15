import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { Patient } from "./patient.model"
import { environment } from 'src/environments/environment';


@Injectable()
export class PatientService {
    private api: string = environment.patientAPI;

    constructor(private http: HttpClient) { }
        
    getPatients(): Observable<Patient[]>  {
        return this.http.post<Patient[]>(this.api + '/patient/getall', {});
    }

    addPatient(patient: Patient): Observable<Patient[]> {
        return this.http.post<Patient[]>(this.api + '/patient/add', patient)
    }

    updatePatient(patient: Patient): Observable<Patient[]> {
        return this.http.post<Patient[]>(this.api + '/patient/update', patient)
    }

    deletePatient(patient: Patient): Observable<Patient[]> {
        return this.http.post<Patient[]>(this.api + '/patient/delete', patient)
    }

    initializeData(): Observable<Patient[]>  {
        return this.http.post<Patient[]>(this.api + '/patient/initialize', {});
    }}