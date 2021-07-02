document.addEventListener('DOMContentLoaded', function() {

    var i;
    var l = document.getElementsByClassName("stern");
    for (i = 0; i < l.length; i++) {
    l[i].style.left = Math.floor(Math.random() * 100)+'%';

    }
    var o = document.getElementsByClassName("stern");
    for (i = 0; i < o.length; i++) {
    o[i].style.top = Math.floor(Math.random() * 96)+'%';
    }
  let ueb = document.getElementById('begruzung');
  let planet1 = document.getElementById('planet1');
  let planet2 = document.getElementById('planet2'); 
  window.addEventListener('scroll', function(){
      let value = window.scrollY;

      ueb.style.right = 6 + value * -0.23 + '%';
      ueb.style.top = 6 + value * 0.2 + '%';
      planet1.style.left = 17 + value * 0.011 + '%';
      planet2.style.right = 25 + value * 0.04 + '%';
  })
}, false);