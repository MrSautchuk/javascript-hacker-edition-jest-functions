// Função que soma dois números
// Declara as variaveis e atribui valor a elas

let a1 = 10
let a2 = 21

// declara uma variavel e atribui o valor do resultado da soma a ela

let Soma = somar(a1, a2)

// função que realiza a soma

function somar(a1, a2) {
  return a1 + a2  
}

// exibe o resultado no console

console.log(` A soma enter os valores ${a1} e ${a2} é de ${Soma}`)

// Função que subtrai dois números
// Declara as variaveis e atribui valor a elas

  let b1 = 10
  let b2 = 21

  // declara uma variavel e atribui o valor do resultado da subtração a ela

  let sub = subtrair(b1, b2)

  // função que realiza a subtração

  function subtrair(b1, b2) {
    return a1 - a2  
  }

  // exibe o resultado no console

  console.log(` A subtração enter os valores ${b1} e ${b2} é de ${sub}`)

// Função que multiplica dois números
// Declara as variaveis e atribui valor a elas

  let c1 = 10
  let c2 = 21

  // declara uma variavel e atribui o valor do resultado da multiplicação a ela

  let mul = multiplicar(c1, c2)

  // função que realiza a multiplicação

  function multiplicar(c1, c2) {
    return c1 * c2  
  }

  // exibe o resultado no console

  console.log(` O resultado da multiplicão enter os valores ${c1} e ${c2} é de ${mul}`)

// Função que divide dois números, com verificação de divisão por zero
// Declara as variaveis e atribui valor a elas
  let d1 = 10
  let d2 = 21

  // declara uma variavel e atribui o valor do resultado da multiplicação a ela

  let div = dividir(d1, d2)

  // função que realiza a divisão

  function dividir(d1, d2) {
    return d1 / d2  
  }

  // exibe o resultado no console

  console.log(` O resultado da divisão enter os valores ${d1} e ${d2} é de ${div}`)

// Função que verifica se um número é par
// declara uma variavel e atribui valor a ela

let f1 = 10

  // declara uma variavel e atribui o valor `Par/Impar` a ela com relação á variavel f1

let p = ehPar(f1)

// função que realiza o calculo para definir se o valor da variavel é par ou impar

function ehPar(f1) {
  if (f1 % 2 === 0) {
    console.log(` ${f1} é Par`)
  } else
    console.log(` ${f1} é Impar`)
}

// Exporta todas as funções para serem usadas nos testes
module.exports = {
  somar,
  subtrair,
  multiplicar,
  dividir,
  ehPar,
};