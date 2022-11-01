const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura123455!";
const StringDeNumeros = "34567";
const citacao = "Meu nome é "
const meuNome = "Rodrigo"

// concatenacao (+)

console.log(citacao + meuNome )

// Template string OU template literal

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const citacaoMaiuscula = citacao.toUpperCase();

console.log(citacaoMaiuscula)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres

const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR)
