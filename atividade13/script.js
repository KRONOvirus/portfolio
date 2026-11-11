function contar(){
    let saida = document.getElementById('saida');

    let cont = 1
    while(cont <= 10){
        saida.innerHTML += `<p>nigga ${cont}</p>`;
        cont++;
    }
      if(numero % 2 == 0){
        saida.innerHTML = `<mark>${numero}</mark>`
      }
}