import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { Appointment } from "./appointment.model"
import { environment } from 'src/environments/environment';
import { AppointmentViewModel } from './appointment.view.model';


@Injectable()
export class AppointmentService {
    private api: string = environment.appointmentAPI;

    constructor(private http: HttpClient) { }
        
    getAppointmentViewModel(): Observable<AppointmentViewModel>  {
        return this.http.post<AppointmentViewModel>(this.api + '/appointment/getviewmodel', {});
    }

    getAppointments(): Observable<Appointment[]>  {
        return this.http.post<Appointment[]>(this.api + '/appointment/getall', {});
    }

    addAppointment(appointment: Appointment): Observable<Appointment[]> {
        return this.http.post<Appointment[]>(this.api + '/appointment/add', appointment)
    }

    updateAppointment(appointment: Appointment): Observable<Appointment[]> {
        return this.http.post<Appointment[]>(this.api + '/appointment/update', appointment)
    }

    deleteAppointment(appointment: Appointment): Observable<Appointment[]> {
        return this.http.post<Appointment[]>(this.api + '/appointment/delete', appointment)
    }

    initializeData(): Observable<AppointmentViewModel>  {
        return this.http.post<AppointmentViewModel>(this.api + '/appointment/initialize', {});
    }
}