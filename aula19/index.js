let departureDateEntry =prompt("Digite a sua data de partida: (formato DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == "1") {
    let secondsOfDeparture = Math.round(dateDiff / 1000) /* 1 segundo tem 1000 milisegundos*/
    alert("Tempo de vôo: " + secondsOfDeparture + " segundos")
} else if(chosenOption == "2") {
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60) /* 1 minuto tem 60 segundos*/
    alert("Tempo de vôo: " + minutesOfDeparture + " minutos")
} else if(chosenOption == "3") {
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)/* 1 hora tem 60 minutos e cada minuto tem 60 segundos = 60x60 = 3600*/
    alert("Tempo de vôo: " + hoursOfDeparture + " horas")
} else if(chosenOption == "4") {
    let daysOfDeparture = Math.round(dateDiff / 1000 / 86400)/* 1 hora tem 3600 segundos logo 1 dia tem 24 horas = 3600 x 24 = 86400*/
    alert("Tempo de vôo: " + daysOfDeparture + " dias")
}
else {
    alert("Opção Inválida")
}