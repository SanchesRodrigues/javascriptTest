let name = prompt("Infome seu nome:")
let velocity = 0
let velocityClient = prompt("Você gostaria de acelerar a nava? Se sim, digite o valor desejado:")
let confirmation = confirm("Atualmente você está indo para "+velocityClient+" km/s, você confirma essa velocidade?")

if (confirmation){
    velocity = velocityClient
}

if (velocity <= 0){
    alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocity < 40){
    alert("Você está devagar, podemos aumentar mais")
} else if (velocity >= 40 && velocity <80){
    alert("Parece uma boa velocidade vamos manter")
} else if (velocity >= 80 && velocity <100){
    alert("Velocidade alta. Considere diminuir.")
} else{
    alert("Velocidade perigosa. Controle automático forçado")
}

alert("Nome do piloto: " + name +  "\nVelocidade selecionada: "+ velocity +" km/s")