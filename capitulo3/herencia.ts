/*-*-*-clase padre-*-*-*-*/
class Electrodomestico{
    private _nombre:string;
    private _marca:string;
    private _precio:number;

    constructor(nombre:string, marca:string, precio:number){
        this._nombre=nombre;
        this._marca=marca;
        this._precio=precio;
    }

    public get nombre():string{return this._nombre;}
    public set nombre(nombre:string){this._nombre=nombre;}

    public get marca():string{ return this._marca;}
    public set marca(marca:string){this._marca=marca;}

    public get precio():number{return this._precio;}
    public set precio(precio:number){this._precio=precio;}
}