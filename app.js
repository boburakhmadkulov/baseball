// let a = prompt('Son kiriting: ');
// let s = Number(a); 
// alert(s);

// let a = parseFloat(prompt('Son kiriting: '));
// let b = a - parseInt(a);
// if (b>=0.5){
//   console.log(a - b + 1);
// }
// else{
//   console.log(a - b)
// }

// let a = parseFloat(Number(prompt('Son kiriting: ')));
// console.log(parseInt(a+0.5));

// let a  = prompt('Siz qay birida ishlamoqchisz, "int" yoki "float": ');
// if(a =='float'){
//   let width = parseFloat(prompt('Width: '));
//   let height = parseFloat(prompt('Height: '));
//   console.log('Yuza: ', width * height)
// }
// else{
//   let width = parseInt(prompt('Width: '));
//   let height = parseInt(prompt('Height: '));
//   console.log('Yuza: ', width * height)
// }

// let a = prompt('5 xonali son kiriting: ');
// console.log(a[0]+'!'+a[1]+'!'+a[2]+'!'+a[3]+'!'+a[4]);

// let a = prompt('5 xonali son kiriting: ');
// let b = parseInt(a/10000);
// let c = parseInt((a%10000)/1000);
// let d = parseInt((a%1000)/100);
// let e = parseInt((a%100)/10);
// let f = parseInt(a%10);
// console.log(b+'!'+c+'!'+d+'!'+e+'!'+f);

// let a = prompt('Son kiriting: ');
// let h = 0;
// let m = 0;
// let s = 0;
// h = parseInt(a/3600);
// m = parseInt(a%3600/60);
// s = a%3600%60;
// console.log(h+':'+m+':'+s);

// let a = prompt('5xonali son kiriting: ');
// let a = 12345;
// console.log(parseInt(a%1000/100));

// let n = Number(prompt('Son kiriting: '));
// if(20<=n && n<=30){
//   console.log(1);
// }else{
//   console.log(0);
// }

// console.log(5>4 && 5==5)
// console.log(5>4 && 5!=5)
// console.log(5>5 || 5==5)
// console.log(5>5 || 5!=5)

// let n = Number(prompt('Son kiriting: '));
// if(n%2==0){
//   console.log('Juft!');
// }else{
//   console.log('Toq!');
// }

// let n = Number(prompt('Son kiriting: '));
// if(n%2==0 && n>0){
//   console.log('Juft musbat!');
// }else if(n%2==0 && n<0){
//   console.log('Juft manfiy!');
// }else if(n%2==1 && n>0){
//   console.log('Toq musbat!');
// }else if(n%2==1 && n<0){
//   console.log('Toq manfiy!');
// }else{
//   console.log('Siz kiritgan son "0"ga teng!')
// }

// let a = Number(prompt('Son kiriting(a): '));
// let b = Number(prompt('Son kiriting(b): '));
// let c = Number(prompt('Son kiriting(c): '));
// let d = Number(prompt('Son kiriting(d): '));
// let e = Number(prompt('Son kiriting(e): '));
// if(a>=b && a>=c && a>=d && a>=e){
//   console.log('max-a:', a);
// }else if(b>=a && b>=c && b>=d && b>=e){
//   console.log('max-b:', b);
// }else if(c>=a && c>=b && c>=d && c>=e){
//   console.log('max-c:', c);
// }else if(d>=a && d>=c && d>=b && d>=e){
//   console.log('max-d:', d);
// }else if(e>=a && e>=c && e>=d && e>=b){
//   console.log('max-e:', e);
// }
// if(a<=b && a<=c && a<=d && a<=e){
//   console.log('min-a:', a);
// }else if(b<=a && b<=c && b<=d && b<=e){
//   console.log('min-b:', b);
// }else if(c<=a && c<=b && c<=d && c<=e){
//   console.log('min-c:', c);
// }else if(d<=a && d<=c && d<=b && d<=e){
//   console.log('min-d:', d);
// }else if(e<=a && e<=c && e<=d && e<=b){
//   console.log('min-e:', e);
// }


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
});