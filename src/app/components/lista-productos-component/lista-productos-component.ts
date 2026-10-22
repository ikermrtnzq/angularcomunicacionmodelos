import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista-productos-component',
  standalone: false,
  styleUrl: './lista-productos-component.css',
  templateUrl: './lista-productos-component.html',
})
export class ListaProductosComponent {
  public producto : Producto;
  constructor(){
    this.producto = new Producto("batido","https://www.istockphoto.com/es/fotos/batido-de-leche",4.97)
  }
}
