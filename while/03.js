while (true) {
    // Solicita ao usuário o nome
    const nomeUsuario = prompt("Digite seu nome de usuário:");
  
    // Solicita ao usuário a senha
    const senhaUsuario = prompt("Digite sua senha:");
  
    // // Verifica se a senha é igual ao nome do usuário
    if (nomeUsuario === senhaUsuario) {
      console.log("Erro: A senha não pode ser igual ao nome de usuário. Tente novamente.");
    } 
    else {
      console.log("Login bem-sucedido!");
      break;  // Sai do loop quando as informações são válidas
    }
}
  