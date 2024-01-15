// Desenvolva um programa que solicita ao usuário que insira suas notas de uma série de disciplinas. 
// O programa deve calcular e imprimir a média das notas, o usuário pode continuar adicionando notas até decidir parar.

let quantidadeMaterias = 0
let soma = 0
while (true){
    let numeroAtual = prompt("Digite uma nora: (Para parar digite -1)");
    if(numeroAtual==-1){
        break
    }
    soma += parseFloat(numeroAtual)
    quantidadeMaterias ++
    
}

let media = soma/quantidadeMaterias

console.log(`Sua soma é ${  soma}`);
console.log(`Sua quantidade é ${  quantidadeMaterias}`);
console.log(`Sua media é ${media}`);