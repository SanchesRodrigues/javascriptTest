let rocketName = prompt("Informe o nome da sua nave: ")

let optionLetter = prompt("Qual letra do nome da sua nave você gostaria de substituir?")

let changeLetter= prompt("Agora me informe qual letra você quer colocar no lugar desta que você informou?")

let newRocket = ""

for(i=0;i<rocketName.length;i++){
    if(rocketName[i] == optionLetter){
        newRocket += changeLetter
    }else{
        newRocket += rocketName[i]
    }
}

alert("O novo nome da sua nave é: "+newRocket)