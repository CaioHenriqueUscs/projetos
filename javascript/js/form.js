var addbotao = document.querySelector("#adicionar-paciente");
addbotao.addEventListener("click", function(event){
event.preventDefault();

var form = document.querySelector("#form-adiciona");
var pacientee = obtemPacienteFormulario(form);

var pacienteTr = document.createElement("tr");

var nometd = document.createElement("td");
var pesotd= document.createElement("td");
var alturatd= document.createElement("td");
var gorduratd= document.createElement("td");
var imctd= document.createElement("td");

nometd.textContent = nome;
pesotd.textContent = peso;
alturatd.textContent = altura;
gorduratd.textContent = gordura;
imctd.textContent = calculaImc(peso,altura);

pacienteTr.appendChild(nometd);
pacienteTr.appendChild(pesotd);
pacienteTr.appendChild(alturatd);
pacienteTr.appendChild(gorduratd);
pacienteTr.appendChild(imctd);

var tabela = document.querySelector("#tabela-pacientess");

tabela.appendChild(pacienteTr);

});

function obtemPacienteFormulario(form){

var pacientee = {
nome : form.nome.value,
peso : form.peso.value,
altura : form.altura.value,
gordura : form.gordura.value,
imc: calculaImc(form.peso.value , form.altura.value),

}


}