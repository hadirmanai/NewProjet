import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-attention-pack',
  templateUrl: './alert-attention-pack.component.html',
  styleUrls: ['./alert-attention-pack.component.css']
})
export class AlertAttentionPackComponent implements OnInit {
  showAlert: boolean = true; // Initially, the alert is hidden
  message: string = ''; // Message to display in the pop-up

  constructor(private router: Router, private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.alertState$.subscribe((state) => {
      this.showAlert = state; // Update showAlert based on the service state
      if (this.showAlert) {
        this.message = ''; // Clear the message when the alert is shown
      }
    });
  }

  accept() {
    this.alertService.closeAlert(); // Close the pop-up
  }

  refuse() {
    this.alertService.closeAlert(); // Close the pop-up
    this.router.navigate(['/blocage']); // Navigate to the blocage page
    this.showAlert = true; // Keep the alert visible
    this.message = 'Désolé, nous avons bloqué votre compte.'; // Set the message
  }
}