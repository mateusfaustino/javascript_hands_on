// Crie um programa que solicite ao usuário uma senha. Valide a senha de acordo com as seguintes regras:

// Pelo menos 8 caracteres de comprimento.
// Deve conter pelo menos uma letra maiúscula e uma letra minúscula.
// Deve incluir pelo menos um número.
// Pode conter caracteres especiais, como @, #, $, etc.

function validarSenha(senha) {
    // Verifica se a senha tem pelo menos 8 caracteres de comprimento
    if (senha.length < 8) {
        return false;
    }

    // Verifica se a senha contém pelo menos uma letra maiúscula e uma letra minúscula
    let possuiMaiuscula = /[A-Z]/.test(senha);
    let possuiMinuscula = /[a-z]/.test(senha);
    if (!possuiMaiuscula || !possuiMinuscula) {
        return false;
    }

    // Verifica se a senha inclui pelo menos um número
    let possuiNumero = /[0-9]/.test(senha);
    if (!possuiNumero) {
        return false;
    }

    // Verifica se a senha contém caracteres especiais
    let possuiCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha);
    if (!possuiCaracterEspecial) {
        return false;
    }

    // Se passar por todas as verificações, a senha é válida
    return true;
}

// Solicita ao usuário para inserir uma senha
let senhaUsuario = prompt("Digite sua senha:");

// Valida a senha inserida pelo usuário
if (validarSenha(senhaUsuario)) {
    console.log("Senha válida.");
} else {
    console.log("Senha inválida. Certifique-se de que atenda aos critérios.");
}
