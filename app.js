const div=document.querySelectorAll('#container1 .div');
const div0=document.querySelectorAll('#container .div');
const win =document.querySelector('#win');
var x='x',y=0,z=0,w=0;
var arr=['omar','go study','booo','go study','reema','booo','omar','reema','booo','omar','go study','reema'];

var arrcheck=[-1];
var num=-1;
for(let i=0;i<arr.length;i++){
    while(arrcheck.indexOf(num)!==-1){
        num= Math.floor(Math.random() * (12 - 0 + 0) + 0);
    } 
   
  if(arr[num]==="omar")
  div0[i].style.background='darkred';
  else if(arr[num]==="reema")
  div0[i].style.background='crimson';
  else if(arr[num]==="booo")
  div0[i].style.background='blue';
  else if(arr[num]==="go study")
  div0[i].style.background='gold';
 arrcheck.push(num);
 div[i].setAttribute('id',arr[num]);
};   
div.forEach(e => {

    e.addEventListener('click',reveal);
});   

function reveal(ev){
    ev.target.style.opacity='0';

    if(y===4)y=1;
    if(x==='x'){}
    else if(ev.target.id!==x && y!==3){
       win.classList.toggle('win');
       win.innerHTML='lost';}
        x=ev.target.id;
        y++;
        z++
        if(z===12){
            win.classList.toggle('win');
       win.innerHTML='WIN';}       
        }
  

