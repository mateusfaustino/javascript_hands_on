// Escreva um programa que solicite um número e verifique se ele é um número primo.

// Solicitar um número
let numero = parseInt(prompt("Digite um número:"));

// Verificar se o número é válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
} else {
    // Verificar se o número é primo
    let ehPrimo = true;

    if (numero <= 1) {
        ehPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }

    // Exibir resultado
    if (ehPrimo) {
        console.log(`${numero} é um número primo.`);
    } else {
        console.log(`${numero} não é um número primo.`);
    }
}
