import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertAttentionPackComponent } from '../alert-attention-pack/alert-attention-pack.component';
import { AlertService } from '../alert.service';
import { VideoPackComponent } from '../video-pack/video-pack.component';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  isBlocked: boolean = true; // Starts with the page blocked
  @ViewChild('videoPlayer') videoPlayer!: ElementRef; 
  constructor(private dialogRef: MatDialog, private alertService: AlertService) { }

  ngOnInit(): void {
    this.startTimer(this.countdown);
  }

  openDialog() {
    this.dialogRef.open(VideoPackComponent, {
      data: {
        name: 'Samuel'
      },
      width: '400px', // Largeur personnalisée
      height: '100px' // Hauteur personnalisée
    });
  }
  openAlert() {
   
    this.dialogRef.open(AlertAttentionPackComponent, {
      data: {
        name: 'Samuel'
      },
      width: '400px', // Largeur personnalisée
      height: '500px' // Hauteur personnalisée
    }
  );
  this.alertService.openAlert(); 

  }
  countdown: number = 10; // Timer duration (in seconds)
  isTimerActive: boolean = true; // Controls the display of the overlay




  // Function to start the timer countdown
  startTimer(duration: number): void {
    let timeRemaining = duration;

    const timerInterval = setInterval(() => {
      this.countdown = timeRemaining;
      timeRemaining--;

      // When the time is up, hide the overlay
      if (timeRemaining < 0) {
        clearInterval(timerInterval);
        this.isTimerActive = false; // Unblock the page by hiding the overlay
      }
    }, 1000); // Update every second
  }
  onVideoPlay(): void {
    this.isBlocked = true; // Block the page
  }

  // Called when the video finishes
  onVideoEnded(): void {
    this.isBlocked = false; // Unblock the page after the video ends
  }
}


