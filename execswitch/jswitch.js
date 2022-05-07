let yearsLight = prompt("Informe a distância em anos-luz por favor: ")

let selectOption = prompt("Abaixo irei te mostrar as 3 opções de conversão de anos-luz:\n1- Parsec(pc)\n2- Unidade Astronônima (AU)\n3- Quilomêtros" + "\nDentre as 3 opções apresentadas qual você escolhe? (Digitar somente o número da opção)")

let conversorOption

switch(selectOption){
    case "1":

        conversorOption = "Parsec"
        let conversorPc = yearsLight * 0.306601
        alert("Distância em anos-luz informada: " + yearsLight+ "\nConversão selecionada: " +conversorOption+ "- Parsec(pc)\n Valor convertido: "+conversorPc+ " pc")
        break


    case "2":
        conversorOption = "Unidade Astronônima"
        let conversorAu = yearsLight * 63241.1
        alert("Distância em anos-luz informada: " + yearsLight+ "\nConversão selecionada: " +conversorOption+ "- Unidade Astronônima(AU)\n Valor convertido: "+conversorAu+ " AU")
        break


    case "3":
        conversorOption = "Quilômetros"
        let conversorKm = yearsLight * 9.5 * Math.pow(10, 12)
        alert("Distância em anos-luz informada: " + yearsLight+ "\nConversão selecionada: " +conversorOption+ "- Quilomêtros\n Valor convertido: "+conversorKm+ " KM")
        break


    default:
        alert("Distância em anos-luz informada: "+yearsLight+ "\n" + "Unidade de conversão não foi identificada")

}