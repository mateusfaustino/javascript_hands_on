function contarVogais(str) {
    // Converte a string para minúsculas para lidar com vogais maiúsculas e minúsculas
    str = str.toLowerCase();

    // Inicializa o contador de vogais
    let contadorVogais = 0;

    // Itera através de cada caractere na string
    for (let i = 0; i < str.length; i++) {
        // Verifica se o caractere atual é uma vogal
        if (/[aeiouáéíóúãõâêîôûàèìòùäëïöü]/.test(str.charAt(i))) {
            // Se for uma vogal, incrementa o contador
            contadorVogais++;
        }
    }

    // Retorna o número total de vogais encontradas na string
    return contadorVogais;
}

// Exemplo de uso:
const inputUsuario = prompt("Digite uma palavra ou frase:");
const numeroVogais = contarVogais(inputUsuario);

console.log(`Número de vogais na palavra/frase "${inputUsuario}": ${numeroVogais}`);
