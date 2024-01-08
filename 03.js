// Peça ao usuário para inserir os comprimentos dos lados de um 
// triângulo e escreva um programa que determine se o triângulo é equilátero, isósceles ou escaleno.

// Solicita ao usuário para inserir os comprimentos dos lados do triângulo
let lado1 = parseFloat(prompt("Digite o comprimento do lado 1:"));
let lado2 = parseFloat(prompt("Digite o comprimento do lado 2:"));
let lado3 = parseFloat(prompt("Digite o comprimento do lado 3:"));

// Verifica se é um triângulo válido
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    // Verifica se é um triângulo equilátero (três lados iguais)
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("É um triângulo equilátero.");
    }
    // Verifica se é um triângulo isósceles (dois lados iguais)
    else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("É um triângulo isósceles.");
    }
    // Se não for equilátero nem isósceles, é um triângulo escaleno
    else {
        console.log("É um triângulo escaleno.");
    }
} else {
    console.log("Não é um triângulo válido.");
}
