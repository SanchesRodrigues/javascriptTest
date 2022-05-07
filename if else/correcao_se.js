let pilotName = prompt("Qual o seu nome, piloto?")

let velocity = 0

let newVelocity = prompt("Qual velocidade você gostaria de acelerar?")

let confirmVelocity = confirm("Estamos acelerando para: " + newVelocity + " km/s")

if(confirmVelocity){
    velocity = newVelocity
}