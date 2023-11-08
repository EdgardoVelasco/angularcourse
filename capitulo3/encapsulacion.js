var Persona = /** @class */ (function () {
    function Persona(nombre, edad, correo) {
        this._nombre = nombre;
        this._correo = correo;
        this._edad = edad;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        //lectura
        get: function () {
            return this._nombre;
        },
        //escritura
        set: function (nombreN) {
            if (nombreN.length > 2) {
                this._nombre = nombreN;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
console.log("-*-*-*Encapsulación-*-*-*");
var p1 = new Persona("edgar", 30, "ed@gmail.com");
var p2 = new Persona("Teresa", 24, "teresa@hotmail.com");
console.log(p1.nombre);
p1.nombre = "edgardo";
console.log(p1.nombre);
