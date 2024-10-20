import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertPDFPayementComponent } from '../alert-pdfpayement/alert-pdfpayement.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentComponent implements OnInit {


  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  title = 'angular-mateiral';

  constructor(private dialogRef : MatDialog){}

  openDialog(){
    this.dialogRef.open( AlertPDFPayementComponent,{
      data : {
        name : 'Samuel'
      },
      width: '350px',      // Set custom width
      height: '350px',   // Set custom height
      panelClass: 'custom-dialog-container' 
    });
  }

}
