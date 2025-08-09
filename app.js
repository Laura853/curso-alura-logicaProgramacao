let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole () {
    console.log('O botão foi clicado!');
}

function exibirAlerta () {
    alert("Eu amo Js");
}

function exibirPrompt() {
    let cidade = prompt("Digite o nome de uma cidade do Brasil que você gosta muito");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function somandoDoisNumeros () {
    let primeiroNumero = prompt ("Digite o primeiro número para ser somado");
    let segundoNumero = prompt ("Digite o segundo número para ser somado");
    let resultado = primeiroNumero + segundoNumero;
    alert(`O resultado de ${primeiroNumero} + ${segundoNumero} é ${resultado}`);
}

