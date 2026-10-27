import { Component, ChangeDetectorRef } from '@angular/core';
import { Comic } from '../../models/comic';
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-comic-excel-component',
  standalone: false,
  styleUrl: './comic-excel-component.css',
  templateUrl: './comic-excel-component.html',
})
export class ComicExcelComponent {
  public comics!: Array<Comic>

  constructor(private _cdr : ChangeDetectorRef) {
    this.comics = []
  }
  cargarComics(): void {
    let path= "./assets/comics.xlsx"
    fetch(path).then(response => response.arrayBuffer()).then((buffer)=>{
      //leer buffer y transformarlo
      let workbook = XLSX.read(buffer,{type: "array"});
      //para recuperar las hojas del libro
      let hojaName = workbook.SheetNames[0];
      //RECUPERAMOS la hoja
      let hoja = workbook.Sheets[hojaName];
      //como tiene formato de tabla la convertimos a json
      let data = XLSX.utils.sheet_to_json(hoja);
      this.comics = data.map((c: any) => new Comic(c.nombre, c.imagen, c.descripcion))
      this._cdr.detectChanges()
    })
  }
}
