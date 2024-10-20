import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AProposComponent } from '../a-propos/a-propos.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-video-publicite-service',
  templateUrl: './video-publicite-service.component.html',
  styleUrls: ['./video-publicite-service.component.css']
})
export class VideoPubliciteServiceComponent implements OnInit {

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


  constructor(private router: Router, private dialogRef: MatDialogRef<VideoPubliciteServiceComponent>) { }


fermerPopup() {
  this.dialogRef.close(); // Ferme la pop-up
}
navigateAndClose(route: string) {
  this.dialogRef.close(); // Ferme la pop-up
  this.router.navigate([route]); // Navigue vers la nouvelle page
}
isPopupVisible = true;

onVideoEnded(): void {
  this.isPopupVisible = false; // Fermer la pop-up à la fin de la vidéo
}

}
