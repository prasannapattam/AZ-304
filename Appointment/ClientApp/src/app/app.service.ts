import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
    public menuSubject : Subject<boolean> = new Subject();

    constructor(private router: Router) {
      router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe((e: NavigationEnd)  => {
        this.menuSubject.next(e.url == "/" ? false : true);
        });
    }
  }