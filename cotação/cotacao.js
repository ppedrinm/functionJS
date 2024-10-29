let conversao
function conversor (reais, cotacao, moeda){

    conversao = reais * cotacao

    console.log(`R$ ${reais} vale ${conversao} em ${nomeMoeda}`)

}

function valor (reais, cotacao, moeda){

     conversor (reais, cotacao, moeda)

}

let reais, cotacao, moeda 

    reais = parseFloat(prompt("Digite o valor em reais: "))

    cotacao = parseFloat(prompt("Digite o valor da cotação: "))

    moeda = prompt("Digite o nome da moeda: ")

    valor (reais, cotacao, moeda)