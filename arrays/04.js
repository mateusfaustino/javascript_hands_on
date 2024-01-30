// Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

// Passo 1: Crie um vetor para armazenar os números reais
let numeros = [];

// Passo 2: Use um loop para ler 10 números reais
for (let i = 0; i < 10; i++) {
    // Leitura de um número real do usuário (pode ser substituído por lógica de leitura)
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número real:`));

    // Passo 3: Adicione o número ao vetor
    numeros.push(numero);
}

// Passo 4: Exiba os números na ordem inversa
console.log("Números na ordem inversa:", numeros.reverse());
