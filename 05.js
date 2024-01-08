// Solicita ao usuário para inserir um número de 1 a 7
let numeroDia = parseInt(prompt("Digite um número de 1 a 7:"));

// Usa switch para imprimir o nome do dia correspondente ao número inserido
switch (numeroDia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. Insira um número de 1 a 7.");
        break;
}
