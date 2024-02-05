const calculadora = function (numero1, numero2, operacao) {
    switch (operacao) {
        case 'adição':
            return numero1 + numero2;
        case 'subtração':
            return numero1 - numero2;
        case 'multiplicação':
            return numero1 * numero2;
        case 'divisão':
            // Verifica se o divisor (numero2) é diferente de zero para evitar divisão por zero
            return numero2 !== 0 ? numero1 / numero2 : 'Divisão por zero não é permitida';
        default:
            return 'Operação inválida. Por favor, escolha adição, subtração, multiplicação ou divisão.';
    }
};

// Exemplo de uso:
const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));
const operacao = prompt("Digite a operação desejada (adição, subtração, multiplicação, divisão):").toLowerCase();

const resultado = calculadora(num1, num2, operacao);

console.log(`Resultado da ${operacao}: ${resultado}`);
