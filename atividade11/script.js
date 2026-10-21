function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();

    let mostrar = document.getElementById('resultado');

    mostrar.innerHTML = `<p>agora são ${hora} horas e ${min} minutos.</p>`;

    if(hora <= "12" && min >= "1"){
        mostrar.innerHTML = `<p>agora são ${hora} horas e ${min} minutos.</p>
                            <img src="image.png">`
    }
}