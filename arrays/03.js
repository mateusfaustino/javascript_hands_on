// Utilizando listas, faça um programa que realize 5 perguntas para uma pessoa sobre um crime. As perguntas são:

// 1 - "Telefonou para a vítima?"
// 2 - "Esteve no local do crime?"
// 3 - "Mora perto da vítima?"
// 4 - "Devia para a vítima?"
// 5 - "Já trabalhou com a vítima?"
// Ao final, o programa deve emitir uma classificação sobre a participação da pessoa no crime. 
// Se a pessoa responder positivamente a 2 questões, ela deve ser classificada como "Suspeita"; 
// entre 3 e 4 respostas positivas como "Cúmplice"; e se responder positivamente a 5 questões, deve ser classificada como "Assassino". 
// Caso contrário, será classificada como "Inocente.

let contador = 0
let respostasSim = 0
let statusPessoa = ''

let perguntas = [
    "Telefonou para a vítima?",
    "Esteve no local do crime?",
    "Mora perto da vítima?",
    "Devia para a vítima?",
    "Já trabalhou com a vítima?"
]

while (true) {
    if(contador>=perguntas.length){
        break
    }
    
    let resposta = prompt("Responda sim ou nao \n"+perguntas[contador])
    
    if(resposta!='sim' && resposta!='nao'){
        alert('Responda "sim" ou "nao"' )
        continue
    }

    if(resposta=="sim"){
        respostasSim++
    }

    contador++
}
if(respostasSim==2){
    statusPessoa = "Suspeito"
}else if(respostasSim==3 || respostasSim==4){
    statusPessoa = "Cúplice"
}else if(respostasSim>=5){
    statusPessoa = "Assasino"
}else{
    statusPessoa = "Inocente"
}

alert("Você é "+statusPessoa)
