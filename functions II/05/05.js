function criarFuncaoSoma(numero1) {
    return function(numero2) {
      return numero1 + numero2;
    };
  }
  
  // Exemplo de uso:
  const somaComCinco = criarFuncaoSoma(5);
  console.log(somaComCinco(3)); // Saída: 8 (5 + 3)
  console.log(somaComCinco(10)); // Saída: 15 (5 + 10)
  