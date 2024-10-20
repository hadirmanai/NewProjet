import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as Chartist from 'chartist';
import { PoupPackForServicesComponent } from '../poup-pack-for-services/poup-pack-for-services.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  public hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }
  constructor(private dialogRef: MatDialog) { }

  ngOnInit(): void {
    // Si tu n'as pas besoin de ngOnInit pour l'instant, laisse-le vide ou enlève la méthode
  }

  openDialog() {
    this.dialogRef.open(PoupPackForServicesComponent, {
      data: {
        name: 'Samuel'
      },
      width: '400px', // Largeur personnalisée
      height: '100px' // Hauteur personnalisée
    });
  }
}
