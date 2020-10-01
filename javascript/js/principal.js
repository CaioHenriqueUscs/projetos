var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Nutricionista Caio Zanchetta";

var paciente = document.querySelector(".pacientes");
console.log(paciente);
console.log(paciente.textContent);
paciente.textContent = "My Patients";

var navegador = document.querySelector(".browser");
console.log(navegador);
console.log(navegador.textContent);
navegador.textContent = "Caio Nutrição";


var patients = document.querySelectorAll(".paciente");

for(i = 0; i < patients.length; i++){

var patient = patients[i];

    var tdpeso = patient.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = patient.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = patient.querySelector(".info-imc");
    
var AlturaEhValida = true;
var PesoEhValido = true;


    if (peso < 0 || peso > 400){
console.log("peso invalido!");
var PesoEhValido = false;
tdimc.textContent= "peso invalido!";
patient.classList.add("paciente-invalido");
    }

    if(altura < 0 || altura > 2.60){
        console.log(" altura invalida!");
        var AlturaEhValida = false;
        tdimc.textContent= "altura invalida!";
    }

    if(AlturaEhValida && PesoEhValido){
var imc = calculaImc(peso,altura);
tdimc.textContent = imc;
    }

}

function calculaImc(peso,altura) {

imc = peso / (altura*altura);

return imc.toFixed(2);
}











