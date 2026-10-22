import { Component } from '@angular/core';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-padre-coches-component',
  standalone: false,
  styleUrl: './padre-coches-component.css',
  templateUrl: './padre-coches-component.html',
})
export class PadreCochesComponent {
  public coches : Array<Coche>;
  constructor(){
    this.coches = [
      new Coche("Ford", "mustang", 0, 45),
      new Coche("volkswagen", "escarabajo", 0, 10),
      new Coche("lamborgini", "diablo", 0, 75)
    ]
  }
}
