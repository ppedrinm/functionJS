function soma (n, n2){

     return n + n2 

}

function subtracao (n, n2){

    return n - n2 

}

function multiplicacao (n, n2){

    return n * n2 

}

function divisao (n , n2){

    if(n2 !=0 ){

        return n / n2

    }

}

let operacao
let num1, num2 

while(operacao != 0){

    operacao  =  Number (prompt("Digite sua opção: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão \n 0 - Para sair"))

    num1 = Number(prompt("Digite o primeiro numero: "))

    num2 = Number(prompt("Digite o segundo numero:  "))

    switch(operacao){

        case 1: 

            alert(soma(num1, num2))

            break

        case 2: 

            alert(sub(num1, num2))

            break

        case 3: 

            alert(multi(num1, num2))

            break

        case 4: 

            alert(div (num1, num2))

            break

    }

}