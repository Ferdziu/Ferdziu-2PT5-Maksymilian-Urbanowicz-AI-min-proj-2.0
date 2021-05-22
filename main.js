console.log("Script start!");
var x=0;
var sound2 = null;
let btnStop = document.querySelector(".button");
btnStop.addEventListener('click',function(){
    x=0;
    soundPause();
},false);

let pos=-1;
let items = ["mp3/zwierzak/krowa.mp3", "mp3/zwierzak/koń.mp3", "mp3/zwierzak/pies.mp3", "mp3/zwierzak/kot.mp3", "mp3/zwierzak/kura.mp3", "mp3/transport/samolot.mp3", "mp3/transport/auto.mp3", "mp3/transport/tir.mp3", "mp3/transport/pociag.mp3", "mp3/instrument/trabka.mp3", "mp3/instrument/gitara.mp3", "mp3/instrument/perkusja.mp3", "mp3/instrument/organy.mp3", "mp3/instrument/skrzypce.mp3", "mp3/instrument/harfa.mp3 ", "mp3/kolory/Czerwony.mp3", "mp3/kolory/Zielony.mp3", "mp3/kolory/Niebieski.mp3", "mp3/kolory/Zolty.mp3", "mp3/kolory/Fioletowy.mp3", "mp3/kolory/Brazowy.mp3", "mp3/kształty/Kolo.mp3", "mp3/kształty/Trojkat.mp3", "mp3/kształty/Kwadrat.mp3", "mp3/kształty/Trapez.mp3"];
//console.log(items);
let item = document.querySelectorAll(".sect");
for(let i =0; i<item.length; i++){
    item[i].addEventListener('click', function(){     
        if(licz[i]==0){
            pos=i; 
            licz[i]=1;
            sound2=soundPlay(items[i], item[i]);
        }
    },false);

    let div = document.createElement('div');
    item[i].addEventListener('mouseover', function(){     
        
        
        div.classList.add("information");
        div.textContent="Naciśnij aby usłyszeć";
        item[i].appendChild(div);

    },false);

    item[i].addEventListener('mouseout', function(){     
       div.classList.remove("information");
       div.textContent = " ";
    },false);

}
let licz=[];
for(let i=0; i<item.length;i++){
    licz[i]=0;
}
let pianko = ["mp3/pianino/c.mp3", "mp3/pianino/c1.mp3", "mp3/pianino/d.mp3", "mp3/pianino/d1.mp3", "mp3/pianino/e.mp3", "mp3/pianino/f.mp3", "mp3/pianino/f1.mp3", "mp3/pianino/g.mp3", "mp3/pianino/g1.mp3", "mp3/pianino/a.mp3", "mp3/pianino/a1.mp3", "mp3/pianino/b.mp3", "mp3/pianino/c2.mp3"];

let pianinek = document.querySelectorAll(".pianinek");
//console.log(pianinek.length);
for(let i =0; i<pianinek.length; i++){
    pianinek[i].addEventListener('click', function(){   
        if(licz[i]==0){
            soundPlay2(pianko[i], pianinek[i].id);
        }
    },false);
    
    
}

window.addEventListener('keydown', function(event){   
    let name=null;
    let kod = null;    
    if(event.key==="a"){
        kod = event.key;
        name = "mp3/pianino/c.mp3";
    }  
    if(event.key==="w"){
        kod = event.key;
        name = "mp3/pianino/c1.mp3";
    } 
    if(event.key==="s"){
        kod = event.key;
        name = "mp3/pianino/d.mp3";
    } 
    if(event.key==="e"){
        kod = event.key;
        name = "mp3/pianino/d1.mp3";
    } 
    if(event.key==="d"){
        kod = event.key;
        name = "mp3/pianino/e.mp3";
    } 
    if(event.key==="f"){
        kod = event.key;
        name = "mp3/pianino/f.mp3";
    } 
    if(event.key==="t"){
        kod = event.key;
        name = "mp3/pianino/f1.mp3";
    } 
    if(event.key==="g"){
        kod = event.key;
        name = "mp3/pianino/g.mp3";
    } 
    if(event.key==="y"){
        kod = event.key;
        name = "mp3/pianino/g1.mp3";
    } 
    if(event.key==="h"){
        kod = event.key;
        name = "mp3/pianino/a.mp3";
    } 
    if(event.key==="u"){
        kod = event.key;
        name = "mp3/pianino/a1.mp3";
    } 
    if(event.key==="j"){
        kod = event.key;
        name = "mp3/pianino/b.mp3";
    } 
    if(event.key==="k"){
        kod = event.key;
        name = "mp3/pianino/c2.mp3";
    } 
    
    if((name !==null) && (kod !== null))soundPlay2(name, kod);
},false);

window.addEventListener('keyup', function(event){
    let kod = null;
    for(let i=0; i<pianinek.length; i++){
        let kods = pianinek[i].id
        if(event.key === kods){
            kod = event.key;
        }
    }

    if(kod !== null) removeColor(kod);

},false);

var y=0;
function soundPlay(name, element){
    
    if(x===0){
        var sound = new Audio(name);
        sound.loop = false;
        sound.autoplay=false;
        sound.muted = false;
        sound.controls = true;
    }

    if((element.dataset.play !== "true")&&(x===0)){
        sound.play();
        element.dataset.play = "true";
        x=1;
        sound.onended = function(){
            element.dataset.play = "false";
            x=0;
            licz[pos]=0;
           
        }
    }
    //console.log("y:"+y+" x:"+x);
    if(y==0){
    if((sound.paused == true)&&(y===0)){
        sound.play();
        y=1;
        sound.onended = function(){
            element.dataset.play = "false";
            y=0;
            licz[pos]=0;
            }
        }
    }
    return sound; 
}

function soundPause(){
    sound2.pause();
    y=0;
    licz[pos]=0;
    //console.log(sound2);
    //console.log(y);
}

function soundPlay2(name, element){
        let sound2 = new Audio(name);
        sound2.loop = false;
        sound2.autoplay=false;
        sound2.muted = false;
        sound2.play();
        let it = document.getElementById(element);
        it.classList.add("color");
}

function removeColor(element){
    let it = document.getElementById(element);
    it.classList.remove('color');
}

    
    
   
    
    
   


