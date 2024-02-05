function calcularAreaEPerimetroDoCirculo(raio) {
    // Verifica se o raio é um número positivo
    if (raio <= 0 || isNaN(raio)) {
        return "Raio inválido. Por favor, forneça um número positivo.";
    }

    // Calcula a área do círculo usando a fórmula A = π * r²
    const area = Math.PI * Math.pow(raio, 2);

    // Calcula o perímetro do círculo usando a fórmula P = 2 * π * r
    const perimetro = 2 * Math.PI * raio;

    // Retorna um objeto com os resultados
    return {
        area: area.toFixed(2),  // Limita o número de casas decimais a 2
        perimetro: perimetro.toFixed(2)
    };
}

// Exemplo de uso:
const raioUsuario = prompt("Digite o raio do círculo:");
const raioConvertido = parseFloat(raioUsuario);

if (!isNaN(raioConvertido) && raioConvertido > 0) {
    const resultados = calcularAreaEPerimetroDoCirculo(raioConvertido);
    console.log(`Área do círculo: ${resultados.area}`);
    console.log(`Perímetro do círculo: ${resultados.perimetro}`);
} else {
    console.log("Por favor, digite um raio válido (número positivo).");
}
