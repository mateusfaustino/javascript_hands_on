// Peça ao usuário para inserir um número e escreva um programa que determine se o número é positivo e par.


// Solicita ao usuário para inserir um número
let numero = prompt("Digite um número:");

// Converte a entrada para um número inteiro
numero = parseInt(numero);

// Verifica se o número é positivo e par
if (numero > 0 && numero % 2 === 0) {
    console.log("O número inserido é par.");
} else {
    console.log("O número inserido não é par.");
}
