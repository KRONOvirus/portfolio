function calcular(){
    let nota1trim = Number(prompt("digite a nota do primeiro trimestre"));
    let nota2trim = Number(prompt("digite a nota do segundo resultado"));
    let resultado = 180-(nota1trim+nota2trim);

    if(resultado <= 0){
        alert("Parabéns! Você já está aprovado por nota!");
    } else{
        alert("voce precisa de "+resultado+" para passar!");
    }
}