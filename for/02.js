// Escreva um programa que solicite um número inteiro e imprima a tabuada desse número de 1 a 10.

// Solicitar um número inteiro
let numero = parseInt(prompt("Digite um número inteiro:"));

// Verificar se o número é válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
} else {
    // Imprimir a tabuada do número de 1 a 10
    console.log(`Tabuada do ${numero}:`);
    
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
