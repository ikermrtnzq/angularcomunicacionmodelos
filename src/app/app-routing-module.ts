import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ListaProductosComponent } from './components/lista-productos-component/lista-productos-component';
import { PadreCochesComponent } from './components/padre-coches-component/padre-coches-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { PadreNumeroComponent } from './components/padre-numero-component/padre-numero-component';
import { ComicSimpleComponent } from './components/comic-simple-component/comic-simple-component';
import { ComicJsonComponent } from './components/comic-json-component/comic-json-component';
import { ComicExcelComponent } from './components/comic-excel-component/comic-excel-component';

const routes: Routes = [
  {path: "", component : HomeComponent},
  {path: "listaproductos", component: ListaProductosComponent},
  {path: "coches", component: PadreCochesComponent},
  {path: "deportes", component: PadreDeportesComponent},
  {path: "numeros", component: PadreNumeroComponent},
  {path: "comicsimple", component: ComicSimpleComponent},
  {path: "comicjson", component: ComicJsonComponent},
  {path: "comicexcel", component: ComicExcelComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
