

var dead_jesusEl = document.getElementById("dead_jesus");
var alive_jesusEl = document.getElementById("alive_jesus");
var flamesEl = document.getElementById("flames");
var logsEl = document.getElementById("logs");
var daytimeEl = document.getElementById("daytime");
var nighttimeEl = document.getElementById("nighttime");
var goddessEl = document.getElementById("goddess");
var moonEl = document.getElementById("moon");
var bunny_rabbitEl = document.getElementById("bunny_rabbit");
var eggsEl = document.getElementById("eggs");
var churchEl = document.getElementById("church");
var lilyEl = document.getElementById("lily");
var cloudsEl = document.getElementById("clouds");
var Cloud_1El = document.getElementById("Cloud_1");
var Cloud_2El = document.getElementById("Cloud_2");
var Cloud_3El = document.getElementById("Cloud_3");
var Cloud_4El = document.getElementById("Cloud_4");
var Cloud_5El = document.getElementById("Cloud_5");
var bunny_hareEl = document.getElementById("bunny_hare");
var daytime_2El = document.getElementById("daytime");
var hare_and_eggEl = document.getElementById("hare_and_egg");
var lily_expEl = document.getElementById("lily_exp");
var fire_expEl = document.getElementById("fire_exp");
var church_expEl = document.getElementById("church_exp");
var goddess_expEl = document.getElementById("goddess_exp");
var egg_expEl = document.getElementById("egg_exp");
var bunny_expEl = document.getElementById("bunny_exp");
var jesus_expEl = document.getElementById("jesus_exp");
var moon_expEl = document.getElementById("moon_exp");
var lightOn1El = document.getElementById("light_on_1");
var lightOn2El = document.getElementById("light_on_2");
var lightOn3El = document.getElementById("light_on_3");
var dead_jesus2 = document.getElementsByClassName("dead_jesus2");
var happy_easter_textEl = document.getElementById("happy_easter_text");
var wobblyAni = "wobbly 0.5s ease-in-out infinite alternate";
var Sun_RaysEl = document.getElementById("Sun_Rays");

/*dead jesus drops to become alive jesus*/

dead_jesusEl.addEventListener("click", function(){
      dead_jesusEl.style.animation = "dead_jesus 2s linear forwards";
      dead_jesusEl.style.cursor = "default";  
      jesus_expEl.style.opacity = "1.0";
      lightOn1El.style.opacity = "1.0";
      lightOn2El.style.opacity = "1.0";
      lightOn3El.style.opacity = "1.0";
    
    
    setTimeout(function(){
        dead_jesusEl.style.opacity = "0";
        alive_jesusEl.style.opacity = "1.0";
        logsEl.style.animation = wobblyAni;
    }, 2000);
});

/*logs become a bonfire*/

logsEl.addEventListener("click", function(){
      logsEl.style.cursor = "default";  
      flamesEl.style.display = "inline";
      fire_expEl.style.opacity = "1.0";
      jesus_expEl.style.opacity = "0";
      logsEl.style.animation = "";
      lilyEl.style.animation = wobblyAni;

});

/* White Lily Annimation*/

lilyEl.addEventListener("click", function(){
   lilyEl.style.cursor = "default";  
   lily_expEl.style.opacity = "1.0";
   fire_expEl.style.opacity = "0";
   lilyEl.style.animation = "";
   moonEl.style.animation = wobblyAni;
});

/* night becomes day*/

moonEl.addEventListener("click", function(){
    moonEl.style.cursor = "default";  
   
   moon_expEl.style.opacity = "1.0";
  lily_expEl.style.opacity = "0";
    
  setTimeout(function(){
     nighttimeEl.style.opacity = "0";
      cloudsEl.style.opacity = "1.0";
      moonEl.style.animation = wobblyAni;
      moonEl.style.opacity = "0";
      moon_expEl.style.opacity = "0";
      flamesEl.style.opacity = "0";
      lightOn1El.style.opacity = "0";
      lightOn2El.style.opacity = "0";
      lightOn3El.style.opacity = "0";
      goddessEl.style.opacity = "1.0";
      goddess_expEl.style.display = "inline";
       goddess_expEl.style.opacity = "1.0";
      goddessEl.style.animation = wobblyAni;
      
    }, 3000);
   
   setTimeout(function(){
      Cloud_1El.style.animation = "Cloud_1 3s linear forwards";
      Cloud_2El.style.animation = "Cloud_2 3s linear forwards";
      Cloud_3El.style.animation = "Cloud_3 3s linear forwards";
      Cloud_4El.style.animation = "Cloud_4 3s linear forwards";
      Cloud_5El.style.animation = "Cloud_5 3s linear forwards";
    }, 4000);
});

/* goddess is a symbol*/

goddessEl.addEventListener("click", function(){
       bunny_hareEl.style.display = "inline"; 
         goddessEl.style.animation = "";
        /* hare_and_eggEl.style.opacity = "1.0"; */
         bunny_hareEl.style.animation = "bunny_hare 3s linear forwards"; 
    
   setTimeout(function(){
       goddess_expEl.style.display = "none";
       bunny_rabbitEl.style.opacity = "1.0"; 
       eggsEl.style.opacity = "1.0";
       eggsEl.style.animation = wobblyAni;
       bunny_hareEl.style.opacity = ""; 
    }, 2000);
});

/* Easter Eggs */

eggsEl.addEventListener("click", function(){
    eggsEl.style.cursor = "default";  
    egg_expEl.style.opacity = "1.0";
    eggsEl.style.animation = "";
    bunny_rabbitEl.style.animation = wobblyAni;
    
});

/* Bunny Rabbit */

bunny_rabbitEl.addEventListener("click", function(){
    bunny_rabbitEl.style.cursor = "default";  
    egg_expEl.style.opacity = "0";
    bunny_rabbitEl.style.animation = "";
    bunny_expEl.style.opacity = "1.0";
    
    setTimeout(function(){
        flamesEl.style.opacity = "1.0";
        happy_easter_textEl.style.display = "inline";
        bunny_expEl.style.opacity = "0";
        lightOn1El.style.opacity = "1.0";
        lightOn2El.style.opacity = "1.0";
        lightOn3El.style.opacity = "1.0";   
        eggsEl.style.animation = wobblyAni;
        bunny_rabbitEl.style.animation = wobblyAni;
        goddessEl.style.animation = wobblyAni;
        lilyEl.style.animation = wobblyAni;
        happy_easter_textEl.style.animation = "blinker 1s linear infinite";
        logsEl.style.animation = wobblyAni;
        logsEl.style.animation = wobblyAni;
        alive_jesusEl.style.animation = wobblyAni;
        flamesEl.style.animation = wobblyAni;
        Sun_RaysEl.style.animation = wobblyAni;
    }, 3000);
    
});



