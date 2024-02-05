function calcularQuadrado(numero) {
    // Calcula o quadrado do número
    const quadrado = numero * numero;

    // Retorna o resultado
    return quadrado;
}

// Exemplo de uso:
const numeroUsuario = prompt("Digite um número:");
const numeroConvertido = parseFloat(numeroUsuario);

if (!isNaN(numeroConvertido)) {
    const resultadoQuadrado = calcularQuadrado(numeroConvertido);
    console.log(`O quadrado de ${numeroConvertido} é: ${resultadoQuadrado}`);
} else {
    console.log("Por favor, digite um número válido.");
}
