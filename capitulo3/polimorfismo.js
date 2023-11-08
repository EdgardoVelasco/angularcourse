var Automovil = /** @class */ (function () {
    function Automovil() {
    }
    Automovil.prototype.prender = function () {
        console.log("Prendiendo auto");
    };
    Automovil.prototype.apagar = function () {
        console.log("apagando auto");
    };
    return Automovil;
}());
var Robot = /** @class */ (function () {
    function Robot() {
    }
    Robot.prototype.prender = function () {
        console.log("Prendiendo robot");
    };
    Robot.prototype.apagar = function () {
        console.log("apagando auto");
    };
    return Robot;
}());
console.log("-*-*-*polimorfismo-*-*-*");
var auto = new Automovil();
var robot = new Robot();
auto.prender();
robot.prender();
