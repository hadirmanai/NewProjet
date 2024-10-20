import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-video-pack',
  templateUrl: './video-pack.component.html',
  styleUrls: ['./video-pack.component.css']
})
export class VideoPackComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<VideoPackComponent>){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  showPopup = true; // Control popup visibility

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
  fermerPopup() {
    this.dialogRef.close(); // Ferme la pop-up
  }

}
