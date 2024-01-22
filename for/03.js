

// Solicitar um número inteiro positivo
let numero = parseInt(prompt("Digite um número inteiro positivo:"));

// Verificar se o número é válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro positivo válido.");
} else {
    // Contagem regressiva
    console.log(`Contagem regressiva a partir de ${numero}:`);
    
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}
