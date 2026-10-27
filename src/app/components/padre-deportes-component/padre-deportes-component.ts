import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  public arrayDeportes: Array<string>;
  public mensaje!: string;

  seleccionarFavorito(event: string): void {
    console.log("HEMOS LLEGADO AL PADRE");
    this.mensaje = "Su deporte favorito es " + event;
  }
  constructor(){
    this.arrayDeportes = ["baile", "patinaje", "ballet"]
  }


}
    