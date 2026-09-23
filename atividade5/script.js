function maior(){
    let numero1
    let numero2

    numero1 = Number(prompt("digite o seu primeiro numero"));
    numero2 = Number(prompt("digite o seu segundo numero"))

    if(numero1 > numero2){
        alert("O número " + numero1 + " é maior que o número " + numero2 + ".")
    } else if(numero2 > numero1){
        alert("O número " + numero2 + " é maior que o número " + numero1 + ".")
    } else {
        alert("Os número são iguais")
    }
}