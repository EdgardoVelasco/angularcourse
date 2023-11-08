/*-*-*Funciones que retornan valor-*-*-*-*/
//5!=5*4*3*2*1
function factorial(numero) {
    var factorial = 1;
    for (var i = numero; i > 0; i--) {
        //factorial= factorial*i;
        factorial *= i;
    }
    return factorial;
}
console.log("-*-*-*funcion que retorna valor-*-*");
console.log("5!= ".concat(factorial(5)));
console.log("10!= ".concat(factorial(10)));
/*funciones que no retornan valor*/
function suma(arreglo) {
    var suma = 0;
    for (var _i = 0, arreglo_1 = arreglo; _i < arreglo_1.length; _i++) {
        var tmp = arreglo_1[_i];
        suma += tmp;
    }
    console.log("la suma de [".concat(arreglo, "] es= ").concat(suma));
}
console.log("-*-*-*Método que no retorna-*-*-*-*");
suma([5, 48, 9]);
suma([8, 9, 10, 45]);
