const paraBox = document.getElementById("instruction");
const text = document.createElement("p");
const textContent = document.createTextNode(" HOVER TO SEE THE COLOR INFORMATION");
text.style.font = "bold 25px arial";
paraBox.appendChild(text);
text.appendChild(textContent);


const box0 = document.getElementsByClassName("box");
for (let i=0; i<box0.length; i ++){
    box0[i].style.height = "250px";
    box0[i].style.width = "250px";
    box0[i].style.display = "inline-block";
    box0[i].style.zindex= "-1";
    box0[i].style.position = "relative";
  }

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");

box1.style.backgroundColor = "#FE840E";
box2.style.backgroundColor = "#FF6F61";
box3.style.backgroundColor = "#9E1030";
box4.style.backgroundColor = "#DD4132";
box5.style.backgroundColor = "#CE3175";
box6.style.backgroundColor = "#E8B5CE";

const main = document.getElementById("main");
main.style.position = "relative";

var toolTip = document.getElementById("tip");
toolTip.style.display ="none";
toolTip.style.height = "50px";
toolTip.style.width = "140px";
toolTip.style.font = "13px arial";
toolTip.style.border = "solid 2px black";
toolTip.style.padding = "1em";
toolTip.style.background = "white";
toolTip.style.position = "absolute";
toolTip.style.zindex= 1;

var x,y;
var boxLocation;

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


var showInfo = function (event){
    toolTip.style.display="inline-block";
    document.addEventListener("mouseover", showCoordsX);
    document.addEventListener("mouseover", showCoordsY);
    toolTip.style.left = x + "px";
    toolTip.style.top = y + "px";

    boxLocation = event.target.id;
    console.log(boxLocation);//show which box id it belongs to

    if (boxLocation == "box1"){
      var text = document.getElementById("tip");
      text.innerHTML = "PANTONE 15-1264, Turmeric, #FE840E";
      toolTip.style.background = "#FE840E";
    } else if (boxLocation == "box2"){
      var text = document.getElementById("tip");
      text.innerHTML = "PANTONE 16-1546, Coral, #FF6F61";
      toolTip.style.background = "#FF6F61";
    } else if (boxLocation == "box3"){
      var text = document.getElementById("tip");
      text.innerHTML = "PANTONE 19-1862, Jester Red, #9E1030";
      toolTip.style.background = "#9E1030";
    } else if (boxLocation == "box4"){
      var text = document.getElementById("tip");
      text.innerHTML = "PANTONE 17-1564, Fiesta, #DD4132";
      toolTip.style.background = "#DD4132";
    } else if (boxLocation == "box5"){
      var text = document.getElementById("tip");
      text.innerHTML = "PANTONE 17-2034, Pink Yarrow, #CE3175";
      toolTip.style.background = "#CE3175";
    } else if (boxLocation == "box6"){
      var text = document.getElementById("tip");
      text.innerHTML = "PANTONE 14-2808, Sweet Lilac, #E8B5CE";
      toolTip.style.background = "#E8B5CE";
    }
}

var hideInfo = function (input){
  toolTip.style.display="none";
  var text = document.getElementById("tip");
  text.innerHTML = " ";
  toolTip.style.background = "white";
}


for (let i=0; i<box0.length; i ++){
box0[i].addEventListener("mouseenter",showInfo);
box0[i].addEventListener("mouseleave",hideInfo);

}
