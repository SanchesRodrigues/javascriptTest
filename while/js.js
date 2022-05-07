alert("Olá Astronauta essa á sua nova Nave Espacial")

let pilotName = prompt("Agora Astronauta preciso que me informe o seu nome: ")

let rocketName = prompt("Para batizar a sua name dê uma nome para ela: ")

let count = 0

let dobraSpace = confirm("Você deseja entrar na nave?")

while(dobraSpace == true){

    count += 1

    dobraSpace= confirm("Neste momento você gostaria de efetuar novamente mais uma dobra espacial?")

    
}

alert("Durante essa viagem coletamos algumas informações...\nNome do piloto: "+pilotName+"\nNome da Nave Espacial: "+rocketName+"\nQue efetuou o total de "+count+" dobras espaciais")