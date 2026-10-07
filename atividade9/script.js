/*variaveis para o jogo*/
let mostrar = document.getElementById('resultado');
let computador = 0;
let jogador = 0;
/*as linhas abaixo são para gerar um numero aleatorio*/
let min = 1;
let max = 100;
let dif = max - min;
let aleatorio = Math.random();
computador = min + Math.trunc(dif * aleatorio);

function jogar(){
    jogador = Number(prompt("qual é o seu palpite?"));
    if(jogador < computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu numero é <b>maior</b>!</p>`
    } else if(jogador> computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu numero é <b>menor</b>!</p>`
    } else if(jogador == computador){
        mostrar.innerHTML = `<p><b>PARABÉNS!!!</b> voce acertou! eu tinha pensado no numero ${computador}</p>`
    }

}