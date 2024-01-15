// Em Javascript, Crie um programa que apresente um menu com várias opções de cálculos geométricos. O usuário deve ser capaz de escolher uma opção e inserir os valores necessários para realizar o cálculo correspondente. Utilize condicionais para direcionar o programa com base na escolha do usuário. 

// Opções do Menu:
// 1. Calcular Área do Triângulo 2. Calcular Área do Retângulo 3. Calcular Volume do Cubo 4. Calcular Área do Círculo
// 5. Sair

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function calcularAreaRetangulo(base, altura) {
    return base * altura;
}

function calcularVolumeCubo(lado) {
    return lado ** 3;
}

function calcularAreaCirculo(raio) {
    return Math.PI * raio ** 2;
}

// Exibe o menu para o usuário
let opcao;
do {
    opcao = parseInt(prompt(
        `Opções do Menu:\n\n1. Calcular Área do Triângulo\n2. Calcular Área do Retângulo\n3. Calcular Volume do Cubo\n4. Calcular Área do Círculo\n5. Sair`
    ));

    switch (opcao) {
        case 1:
            let baseTriangulo = parseFloat(prompt("Digite a base do triângulo:"));
            let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:"));
            console.log(`A área do triângulo é: ${calcularAreaTriangulo(baseTriangulo, alturaTriangulo)}`);
            break;
        case 2:
            let baseRetangulo = parseFloat(prompt("Digite a base do retângulo:"));
            let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo:"));
            console.log(`A área do retângulo é: ${calcularAreaRetangulo(baseRetangulo, alturaRetangulo)}`);
            break;
        case 3:
            let ladoCubo = parseFloat(prompt("Digite o lado do cubo:"));
            console.log(`O volume do cubo é: ${calcularVolumeCubo(ladoCubo)}`);
            break;
        case 4:
            let raioCirculo = parseFloat(prompt("Digite o raio do círculo:"));
            console.log(`A área do círculo é: ${calcularAreaCirculo(raioCirculo)}`);
            break;
        case 5:
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida. Escolha um número de 1 a 5.");
            break;
    }
} while (opcao !== 5);
