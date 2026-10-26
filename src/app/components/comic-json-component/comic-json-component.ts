import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-json-component',
  standalone: false,
  styleUrl: './comic-json-component.css',
  templateUrl: './comic-json-component.html',
})
export class ComicJsonComponent {
  public comics!: Array<Comic>
  constructor(private _cdr: ChangeDetectorRef){
    this.comics = []
  }
  cargarComics(): void {
    let path= "./assets/comics.json"
    fetch(path).then(response => response.json()).then((data: any[])=>{
      for (let elem of data) {
        let comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
        this.comics.push(comic);
      }
      this._cdr.detectChanges()
    })
  }
}
