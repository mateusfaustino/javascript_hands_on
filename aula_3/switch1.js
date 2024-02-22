let cabecalho = "Bem vindo(a) ao chatbot \n"
+"Digite 1 para falar com uma atendente \n"
+"Digite 2 para imitir segunda via do boleto \n"
+"Digite 3 para recuperar senha \n"
+"Digite qualquer outro número para sair \n"
+"Escolha uma das opções"



let opcao = prompt(cabecalho)

switch(opcao){
  case "1":
    alert("FALANDO COM ATENTENDTE")
    break
  case "2":
    alert("EMITINDO SEGUNDA VIA")
    break
  case "3":
    alert("RECUPERANDO SENHA")
    break
  default:
    alert("tchau, obrigado!")
    
}