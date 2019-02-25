const paraBox = document.getElementById("instruction");
const text = document.createElement("p");
const textContent = document.createTextNode("HOVER TO SEE THE COLOR INFO");
text.style.font = "bold 25px arial";
paraBox.appendChild(text);
text.appendChild(textContent);


const box0 = document.getElementsByClassName("box");
for (let i=0; i<box0.length; i ++){
    box0[i].style.height = "200px";
    box0[i].style.width = "200px";
    box0[i].style.display = "inline-block";
    box0[i].style.zindex= "-1";
    box0[i].style.position = "relative";
  }


const boxA = document.getElementById("box1");
const boxB = document.getElementById("box2");
const boxC = document.getElementById("box3");
const boxD = document.getElementById("box4");

boxA.style.backgroundColor = "#FE840E";
box2.style.backgroundColor = "#FF6F61";
box3.style.backgroundColor = "#9E1030";
box4.style.backgroundColor = "#DD4132";

const main = document.getElementById("main");
main.style.position = "relative";

var toolTip = document.getElementById("tip");
toolTip.style.display ="none";
toolTip.style.height = "100px";
toolTip.style.width = "100px";
toolTip.style.background = "blue";
toolTip.style.position = "absolute";
toolTip.style.zindex= 5;

var x,y;

function showCoordsX(event) {
   x = event.clientX;
//   console.log(x);
  return x;
}

function showCoordsY(event) {
   y = event.clientY;
//   console.log(y);
  return y;
}


var showInfo = function (input){
    toolTip.style.display="inline-block";
    document.addEventListener("mouseover", showCoordsX);
  document.addEventListener("mouseover", showCoordsY);
    toolTip.style.background = "yellow";
    toolTip.style.left = x + "px";
    toolTip.style.top = y + "px";
}

var hideInfo = function (input){
  toolTip.style.display="none";
}

// let number = ["1","2","3","4"];
// var answer ;
// var textShow = new function(a){
//   answer = number[a];
//   console.log(answer);
// }


for (let i=0; i<box0.length; i ++){
box0[i].addEventListener("mouseenter",showInfo);
box0[i].addEventListener("mouseleave",hideInfo);

}
