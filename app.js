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


function mensagemBoasVindas () {
    console.log("Olá, mundo");
}
mensagemBoasVindas();

function olaNome (nomeUsuario) {
    console.log(`Olá, ${nomeUsuario}`);
}
olaNome();

function calcularDobro (numero) {
    return (numero * 2);
}

let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

function calcularMedia (a, b, c) {
    return (a + b + c) / 3;
}

let media = calcularMedia(5, 6, 7);
console.log(media);


function comparacao (a, b){
    return a > b ? a : b;
}

let maiorNumero = comparacao(15, 9);
console.log(maiorNumero);

function multiplicacao (numero) {
    return numero * numero;
}

let resultado = multiplicacao(7);
console.log(resultado);


function calcularIMC (altura, peso){
    let imc = peso / (alturaMetros * alturaMetros);
}

function calcularFatorial (numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++);
    fatorial*= i;
}


function converterDolarParaReal (valorDolar) {
   let cotacaoDolar = 4.80;
   let valorEmReais = valorDolar * cotacaoDolar;
   return valorEmReais.toFixed(2);
}


function areaEPerimetroRetangulo ( alturaLocal, larguraLocal) {
    let area = alturaLocal * larguraLocal;
    let perimetro = 2 * (alturaLocal + larguraLocal);
}


function calcularAreaEPerimetroCirculo (raio) {
    let areaCirculo = (raio * raio) * Math.PI;
    let perimetroCirculo = (2 * Math.PI * raio);
}


function tabuada (numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log (`${numero} X ${i} = ${resultado}`);
    }
}

