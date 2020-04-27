const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline)-now + 1000)/1000;
        remainSeconds = ('0'+Math.floor(remainTime % 60)).slice(-2);//Los segundos los conviertes a segundo y luego aplicas el residuo para obtener los segundos que sobran
        remainMinutes = ('0'+Math.floor(remainTime /60 % 60)).slice(-2);//Los segundos los conviertes a minutos y luego aplicas el residuo para obtener los minutos que sobran
        remainHours = ('0'+Math.floor(remainTime /3660 % 24)).slice(-2);
        remainDays = Math.floor(remainTime /(3660 * 24));
        return {// Estoy retornando estos valores
            remainTime,
            remainSeconds,
            remainMinutes,
            remainHours,
            remainDays
        }
};

const countdown = (deadline, titulo,finalMessage) =>{
    const clock = document.getElementById("clock");
    const image = document.getElementById('image');
    const dedicatoria = document.getElementById('Dedicatoria')

    const timeUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        clock.innerHTML=`<div class="Title" ><h1>${titulo}</h1>
        <div class="clock">${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s</div></div>`;
        
        if(t.remainTime <=1) {
            clearInterval(timeUpdate)
            clock.innerHTML = finalMessage;
            image.innerHTML=`<img src="img/Foto1.jpeg" class="img1">
            <img src="img/Pinguino.jpg" class="deco1">
            <img src="img/Pinguino2.jpg" class="deco2">
            <img src="img/Playa.jpg" class="img2">
            <img src="img/Corazon.png" class="deco3">
            <img src="img/Azulito.jpg" class="img3">
            <img src="img/Regalito.jpg" class="img4">
            <img src="img/Osita.gif" class="deco4">
            <img src="img/Michita.gif" class="deco5">
            <img src="img/Rosas.png" class="deco6">
            <img src="img/Rosas.png" class="deco7">`
            dedicatoria.innerHTML=`<h1>G Y M</h1>
            <p>Te amo mucho</p>`
            
        }
    },1000)
}

countdown('Apr 28 2020 24:00:00 GMT-0500','Aniversario','Feliz aniversario mi reina hermosa');
