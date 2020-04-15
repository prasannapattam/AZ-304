import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { Doctor } from "./doctor.model"
import { environment } from 'src/environments/environment';


@Injectable()
export class DoctorService {
    private api: string = environment.doctorAPI;

    constructor(private http: HttpClient) { }
        
    getDoctors(): Observable<Doctor[]>  {
        return this.http.post<Doctor[]>(this.api + '/doctor/getall', {});
    }

    addDoctor(doctor: Doctor): Observable<Doctor[]> {
        return this.http.post<Doctor[]>(this.api + '/doctor/add', doctor)
    }

    updateDoctor(doctor: Doctor): Observable<Doctor[]> {
        return this.http.post<Doctor[]>(this.api + '/doctor/update', doctor)
    }

    deleteDoctor(doctor: Doctor): Observable<Doctor[]> {
        return this.http.post<Doctor[]>(this.api + '/doctor/delete', doctor)
    }

    initializeData(): Observable<Doctor[]>  {
        return this.http.post<Doctor[]>(this.api + '/doctor/initialize', {});
    }
}