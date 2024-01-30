// Faça um programa que leia 20 números inteiros e armazene-os em um vetor. 
// Armazene os números pares no vetor 'PAR' e os números ímpares no vetor 'ímpar'. 
// Imprima os três vetores.

// Passo 1: Crie os vetores para armazenar os números, pares e ímpares
let numeros = [];
let pares = [];
let impares = [];

// Passo 2: Use um loop para ler 20 números inteiros
for (let i = 0; i < 20; i++) {
    // Leitura de um número inteiro do usuário (pode ser substituído por lógica de leitura)
    let numero = parseInt(prompt("Digite um número inteiro:"));

    // Passo 3: Armazene o número no vetor principal
    numeros.push(numero);

    // Passo 4: Verifique se o número é par ou ímpar e armazene no vetor correspondente
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

// Passo 5: Imprima os três vetores
console.log("Todos os números:", numeros);
console.log("Números Pares:", pares);
console.log("Números Ímpares:", impares);
