function isPrimo(numero) {
    // Verifica se o número é menor ou igual a 1
    if (numero <= 1) {
        return false;
    }

    // Verifica se o número é divisível por qualquer outro número além de 1 e ele mesmo
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false; // Não é primo se for divisível por algum número diferente de 1 e ele mesmo
        }
    }

    return true; // Se nenhum divisor foi encontrado, o número é primo
}

// Exemplo de uso:
const numeroUsuario = prompt("Digite um número para verificar se é primo:");
const numeroConvertido = parseInt(numeroUsuario);

if (!isNaN(numeroConvertido)) {
    const resultado = isPrimo(numeroConvertido);
    
    if (resultado) {
        console.log(`${numeroConvertido} é um número primo.`);
    } else {
        console.log(`${numeroConvertido} não é um número primo.`);
    }
} else {
    console.log("Por favor, digite um número válido.");
}
