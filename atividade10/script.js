function estacao(){
    let mes = prompt("diite o mês por extenso(ex:Setembro)");
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();
    if(mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO'){
        mostrar.innerHTML = `<p>a estação deste mês é <b>VERÃO<b><p>`
    }
    if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){
        mostrar.innerHTML = `<p>a estação deste mês é <b>OUTONO<b><p>`
    }
    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
        mostrar.innerHTML = `<p>a estação deste mês é <b>INVERNO<b><p>`
    }
    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO'){
        mostrar.innerHTML = `<p>a estação deste mês é <b>PRIMAVERA<b><p>`
    }
 
}