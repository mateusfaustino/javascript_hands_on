// Inicializa a variável para armazenar a soma das idades
let somaIdades = 0;

// Solicita a idade de 5 pessoas
for (let i = 1; i <= 5; i++) {
  const idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));

  // Verifica se a entrada é um número
  if (!isNaN(idade)) {
    somaIdades += idade;
  } else {
    console.log("Por favor, insira uma idade válida.");
    i--; // Decrementa i para solicitar novamente a idade da mesma pessoa
  }
}

// Calcula a média das idades
const mediaIdades = somaIdades / 5;

// Determina a faixa etária da turma com base na média
if (mediaIdades >= 0 && mediaIdades <= 25) {
  console.log(`A turma é jovem, com média de idade ${mediaIdades.toFixed(2)}`);
} else if (mediaIdades >= 26 && mediaIdades <= 60) {
  console.log(`A turma é adulta, com média de idade ${mediaIdades.toFixed(2)}`);
} else if (mediaIdades > 60) {
  console.log(`A turma é idosa, com média de idade ${mediaIdades.toFixed(2)}`);
} else {
  console.log("Não foi possível determinar a faixa etária da turma.");
}
