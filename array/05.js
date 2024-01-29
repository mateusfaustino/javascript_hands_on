// Faça um Programa que leia 4 notas, mostre as notas e a média na tela.

// Passo 1: Crie uma variável para armazenar as notas
let notas = [];

// Passo 2: Use um loop para ler 4 notas
for (let i = 1; i <= 4; i++) {
    // Leitura de uma nota do usuário (pode ser substituído por lógica de leitura)
    let nota = parseFloat(prompt(`Digite a ${i}ª nota:`));

    // Passo 3: Adicione a nota ao vetor
    notas.push(nota);
}

// Passo 4: Calcule a média das notas
let soma = 0;

// Use um loop para somar todas as notas
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

// Calcule a média dividindo a soma pelo número de notas
let media = soma / notas.length;

// Passo 5: Exiba as notas e a média na tela
console.log("Notas:", notas);
console.log("Média:", media.toFixed(2)); // Ajusta a média para exibir apenas duas casas decimais
