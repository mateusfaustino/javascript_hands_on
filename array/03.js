// Utilizando listas, faça um programa que realize 5 perguntas para uma pessoa sobre um crime. As perguntas são:

// 1 - "Telefonou para a vítima?"
// 2 - "Esteve no local do crime?"
// 3 - "Mora perto da vítima?"
// 4 - "Devia para a vítima?"
// 5 - "Já trabalhou com a vítima?"
// Ao final, o programa deve emitir uma classificação sobre a participação da pessoa no crime. 
// Se a pessoa responder positivamente a 2 questões, ela deve ser classificada como "Suspeita"; 
// entre 3 e 4 respostas positivas como "Cúmplice"; e se responder positivamente a 5 questões, deve ser classificada como "Assassino". 
// Caso contrário, será classificada como "Inocente.

// Passo 1: Crie um vetor para armazenar as respostas
let respostas = [];
let perguntas = [
    "Telefonou para a vítima?",
    "Esteve no local do crime?",
    "Mora perto da vítima?",
    "Devia para a vítima?",
    "Já trabalhou com a vítima?"
]
// Passo 2: Use um loop para fazer as 5 perguntas
for (let i = 1; i <= 5; i++) {
    // Leitura da resposta (pode ser substituído por lógica de leitura)
    let resposta = prompt(perguntas[i]);

    // Armazene a resposta no vetor
    respostas.push(resposta.toLowerCase()); // Converta para minúsculas para facilitar a comparação
}

// Passo 3: Conte o número de respostas positivas
let respostasPositivas = respostas.filter(resposta => resposta === 'sim').length;

// Passo 4: Emita uma classificação com base nas respostas
if (respostasPositivas === 5) {
    console.log("Classificação: Assassino");
} else if (respostasPositivas >= 3) {
    console.log("Classificação: Cúmplice");
} else if (respostasPositivas >= 2) {
    console.log("Classificação: Suspeita");
} else {
    console.log("Classificação: Inocente");
}
