const porcess = require('process')
const calculadora = require('./operacionesCalculadora');
console.log(calculadora);
const opcion = +process.argv[2]
const numeroA = +process.argv[3];
const NumeroB = +process.argv[4];
let resultado = 0;
console.log("Bienvenido/a a la Nueva Calculadora IA, ingrese a la opcion de su preferencia \n ---------------------- \n 1)suma \n 2)resta \n 3)multiplicar \n 4)dividir \n 5)potencia \n 6)raiz \n 7)modulo  \n ---------------------- ");

switch(opcion){
    case 1:
        resultado = calculadora.sumar(numeroA,NumeroB)
        break;
    case 2:
        resultado = calculadora.restar(numeroA, NumeroB)
        break;
    case 3:
        resultado = calculadora.mutltiplicar(numeroA, NumeroB)
        break;
    case 4:
        resultado = calculadora.dividir(numeroA, NumeroB)
        break
    case 5: 
        resultado = calculadora.potencia(numeroA, NumeroB)
        break;
    case 6:
         resultado = calculadora.raiz(numeroA,NumeroB)
        break;
    default:
        resultado = calculadora.modulo(numeroA, NumeroB)
        break; 


 
}
console.log(resultado)

