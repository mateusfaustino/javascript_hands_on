function converterTemperatura(temperaturaCelsius, callback) {
    // Aplica a função de callback à temperatura Celsius
    return callback(temperaturaCelsius);
  }
  
  // Exemplo de uso:
  // Função de callback para converter Celsius para Fahrenheit
  function celsiusParaFahrenheit(temperaturaCelsius) {
    return (temperaturaCelsius * 9/5) + 32;
  }
  
  // Função de callback para converter Celsius para Kelvin
  function celsiusParaKelvin(temperaturaCelsius) {
    return temperaturaCelsius + 273.15;
  }
  
  // Convertendo 25 graus Celsius para Fahrenheit
  console.log("25°C em Fahrenheit:", converterTemperatura(25, celsiusParaFahrenheit));
  
  // Convertendo 25 graus Celsius para Kelvin
  console.log("25°C em Kelvin:", converterTemperatura(25, celsiusParaKelvin));
  