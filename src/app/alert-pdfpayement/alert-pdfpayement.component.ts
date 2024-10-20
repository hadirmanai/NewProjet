import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-pdfpayement',
  templateUrl: './alert-pdfpayement.component.html',
  styleUrls: ['./alert-pdfpayement.component.css']
})
export class AlertPDFPayementComponent implements OnInit {
  firstName;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.firstName = data.name
  }

  ngOnInit(): void {
  }

  handleClick() {
    // Handle button click
    console.log('Button clicked!');
  }

}
