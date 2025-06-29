const numeroSenha = document.querySelector('.parametro-senhas__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = 5;

const botoes = document.querySelector('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
tamanhoSenha = tamanhoSenha-1;
numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    tamanhoSenha = tamanhoSenha;
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);