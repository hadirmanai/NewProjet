import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit {


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


  constructor(private router: Router, private dialogRef: MatDialogRef<AProposComponent>) { }


fermerPopup() {
  this.dialogRef.close(); // Ferme la pop-up
}
navigateAndClose(route: string) {
  this.dialogRef.close(); // Ferme la pop-up
  this.router.navigate([route]); // Navigue vers la nouvelle page
}

}
