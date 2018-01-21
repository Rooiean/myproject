import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized } from '@angular/router';

declare var $:any;

@Component({
  selector: 'application',
  templateUrl: 'application.html'
})
export class ApplicationComponent {
  constructor(private router: Router) {}
}