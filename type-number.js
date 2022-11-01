// Tipo Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero - segundoNumero;

console.log(operacaoMatematica)

// Ponto Flutuante

const meuPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const NovaOperacao = primeiroNumero / meuPontoFlutuante;

console.log(NovaOperacao)

// NaN -> Not a Number (não pe um número)

const alura = "Alura";
console.log(alura*primeiroNumero)

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input3 = null;
let input2;

console.log(input3); // null
console.log(input2); // undefined