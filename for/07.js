// Em javascript, usando for of para iterar a palavra, Escreva um programa que irá solicitar ao usuário uma palavra e conte o número de vogais presentes.


// Solicitar ao usuário uma palavra
let palavra = prompt("Digite uma palavra:");

// Verificar se a palavra é válida
if (!palavra) {
    console.log("Por favor, digite uma palavra válida.");
} else {
    // Inicializar contador de vogais
    let contadorVogais = 0;

    // Iterar sobre a palavra usando for...of
    for (let letra of palavra) {
        // Verificar se a letra é uma vogal
        if ('aeiouAEIOU'.includes(letra)) {
            contadorVogais++;
        }
    }

    // Imprimir o número de vogais no console
    console.log(`Número de vogais em "${palavra}": ${contadorVogais}`);
}
