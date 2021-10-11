let btn = document.getElementById('submit');
let text1 = document.querySelector('#text1');
let text2 = document.querySelector('#text2');
let strike = 0;
let ball = 0;

let a = document.querySelector('#num_a');
let b = document.querySelector('#num_b');
let c = document.querySelector('#num_c');
let d = document.querySelector('#num_d');

let e = document.querySelector('#num_e');
let f = document.querySelector('#num_f');
let g = document.querySelector('#num_g');
let h = document.querySelector('#num_h');

btn.addEventListener('click', () => {
  if(a.value==e.value){
    strike+=1;
  }
  if(b.value==f.value){
    strike+=1;
  }
  if(c.value==g.value){
    strike+=1;
  }
  if(d.value==h.value){
    strike+=1;
  }
  if(a.value==f.value || a.value==g.value || a.value==h.value){
    ball+=1;
  }
  if(b.value==e.value || b.value==g.value || b.value==h.value){
    ball+=1;
  }
  if(c.value==f.value || c.value==e.value || c.value==h.value){
    ball+=1;
  }
  if(d.value==f.value || d.value==g.value || d.value==e.value){
    ball+=1;
  }
  text1.innerHTML = strike;
  text2.innerHTML = ball;
  console.log('Strike:', strike);
  console.log('Ball:', ball);
  strike = 0;
  ball = 0;
});
