// Em javascript, usando o laço for of para iterar a apalvra, Escreva uma programa que irá receber um texto e mostrará no 
// console se esse texto é um palíndromo ou não. (palíndromos são 
// palavras que são lidas da mesma forma de trás pra frente) Ex: 
// arara

// Solicitar ao usuário um texto
let texto = prompt("Digite um texto:");

// Verificar se o texto é válido
if (!texto) {
    console.log("Por favor, digite um texto válido.");
} else {
    // Remover espaços e converter para minúsculas
    let textoFormatado = texto.toLowerCase();

    // Verificar se o texto é um palíndromo usando for...of
    let ePalindromo = true;
    let i = textoFormatado.length - 1

    for (let letra of textoFormatado) {
        if (letra !== textoFormatado[i]) {
            ePalindromo = false;
            break;
        }
        i--
    }

    // Imprimir resultado no console
    if (ePalindromo) {
        console.log(`${texto} é um palíndromo.`);
    } else {
        console.log(`${texto} não é um palíndromo.`);
    }
}
