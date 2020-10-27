const div=document.querySelectorAll('#container1 .div');
const div0=document.querySelectorAll('#container .div');
const win =document.querySelector('#win');
var x='x',y=0,z=0,w=0;
//console.log(div);
var arr=['omar','go study','booo','go study','reema','booo','omar','reema','booo','omar','go study','reema',];

var arrcheck=[-1];
var num=-1;
for(let i=0;i<arr.length;i++){
    while(arrcheck.indexOf(num)!==-1){
        num= Math.floor(Math.random() * (12 - 0 + 0) + 0);
    } 
    //console.log(num);

    //console.log(arr[num]);
  //  if(arrcheck.indexOf(num)!==-1)
  if(arr[num]==="omar")
  div0[i].style.background='darkred';
  else if(arr[num]==="reema")
  div0[i].style.background='crimson';
  else if(arr[num]==="booo")
  div0[i].style.background='blue';
  else if(arr[num]==="go study")
  div0[i].style.background='gold';
 arrcheck.push(num);
 div0[i].innerHTML=arr[num];
 div[i].setAttribute('id',arr[num]);
 //console.log(div[i].attributes);
};   
//const win=document.querySelector('#win');
div.forEach(e => {

    e.addEventListener('click',reveal);
});   

function reveal(ev){
    //console.log(ev.target);
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

  /* else if(ev.target.id==='reema')
    y=y+1;
    else if(ev.target.id==='booo')
    z=z+1;
    else if(ev.target.id==='go study')
    w=w+1;
    if((x===3 &&y===0 &&z===0 &&w===0) || (x===3 &&(y===3 || z===3 || w===3))){
    console.log('pointt');
    x=0;
}else if( (y===3 &&z===0 &&x===0 &&w===0) || (y===3 &&(x===3 || z===3 || w===3))   ){
console.log('pointt');
y=0;
}
else if((z===3 &&x===0 &&y===0 &&w===0) || (z===3 &&(x===3 || y===3 || w===3))){
 console.log('pointt');
z=0;
}
else if((w===3 &&z===0 &&x===0 &&y===0) || (w===3 &&(x===3 || z===3 || y===3))){
    console.log('pointt');
   w=0;}*/
}

