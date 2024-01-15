// Peça ao usuário para inserir números continuamente e imprima o somatório dos números inseridos. 
// O programa deve continuar executando até que o usuário insira zero.



let soma = 0
while (true){
    let numeroAtual = prompt("Digite um número: (Para parar digite 0)");
    if(numeroAtual==0){
        break
    }
    soma += parseInt(numeroAtual)    
}

console.log(`Sua soma é ${soma}`);