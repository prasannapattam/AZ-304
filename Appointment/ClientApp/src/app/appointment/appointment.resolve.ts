import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { AppointmentService } from './appointment.service';
import { Observable } from 'rxjs';
import { AppointmentViewModel } from './appointment.view.model';

@Injectable()
export class AppointmentResolve implements Resolve<AppointmentViewModel> {

  constructor(private service: AppointmentService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<AppointmentViewModel> {
    return this.service.getAppointmentViewModel();
  }
}
