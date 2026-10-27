import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";
@Injectable()
export class ServiceComics{

    getComics(): any{
        let path= "./assets/comics.json"
        fetch(path).then(response => response.json()).then((data: any[])=>{
            let comics = [];
            for (let elem of data) {
                let comic = new Comic(elem.nombre, elem.imagen, elem.descripcion);
                comics.push(comic);
            }
            return comics
        })
    }
}