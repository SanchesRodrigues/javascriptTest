let nameSpace =prompt("Informe o nome do seu Foguete: ")

let cutLetter = prompt("Em qual letra você gostaria de parar o processo?")

let newRocket = ""

for(let i= nameSpace.length - 1; i >= 0; i--){
    if(nameSpace[i] == cutLetter){
       break
       }
       newRocket += nameSpace[i]
  }

  alert("O nome informado: "+nameSpace+"\nNome retornado pelo sistema: "+newRocket)