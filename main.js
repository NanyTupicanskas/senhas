const numeroSenha = document.querySelector('.parametro-senhas__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = 5;

const botoes = document.querySelector('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
       // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
numeroSenha.textContent = tamanhoSenha;
}
function aumentaTamanho(){
    if (tamanhoSenha < 10){
       // tamanhoSenha = tamanhoSenha+1
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
}

console.log(botoes);