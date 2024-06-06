var div= document.querySelector("div");
var smallTextBtn= document.querySelector(".smallBtn");
var largeTextBtn= document.querySelector(".largeBtn");
 
 function smallText(){
  div.classList.add('small');
  div.classList.remove('large');
 }
 function largeText(){
    div.classList.add('large');
    div.classList.remove('small');
   }
 smallTextBtn.onclick=smallText;
 largeTextBtn.onclick=largeText;