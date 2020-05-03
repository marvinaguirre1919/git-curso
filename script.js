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
    const dedicatoria = document.getElementById('Dedicatoria');

    const timeUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        clock.innerHTML=`<div class="Title" ><h1>${titulo}</h1>
        <div class="clock">${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s</div></div>`;
        
        if(t.remainTime <=1) {
            clearInterval(timeUpdate)
            clock.innerHTML = `<p id=final>${finalMessage}</p>`;
            image.innerHTML=`<img src="img/Foto1.jpeg" class="img1">
            <img src="img/Pinguino.jpg" class="deco1" >
            <img src="img/Pinguino2.jpg" class="deco2" style="width: 100px;">
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
            //Creando imagenes para seleccionar
            var finalm = document.getElementById('clock');
            var img1 = document.getElementsByTagName('img')[0];
            var deco1 = document.getElementsByTagName('img')[1];
            var deco2 = document.getElementsByTagName('img')[2];
            var img2 = document.getElementsByTagName('img')[3];
            var deco3 = document.getElementsByTagName('img')[4];
            var img3 = document.getElementsByTagName('img')[5];
            var img4 = document.getElementsByTagName('img')[6];
            var deco4 = document.getElementsByTagName('img')[7];
            var deco5 = document.getElementsByTagName('img')[8];
            var deco6 = document.getElementsByTagName('img')[9];
            var deco7 = document.getElementsByTagName('img')[10];
            //Creando sus addeventListener
            img1.addEventListener('click',foto1);
            deco1.addEventListener('click',pinguinito);
            deco1.addEventListener('mouseover',reduce);
            deco2.addEventListener('click',pinguinitos);
            deco2.addEventListener('mouseover',reduce2);
            img2.addEventListener('click',playa);
            deco3.addEventListener('click',corazon);
            img3.addEventListener('click',azulito);
            img4.addEventListener('click',regalito);
            deco4.addEventListener('click',osita);
            deco5.addEventListener('click',michita);
            deco6.addEventListener('click',rosa);
            deco7.addEventListener('click',rosas);
            clock.addEventListener('click',final);
            dedicatoria.addEventListener('click',dedi);
            //Creando imagenes segunda cara
            //Fontdecos           
            var fontdeco1 = document.createElement('img');
                fontdeco1.setAttribute("id","decoA");
                fontdeco1.setAttribute("src","img/feliz-aniversario-2-anos-1.jpg")   
            var fontdeco2 = document.createElement('img');
                fontdeco2.setAttribute("id","decoB");
                fontdeco2.setAttribute("src","img/feliz-aniversario-2-anos-2.jpg");
            var fontdeco3 = document.createElement('img');
                fontdeco3.setAttribute("id","decoC");
                fontdeco3.setAttribute("src","img/feliz-aniversario-2-anos-3.jpg");
            //Text
            //*Primera imagen
            var ctn1 = document.createElement("div");
                var p1 = document.createElement('p');
                ctn1.appendChild(p1);
                ctn1.setAttribute("class","mensajeA");
                var msg1 = document.createTextNode("Hoy se cumple dos años de nuestro primer beso. Es maravilloso pensar todo lo que hemos vivido,me encantas y quiero pasar mi vida junto a ti.");
                p1.appendChild(msg1);
            //*Cuarta imagen
            var ctn4 = document.createElement("div");
                var p4 = document.createElement('p');
                ctn4.appendChild(p4);
                ctn4.setAttribute("class","mensajeD");
                var msg4 = document.createTextNode("¡Me vuelvo loco cada vez que te veo sonreír! Ojalá eso sea lo primero que vea todas las mañanas durante el resto de mi vida.");
                p4.appendChild(msg4);
            //Gif
            //*Gif1
            var fontdeco4 = document.createElement('img');
                fontdeco4.setAttribute("class","decoD");
                fontdeco4.setAttribute("src","img/Hugme.gif");
            //*Giff2
            var fontdeco5 = document.createElement('img');
                fontdeco5.setAttribute("class","decoE");
                fontdeco5.setAttribute("src","img/michi.gif");
            //Imagenes la revancha
            //*Playita
            var ctn2 = document.createElement("div");
                var fontimg1 = document.createElement('img');
                ctn2.appendChild(fontimg1);
                ctn2.setAttribute("class","contmsj");
                fontimg1.setAttribute("class","mensajeB")
                fontimg1.setAttribute("src","img/geralgatita.jpg")
            //*Azulito
            var fontimg2 = document.createElement('img');
                fontimg2.setAttribute("class","mensajeC");
                fontimg2.setAttribute("src","img/gordis.jpeg")
            // Text dento de conteiner especiales
            var especial1 = document.createElement('img');
                especial1.setAttribute("id","decoE1");
                especial1.setAttribute("src","img/feliz-aniversario-2-anos-4.jpg");
            var especial2 = document.createElement('img');
                especial2.setAttribute("id","decoE2");
                especial2.setAttribute("src","img/pungmichi.jpg")   
            var especial3 = document.createElement('img');
                especial3.setAttribute("id","decoE3");
                especial3.setAttribute("src","img/gatitomen.jpeg")  
                
            //Funciones para cada imagen
            function foto1 (){
                img1.parentNode.replaceChild(ctn1,img1);
                ctn1.addEventListener('click',function(){
                    ctn1.parentNode.replaceChild(img1,ctn1);
                })
            }

            function pinguinito (){
                deco1.parentNode.replaceChild(fontdeco1,deco1);
                fontdeco1.addEventListener('click',function () {
                fontdeco1.parentNode.appendChild(fontdeco2);
                });
                fontdeco2.addEventListener('click',function () {
                fontdeco2.parentNode.appendChild(fontdeco3);
                });
                fontdeco3.addEventListener('click',function () {
                fontdeco3.parentNode.appendChild(fontdeco1);
                });

            }
            
            function reduce (){
                var width = 110;
                var height = 150;
                var T =setInterval( function minimize () {
                if(width <= 40 && height <= 60){
                    clearInterval(T);
                    setTimeout(increase,11000);
                     
                }else{
                    width -= 20;
                    height -=30;
                    deco1.style.width = width +"px";
                    deco1.style.height= height+"px";
                }
                },700); 
            }
            function increase (){
                var width = 40;
                var height = 60;
                var t =setInterval( function increment () {
                if(width >= 100 && height >=150){
                    clearInterval(t);
                }else{
                    width += 20;
                    height +=30;
                    deco1.style.width = width +"px";
                    deco1.style.height= height+"px";
                }
                },700); 
            }
            function reduce2 (){
                var size2 = 90;
                var T2 =setInterval( function minimize2 () {
                if(size2 <= 40){
                    clearInterval(T2);
                    setTimeout(increase2,11000);
                     
                }else{
                    size2 -= 20;
                    deco2.style.width = size2 +"px";}
                },700); 
            }
            function increase2 (){
                var size2 = 40;
                var t =setInterval( function increment2 () {
                if(size2 >= 90){
                    clearInterval(t);
                }else{
                    size2 += 20;
                    deco2.style.width = size2 +"px";}
                },700); 
            }
            function pinguinitos (){
                deco2.parentNode.replaceChild(fontdeco2,deco2);
                fontdeco1.addEventListener('click',function () {
                fontdeco1.parentNode.appendChild(fontdeco2);
                });
                fontdeco2.addEventListener('click',function () {
                fontdeco2.parentNode.appendChild(fontdeco3);
                });
                fontdeco3.addEventListener('click',function () {
                fontdeco3.parentNode.appendChild(fontdeco1);
                });
            }
            function playa (){
                img2.parentNode.replaceChild(fontimg1,img2);
                fontimg1.addEventListener('click',function(){
                    fontimg1.parentNode.replaceChild(img2,fontimg1);
                })
            }
            function corazon (){
                alert('MI CORAZÓN LATIRÁ POR TI TODA MI VIDA');
                deco3.parentNode.appendChild(fontdeco3);
                fontdeco1.addEventListener('click',function () {
                fontdeco1.parentNode.appendChild(fontdeco2);
                });
                fontdeco2.addEventListener('click',function () {
                fontdeco2.parentNode.appendChild(fontdeco3);
                });
                fontdeco3.addEventListener('click',function () {
                fontdeco3.parentNode.appendChild(fontdeco1);
                });
            }
            function azulito (){
                img3.parentNode.replaceChild(fontimg2,img3);
                fontimg2.addEventListener('click',function(){
                    fontimg2.parentNode.replaceChild(img3,fontimg2);
                })
            }
            function regalito (){
                img4.parentNode.replaceChild(ctn4,img4);
                ctn4.addEventListener('click',function(){
                    ctn4.parentNode.replaceChild(img4,ctn4);
                })
            }
            function osita (){
                deco4.parentNode.replaceChild(fontdeco4,deco4);
                fontdeco4.addEventListener('click',function(){
                    fontdeco4.parentNode.replaceChild(deco4,fontdeco4);
                })
            }
            function michita (){
                deco5.parentNode.replaceChild(fontdeco5,deco5);
                fontdeco5.addEventListener('click',function(){
                    fontdeco5.parentNode.replaceChild(deco5,fontdeco5);
                })
            }
            function rosa (){
                alert("TE AMO MUCHO HERMOSA REINA DE MI CORAZÓN");
                    deco6.parentNode.appendChild(deco1);
            }
            function rosas (){
                alert("TU BELLEZA ES INCOMPARABLE, ERES LA MEJOR de todas");
                deco7.parentNode.appendChild(deco2);
            }
            function dedi (){
                image.parentNode.appendChild(especial3);
                //Recoil
                especial3.addEventListener('click',function(){
                    image.parentNode.removeChild(especial3);
                });
            }
            function final (){
                clock.parentNode.replaceChild(especial1,finalm);
                image.parentNode.appendChild(especial2);
                //Recoil
                especial1.addEventListener('click',function(){
                    especial1.parentNode.replaceChild(finalm,especial1);
                });
                especial2.addEventListener('click',function(){
                    image.parentNode.removeChild(especial2);
                });   
            }
            
}
    },1000)
}
countdown('Apr 25 2020 24:00:00 GMT-0500','Aniversario','Feliz aniversario mi reina hermosa');



