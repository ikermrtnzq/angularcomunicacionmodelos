import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deporte-component',
  standalone: false,
  styleUrl: './deporte-component.css',
  templateUrl: './deporte-component.html',
})
export class DeporteComponent {
  @Input() sport!: string;
  public mensaje! : string;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  mostrarFavorito(): void {
    this.seleccionarFavorito.emit(this.sport);
  }
}
