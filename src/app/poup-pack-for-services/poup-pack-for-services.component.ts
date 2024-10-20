import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poup-pack-for-services',
  templateUrl: './poup-pack-for-services.component.html',
  styleUrls: ['./poup-pack-for-services.component.css'],
 
})
export class PoupPackForServicesComponent implements OnInit {

    ngOnInit(): void {
      //throw new Error('Method not implemented.');
    }


    constructor(private router: Router, private dialogRef: MatDialogRef<PoupPackForServicesComponent>) { }


  fermerPopup() {
    this.dialogRef.close(); // Ferme la pop-up
  }
  navigateAndClose(route: string) {
    this.dialogRef.close(); // Ferme la pop-up
    this.router.navigate([route]); // Navigue vers la nouvelle page
  }
}