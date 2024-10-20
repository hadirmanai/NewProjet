import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoPackComponent } from '../video-pack/video-pack.component';
import { AlertAttentionPackComponent } from '../alert-attention-pack/alert-attention-pack.component';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-details-pack',
  templateUrl: './details-pack.component.html',
  styleUrls: ['./details-pack.component.css']
})
export class DetailsPackComponent implements OnInit {

  constructor(private dialogRef: MatDialog, private alertService: AlertService) { }

  ngOnInit(): void {
    // Si tu n'as pas besoin de ngOnInit pour l'instant, laisse-le vide ou enlève la méthode
  }

  openDialog() {
    this.dialogRef.open(VideoPackComponent, {
      data: {
        name: 'Samuel'
      },
      width: '100px', // Largeur personnalisée
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

}
