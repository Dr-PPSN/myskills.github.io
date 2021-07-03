document.addEventListener('DOMContentLoaded', function() {

  //Sterne im Weltall zufällig positionieren
    var i;
    var l = document.getElementsByClassName("stern");
    for (i = 0; i < l.length; i++) {
    l[i].style.left = Math.floor(Math.random() * 100)+'%';

    }
    var o = document.getElementsByClassName("stern");
    for (i = 0; i < o.length; i++) {
    o[i].style.top = Math.floor(Math.random() * 96)+'%';
    }




  //Sterne auf höhe des 2. Textes
    var k
    var s = document.getElementsByClassName("stern2");
    for (k = 0; k < s.length; k++) {
    s[k].style.left = Math.floor(Math.random() * 100)+'%';

    }
    var t = document.getElementsByClassName("stern2");
    for (k = 0; k < t.length; k++) {
    t[k].style.top = Math.floor(Math.random() * 196)+'%';
    }




  //Animationen aller Objekte
  let ueb = document.getElementById('begruzung');
  let planet1 = document.getElementById('planet1');
  let planet2 = document.getElementById('planet2'); 
  let koerper = document.getElementById('koerper'); 
  let druese = document.getElementById('duese'); 
  let flame = document.getElementById('flame'); 
  let fenster1 = document.getElementById('fenster1');
  let fenster2 = document.getElementById('fenster2');
  let fenster3 = document.getElementById('fenster3');
  let flugzeug = document.getElementById('flugzeug');

  window.addEventListener('scroll', function(){
      let value = window.scrollY;

      if(value <= 500){
      //Planeten und Überschrift
      ueb.style.right = 5 + value * -0.23 + '%';
      ueb.style.top = 5 + value * 0.2 + '%';
      }

      if(value <= 900){
      planet1.style.left = 17 + value * 0.011 + '%';
      planet2.style.right = 25 + value * 0.04 + '%';
      }

      if(value <= 1400 || value > 100){
      //Körper der Rackete
      koerper.style.top = 142 + value * -0.09 + '%';
      koerper.style.left = 2 + value * 0.02 + '%';
      
      //drüse der Rackete
      druese.style.top = 176 + value * -0.09 + '%';
      druese.style.left = 13 + value * 0.02 + '%';

      //Flamme die aus der Drüse kommt
      flame.style.top = 200 + value * -0.09 + '%';
      flame.style.left = 6 + value * 0.02 + '%';

      //die Fenster der Rackete
      fenster1.style.left = 20.5 + value * 0.02 + '%';
      fenster1.style.top = 150 + value * -0.09 + '%';
      fenster2.style.left = 22.3 + value * 0.02 + '%';
      fenster2.style.top = 136 + value * -0.09 + '%';
      fenster3.style.left = 18.8 + value * 0.02 + '%';
      fenster3.style.top = 164 + value * -0.09 + '%';
      }

      //Flugzeug animation
      if(value <= 2000 || value > 800){
      flugzeug.style.right = -68 + value * 0.059 + '%';
      flugzeug.style.top = 176 + value * 0.0065 + '%';
      }
      console.log(value);
  })
}, false);