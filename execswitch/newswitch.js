let yearsLight = prompt("Informe a distância em anos-luz por favor: ")

let selectOption = prompt("Abaixo irei te mostrar as 3 opções de conversão de anos-luz:\n1- Parsec(pc)\n2- Unidade Astronônima (AU)\n3- Quilomêtros" + "\nDentre as 3 opções apresentadas qual você escolhe? (Digitar somente o número da opção)")

let conversorOption

let conversorFinal

switch(selectOption){
    case "1":
        conversorOption = "Parsec"
        conversorFinal = yearsLight * 0.306601
        break
    
    case "2":
        conversorOption = "Unidade Astronônima"
        conversorFinal = yearsLight * 63241.1
        break

    case "3":
        conversorOption = "Quilômetros"
        conversorFinal = yearsLight * 9.5 * Math.pow(10, 12)
        break

    default:
        conversorOption = "Não Informado"
        conversorFinal = "Escopo não Identificado"
}

alert("Distância em anos-luz informada: "+yearsLight+"\nConversão selecionada: "+conversorOption+"\nValor convertido: "+conversorFinal)