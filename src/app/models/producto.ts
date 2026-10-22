export class Producto{
    public nombre : string;
    public imagen: string;
    public precio: number;

    constructor(name: string, img: string, price: number){
        this.imagen = img;
        this.nombre = name;
        this.precio = price;
    }
}