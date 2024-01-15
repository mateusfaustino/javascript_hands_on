// Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o preço final com desconto, Se o usuário tiver menos de 18 anos, aplique um desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.

// Solicita ao usuário para inserir o preço do produto e sua idade
let precoProduto = parseFloat(prompt("Digite o preço do produto:"));
let idade = parseInt(prompt("Digite sua idade:"));

// Verifica se o usuário tem menos de 18 anos e aplica o desconto, se necessário
if (idade < 18) {
    let desconto = precoProduto * 0.1; // Calcula o desconto de 10%
    let precoFinal = precoProduto - desconto;
    console.log(`Você tem direito a um desconto de 10%. Preço final: R$ ${precoFinal.toFixed(2)}`);
} else {
    console.log(`Você não tem direito a desconto. Preço final: R$ ${precoProduto.toFixed(2)}`);
}
