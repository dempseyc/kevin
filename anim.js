let anim = [
{text: "MEET" ,
 delay: 0 },
{text: "MEET " ,
 delay: 0 },
{text: "MEET K" ,
 delay: 0 },
{text: "MEET KE" ,
 delay: 0 },
{text: "MEET KEV" ,
 delay: 0 },
{text: "MEET KEVI" ,
 delay: 0 },
{text: "MEET KEVIN" ,
 delay: 0 },
{text: "MEET KEVIN " ,
 delay: 0 },
{text: "MEET KEVIN B" ,
 delay: 0 },
{text: "MEET KEVIN BE" ,
 delay: 0 },
{text: "MEET KEVIN BER" ,
 delay: 0 },
{text: "MEET KEVIN BERR" ,
 delay: 1 },
{text: "MEET KEVIN BERRY" ,
 delay: 2 },
{text: "MEET KEVIN BERR" ,
 delay: 5 },
{text: "MEET KEVIN BERRE" ,
 delay: 8 },
{text: "MEET KEVIN BERREY" ,
 delay: 2 }
]

let animType1 = $('.anim-type-one').eq(0);
// console.log(animType1);
// animType1.html('knknk');
let d = 0;
let t = 0;

let stepAnimForward = function () {
  console.log("fired");
  console.log('1/5sec number '+ t);
  d = anim[t].delay;
  if (d>0) {
    d--;
    anim[t].delay = d;
  } else {
    animType1.html(anim[t].text);
    t++;
  }
  if (t>15) {
    clearInterval(timer);
  }
}

let timer = setInterval(function(){
  stepAnimForward();
}, 100);

let fadeInText = $('.fade-in-after-two').eq(0);

let timeout = function() {
  clearTimeout(timer2sec);
}

let timer2sec = setTimeout(function() {

  fadeInText.css({"opacity": "100"});
  timeout();

}, 6000);



