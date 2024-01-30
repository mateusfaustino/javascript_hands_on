// Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.

// Passo 1: Crie um vetor para armazenar os números
let numeros = [];

// Passo 2: Use um loop para ler 5 números inteiros
for (let i = 0; i < 5; i++) {
    // Leitura de um número inteiro do usuário (pode ser substituído por lógica de leitura)
    let numero = parseInt(prompt("Digite um número inteiro:"));

    // Passo 3: Adicione o número ao vetor
    numeros.push(numero);
}

// Passo 4: Imprima os números do vetor
console.log("Números do vetor:", numeros);
