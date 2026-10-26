import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-numero-component',
  standalone: false,
  styleUrl: './padre-numero-component.css',
  templateUrl: './padre-numero-component.html',
})
export class PadreNumeroComponent {
  public suma! : number;
  public numeros!: Array<number>;

  generarNumero(): void {
    let random= Math.floor(Math.random() * 100) + 1;
    this.numeros.push(random)
  }
  sumar(event: number) : void{
    this.suma = this.suma+ event;
  }
  constructor(){
    this.numeros= [5, 11],
    this.suma = 0;
  }
}
