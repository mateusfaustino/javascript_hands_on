function operacoesMatematicas(num1, num2, callback) {
    return callback(num1, num2);
  }
  
  // Exemplo de uso:
  // Função de callback para adição
  function adicao(a, b) {
    return a + b;
  }
  
  // Função de callback para subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Utilizando a função operacoesMatematicas com a função de adição
  console.log(operacoesMatematicas(5, 3, adicao)); // Saída: 8
  
  // Utilizando a função operacoesMatematicas com a função de subtração
  console.log(operacoesMatematicas(10, 4, subtracao)); // Saída: 6
  