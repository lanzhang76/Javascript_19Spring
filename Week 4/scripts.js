/*1. Conditions Test:*/

function numberRandomnize(){
  let numberRandom = Math.random()*100;
  return numberRandom;
};
let num = numberRandomnize();
if (num % 2 == 1){
  console.log("the number is odd");
} else {
  console.log("the number is even");
}


/*turn into*/
function pyramid(num){
  let result = ' '.repeat(10-num)+'#'.repeat(1+num*2);
  return result;
}

for (i=0;i<100;i++){
  console.log(pyramid(i));
}


/*
           #
          ###
         #####
        #######
       #########
      ###########
     #############
    ###############
   #################
  ###################

*/


/*
6. Using the loop approach above, create a chess board using # and space ' '.
You could try using loops inside a loop to create the alternative pattern
*/
function drawInterval(num){
  let i = num;
  while(i--){
    if(i%2 ==0){
      console.log(" # # # # # ");
    } else {
      console.log("# # # # # ");
    }
  }
}



/*
 # # # # #
# # # # # #
 # # # # #
# # # # # #
 # # # # #
# # # # # #
 # # # # #
# # # # # #
 # # # # #
# # # # # #
 # # # # #
# # # # # #
*/

/*
7. draw ASCII
*/


function drawTip(){
  let a = " "+"-"+" ".repeat(6)+"-"+" ";
  return a;
}

function drawEar(){
  let b = "|"+" "+ "|" + " ".repeat(4) + "|" + " "+ "|";
  return b;
}

function drawEarEdge(){
  let c = "|"+ " ".repeat(2) + "-".repeat(4) + " ".repeat(2) + "|";
  return c;
}

function eye(){
  let eyeNum = Math.floor(Math.random()*5)
  let arrayEye = ["$ $","O-O","@ @","> <","Q Q"];
  let e = "|" + " ".repeat(eyeNum)+ arrayEye[eyeNum] + " ".repeat(5-eyeNum)+"|"
  return e;
}


function nose(){
  let m = "|" + " ".repeat(4)+ "+" + " ".repeat(3)+"|"
  return m;
}


function mouth(){
  let mouthNum = Math.floor(Math.random()*4)
  let arrayMouth = ["O","~","=","U"];
  let m = "|" + " ".repeat(mouthNum+2)+ arrayMouth[mouthNum] + " ".repeat(5-mouthNum)+"|"
  return m;
}

function chinUp(){
  let g = "|" + " ".repeat(8)+"|";
  return g;
}

function chin(){
  let z = "|" + "_".repeat(8)+"|";
  return z;
}

for (i=0; i < 10; i++){
  switch(i){
    case 0:
      console.log(drawTip());
      break;
    case 1:
      console.log(drawEar());
      break;
    case 2:
        console.log(drawEar());
        break;
    case 3:
        console.log(drawEar());
        break;
    case 4:
          console.log(drawEarEdge());
          break;
    case 5:
        console.log(eye());
        break;
    case 6:
        console.log(nose());
        break;
    case 7:
        console.log(mouth());
        break;
    case 8:
        console.log(chin());
        break;
  }

}

/*  The facial expression randomizes
          -      -
VM1103:54 | |    | |
VM1103:57 | |    | |
VM1103:60 | |    | |
VM1103:63 |  ----  |
VM1103:66 |   > <  |
VM1103:69 |    +   |
VM1103:72 |  O     |
VM1103:75 |________|


VM1094:51  -      - 
VM1094:54 | |    | |
VM1094:57 | |    | |
VM1094:60 | |    | |
VM1094:63 |  ----  |
VM1094:66 |  @ @   |
VM1094:69 |    +   |
VM1094:72 |     U  |
VM1094:75 |________|
undefined


VM1082:51  -      -
VM1082:54 | |    | |
VM1082:57 | |    | |
VM1082:60 | |    | |
VM1082:63 |  ----  |
VM1082:66 |    Q Q |
VM1082:69 |    +   |
VM1082:72 |   ~    |
VM1082:75 |________|



*/










}
