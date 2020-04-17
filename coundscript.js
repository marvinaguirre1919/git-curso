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

const countdown = (deadline, elem, titulo,finalMessage) =>{
    const el = document.getElementById(elem);

    const timeUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML=`<div class="Title" ><h1>${titulo}</h1>
        <div>${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s</div>`;
        
        if(t.remainTime <=1) {
            clearInterval(timeUpdate)
            el.innerHTML = finalMessage;
        }
    },1000)
}

countdown('Apr 27 2020 01:14:37 GMT-0500','clock','Aniversario','Me cago en Java');
