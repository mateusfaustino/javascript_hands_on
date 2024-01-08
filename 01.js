// Crie um programa que solicite ao usuário seu peso (em kg) e altura (em metros) e calcule o IMC. Em seguida, informe a categoria de acordo com a tabela de IMC (por exemplo, abaixo do peso, peso normal, sobrepeso, etc.).

// Solicita ao usuário para inserir o peso e altura
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

// Calcula o IMC (peso dividido pelo quadrado da altura)
let imc = peso / (altura * altura);

// Determina a categoria com base no IMC calculado
let categoria = '';
if (imc < 18.5) {
    categoria = 'Abaixo do peso';
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = 'Peso normal';
} else if (imc >= 24.9 && imc < 29.9) {
    categoria = 'Sobrepeso';
} else if (imc >= 29.9 && imc < 34.9) {
    categoria = 'Obesidade grau I';
} else if (imc >= 34.9 && imc < 39.9) {
    categoria = 'Obesidade grau II';
} else {
    categoria = 'Obesidade grau III';
}

// Exibe o resultado
console.log(`Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}`);
