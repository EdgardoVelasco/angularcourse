var Persona = /** @class */ (function () {
    function Persona(nombre, edad, correo) {
        if (correo === void 0) { correo = ""; }
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
    }
    return Persona;
}());
console.log("-*-*-*instancias de clase-*-*-*");
var pe1 = new Persona("edgar", 30, "ed@gmail.com");
var pe2 = new Persona("Brenda", 25);
console.log("pe1: ".concat(pe1.nombre));
console.log("pe2: ".concat(pe2.nombre));
