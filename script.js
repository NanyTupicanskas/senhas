// Seleciona os elementos do DOM
const btnMenos = document.getElementById('btn-menos');
const btnMais = document.getElementById('btn-mais');
const numCaracteres = document.getElementById('num-caracteres');

// Valor inicial de caracteres
let caracteres = 12;

// Função para atualizar o número exibido
function atualizarNumero() {
    numCaracteres.textContent = caracteres;
}

// Evento para diminuir
btnMenos.addEventListener('click', () => {
    if (caracteres > 4) {
        caracteres--;
        atualizarNumero();
    }
});

// Evento para aumentar
btnMais.addEventListener('click', () => {
    if (caracteres < 32) {
        caracteres++;
        atualizarNumero();
    }
});

// Atualiza o número ao carregar a página
atualizarNumero();