const contarVogais = (str) => {
    // Define uma expressão regular para encontrar vogais (ignorando maiúsculas/minúsculas)
    const vogaisRegex = /[aeiou]/gi;
    // Usa o método match para encontrar todas as ocorrências de vogais na string
    const vogaisEncontradas = str.match(vogaisRegex);
    // Retorna o comprimento do array de vogais encontradas (ou 0 se não houver nenhuma vogal)
    return vogaisEncontradas ? vogaisEncontradas.length : 0;
  };
  
  // Exemplo de uso:
  console.log(contarVogais("Olá, mundo!")); // Saída: 3
  