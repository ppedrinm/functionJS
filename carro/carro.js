let estado

let partida

let estadoAgora

let ligado = false

let velocidade = 0

let marcha

function darPartida(partida){

    if(estado === 1 && partida === 'sim'){

        ligado = true

        return "O carro foi ligado"

    }else{

        return "O carro já está desligado ou você não deu partida."

    }

}

function acelerar(){

    if(ligado){

        velocidade += 10

        return `Após a aceleração, a velocidade atual é: ${velocidade} km/h.`

    }else{

        return "O carro está desligado. Você deve ligá-lo."

    }

}

function diminuirVelocidade(){

    if(ligado && velocidade > 0){

        velocidade -= 10

        return `Diminuindo a velocidade, chegamos a: ${velocidade} km/h.`

    }else if(velocidade === 0){

        return "O carro está parado!"

    }else{

        return "O carro está desligado!"

    }

}

function desligarCarro(){

    if(ligado && velocidade === 0){

        ligado = false

        return "O carro foi desligado."

    }else if(velocidade > 0){

        return "Você deve diminuir a velocidade do carro até 0 km/h antes de desligá-lo."

    }else{

        return "O carro já está desligado!"

    }

}

function estadoAtual(){

    if(velocidade >= 10 && velocidade <= 20){

        marcha = "1ª Marcha"

    }else if(velocidade >= 21 && velocidade <= 30){

        marcha = "2ª Marcha"

    }else if(velocidade >= 31 && velocidade <= 40){

        marcha = "3ª Marcha"

    }else if(velocidade >= 41 && velocidade <= 60){

        marcha = "4ª Marcha"

    }else if(velocidade >= 61){

        marcha = "5ª Marcha"

    }else{

        marcha = "Neutro"

    }

    return `A velocidade do carro é: ${velocidade} km/h na marcha ${marcha}`

}

do{

    estado = Number(prompt("Qual o estado do carro? Responda com:\n 1 - Ligado\n 2 - Desligado"))

    partida = prompt("Você deseja dar partida? (sim ou não)")

    alert(darPartida(partida))

    if(ligado){

        estadoAgora = prompt("O carro está parado ou em movimento?")
        
        if(estadoAgora === 'movimento'){

            let op = Number(prompt("O que você deseja fazer?\n 1 - Acelerar\n 2 - Diminuir\n 3 - Desligar\n 4 - Estado Atual do Veículo\n 5 - Sair"))

            switch(op){

                case 1: 

                    alert(acelerar())

                    break
                
                case 2: 

                    alert(diminuirVelocidade())

                    break

                case 3:

                    alert(desligarCarro())

                    break
                
                case 4: 

                    alert(estadoAtual())

                    break

                case 5:

                    estado = 2 

                    break

                default:

                    alert("Opção inválida!")

            }

        }

    }

}while(estado === 1)