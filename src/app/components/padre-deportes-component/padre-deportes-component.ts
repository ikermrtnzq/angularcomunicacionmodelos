import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  public arrayDeportes: Array<string>
  constructor(){
    this.arrayDeportes = ["baile", "patinaje", "ballet"]
  }
}
