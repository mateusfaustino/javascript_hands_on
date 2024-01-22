// usando o laço for of para percorrer a palavra, Escreva um programa que irá solicitar ao usuário uma palavra e que imprimirá no console a palavra sem vogais.

// Solicitar ao usuário uma palavra
let palavra = prompt("Digite uma palavra:");

// Verificar se a palavra é válida
if (!palavra) {
    console.log("Por favor, digite uma palavra válida.");
} else {
    // Remover vogais da palavra usando for...of
    let palavraSemVogais = '';
    
    for (let letra of palavra) {
        if (!'aeiouAEIOU'.includes(letra)) {
            palavraSemVogais += letra;
        }
    }

    // Imprimir a palavra sem vogais no console
    console.log(`Palavra sem vogais: ${palavraSemVogais}`);
}
