import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSubject = new Subject<boolean>(); // Subject to manage alert state

  alertState$ = this.alertSubject.asObservable(); // Observable for alert state

  // Method to open the alert
  openAlert() {
    this.alertSubject.next(true); // Emit true to show the alert
  }

  // Method to close the alert
  closeAlert() {
    this.alertSubject.next(false); // Emit false to hide the alert
  }
}
