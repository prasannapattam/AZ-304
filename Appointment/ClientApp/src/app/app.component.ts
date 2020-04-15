import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showMenu: boolean = false;
  constructor(public service: AppService) {
    this.service.menuSubject.subscribe( (show: boolean) => {
      this.showMenu = show;
      });
  }
}
