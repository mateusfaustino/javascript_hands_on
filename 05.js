// Função para verificar se um número é primo
function verificarPrimo(numero) {
    if (numero <= 1) {
      return false; // 0 e 1 não são primos
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false; // Se for divisível por algum número, não é primo
      }
    }
  
    return true; // Se não foi divisível por nenhum número, é primo
  }
  
  // Solicita ao usuário um número
  const numeroUsuario = parseInt(prompt("Digite um número:"));
  
  // Verifica se o número é primo
  if (!isNaN(numeroUsuario)) {
    let ehPrimo = true

    if (numero <= 1) {
        ehPrimo = false
    }

    let i = numeroUsuario;

    while (i <= 2) {
    if (numero % i === 0) {
        ehPrimo = false // Se for divisível por algum número, não é primo
    }
    i--;
  }
    
  } else {
    console.log("Por favor, insira um número válido.");
  }
  