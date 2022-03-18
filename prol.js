var testo = document.getElementById('testoTraduzione');
var pulsante = document.getElementById('pulsanteTraduzione');
var testo2 = document.getElementById('testoTraduzione2');
var pulsante2 = document.getElementById('pulsanteTraduzione2');
var fronte = document.getElementById('frontepag8');
var retro = document.getElementById('retropag8');
var pulsante3 = document.getElementById ('retro8');
var fronte2 = document.getElementById('frontepag9');
var retro2 = document.getElementById('retropag9');
var pulsante4 = document.getElementById('retro9');
pulsante.addEventListener('click', function(){
testo.classList.toggle('hidden');
if (pulsante.innerHTML == "-"){
  pulsante.innerHTML = "+";
  }else{
    pulsante.innerHTML = "-";
    }
});


pulsante2.addEventListener('click', function(){
    testo2.classList.toggle('hidden');
    if (pulsante2.innerHTML == "-"){
      pulsante2.innerHTML = "+";
      }else{
        pulsante2.innerHTML = "-";
        }
    });

pulsante3.addEventListener('click', function(){
    retro.classList.toggle('hidden');
});

pulsante4.addEventListener('click', function(){
    retro2.classList.toggle('hidden');
});

let choices = document.getElementsByClassName('choice')

for (let choice of choices) {
    choice.firstElementChild.addEventListener('mouseover',
    function() {
        choice.firstElementChild.style.display = 'none'
        choice.lastChild.style.display = 'inline-block'  
    })

    choice.lastChild.addEventListener('click',
    function() {
        choice.lastChild.style.display = 'none'  
        choice.firstElementChild.style.display = 'inline-block'
    })
}

let abbreviazioni = document.getElementsByClassName('abbreviazioni')

for (let abbreviazione of abbreviazioni) {
    let espansione = abbreviazione.nextElementSibling;
    abbreviazione.style.display = 'none'
    espansione.style.textDecorationLine = 'underline'
    espansione.addEventListener('click',
    function() {
        espansione.style.display = 'none'
        abbreviazione.style.display = 'inline-block'  
        abbreviazione.style.textDecorationLine = 'underline';
    })

    abbreviazione.addEventListener('click',
    function() {
        abbreviazione.style.display = 'none' 
        espansione.style.display = 'inline-block'
    })
}





