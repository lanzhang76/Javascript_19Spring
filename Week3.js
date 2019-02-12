/*1. Conditions Test:
Using Math.random() function, create random numbers between 1 and 100 and
create a simple condition that outputs whether its odd or even,*/

let num = Math.random()*100;
if (num % 2 == 1){
  console.log("the number is odd");
} else {
  console.log("the number is even");
}

/*2. Loop through numbers 1 to 100 and for each of these numbers,
output (console.log()) its square (ie 2 * 2 = 4).*/

for(i = 1; i < 101; i++){
  console.log(i*i);
}

/*3. Again, using Math.random() output either 0 (heads) or 1 (tails)
Then make a while loop that keeps repeating UNTIL the random function
has returned 1 (tails).*/
let number = Math.floor(Math.random());
while(number == 0) {
  console.log("still repeating");
}

/*4.Start with a number and find its factorial*/

let number4 = 1;
for(i = 1; i < 10; i++) {
  number4 = number4 * i;
}

/* 5. Using a for loop to create a equilateral triangle */
for (i=0;i<10;i++){
  console.log(' '.repeat(10-i)+'#'.repeat(1+i*2));
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

let i = 10;
while(i--){
  if(i%2 ==0){
    console.log(" # # # # # ");
  } else {
    console.log("# # # # # #");
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

let array_my = [1,1,1,1,1,1,1,1,1,1];
for (i = 0; i<10; i ++){
  let random_sign = ["@","$","%","*","~"]
  let index = Math.floor(Math.random()*5);
  array_my.splice(i,1,random_sign[index]);
  console.log(array_my);
}


/*
["%", 1, 1, 1, 1, 1, 1, 1, 1, 1]
["%", "%", 1, 1, 1, 1, 1, 1, 1, 1]
["%", "%", "*", 1, 1, 1, 1, 1, 1, 1]
["%", "%", "*", "~", 1, 1, 1, 1, 1, 1]
["%", "%", "*", "~", "~", 1, 1, 1, 1, 1]
["%", "%", "*", "~", "~", "%", 1, 1, 1, 1]
["%", "%", "*", "~", "~", "%", "*", 1, 1, 1]
["%", "%", "*", "~", "~", "%", "*", "%", 1, 1]
["%", "%", "*", "~", "~", "%", "*", "%", "%", 1]
["%", "%", "*", "~", "~", "%", "*", "%", "%", "$"]
*/
