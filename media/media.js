let num1 = Number(prompt("Digite a primeira nota: "))

let num2 = Number(prompt("Digite a segunda nota: "))

let num3 = Number(prompt("Digite a terceira nota: "))

function mediaNotas(nota1, nota2, nota3){

    let media = (nota1 + nota2 + nota3) / 3 

    return media   

}

console.log(mediaNotas(num1,num2,num3))   