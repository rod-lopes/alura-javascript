// tipo de dado
// booleanos 

// conversão implícita

const numero = 456;
const numeroString ="456";

//Nesta análise, o operador == verifica o valor dos campos se são iguais (não identificando o tipo da variával)
console.log( numero == numeroString)


//Nesta análise, o operador === verifica o valor dos campos se são iguais (identificando também o tipo da variával)
console.log( numero === numeroString)


//Conversão em número devemos utilizar a função Number()

console.log(numero + Number(numeroString))

// conversão explícita