alert("Olá Astronauta essa á sua nova Nave Espacial")

let pilotName = prompt("Agora Astronauta preciso que me informe o seu nome: ")

let rocketName = prompt("Para batizar a sua name dê uma nome para ela: ")

let count = 0

let dobraSpace = prompt("Você deseja entrar em uma dobra espacial?\n1- Sim\n2- Não")

while(dobraSpace == 1 || dobraSpace == "Sim" || dobraSpace == "sim"){
    dobraSpace= prompt("Neste momento você gostaria de efetuar novamente mais uma dobra espacial?\n1- Sim\n2- Não")

    count += 1
}

alert("Durante essa viagem coletamos algumas informações...\nNome do piloto: "+pilotName+"\nNome da Nave Espacial: "+rocketName+"\nQue efetuou o total de "+count+" dobras espaciais")
