// Escreva um programa que solicite um número e determine se ele é um número primo.

// Solicita ao usuário para inserir um número
let numero = parseInt(prompt("Digite um número:"));

let ehPrimo = true;

// Verifica se o número é menor que 2 (números menores que 2 não são primos)
if (numero < 2) {
    ehPrimo = false;
} else {
    // Verifica se o número é divisível por algum número entre 2 e a raiz quadrada do número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }
}

// Verifica se o número é primo ou não e exibe o resultado
if (ehPrimo) {
    console.log(`${numero} é um número primo.`);
} else {
    console.log(`${numero} não é um número primo.`);
}
