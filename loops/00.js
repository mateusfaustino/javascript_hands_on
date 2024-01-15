/* 

Crie um programa que solicita ao usuário um número e, em seguida, 
conta regressivamente até zero, imprimindo cada número no console. 
O programa deve terminar quando atingir zero.

*/

// Solicita ao usuário um número
let numero = prompt("Digite um número:");

// Converte a entrada para um número inteiro
numero = parseInt(numero);

// Verifica se a entrada é um número válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    // Contagem regressiva
    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

    console.log("Contagem regressiva concluída!");
}
