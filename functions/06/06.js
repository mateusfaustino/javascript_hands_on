const somar = function (numero1, numero2) {
    return numero1 + numero2;
};

// Exemplo de uso:
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

const resultadoSoma = somar(num1, num2);

console.log(`A soma de ${num1} e ${num2} é: ${resultadoSoma}`);