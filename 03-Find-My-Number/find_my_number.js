//insert your pseudocode below
/*
user has to guess a random num from the porgram 
the user can ask question to the porgram 
thw qustions are is the num higher or lower than 
* here
we going to creat var for user num inpot
we creat var for random num
and let the porogram tel the users is the gusseing num higher or lower 
and finally if he got the right num he will show congrats .

*/
//insert your code below 

var Number2, usergusse;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}


Number2 = mathRandomInt(1, 100);
usergusse = Number(window.prompt('Can you guess my number?  between 1 -100 '));
while (usergusse != Number2) {
  if (usergusse > Number2) {
    usergusse = window.prompt('Nop,  your number is bigger ');
  }
  if (usergusse < Number2) {
    usergusse = window.prompt('Nop, your number is smaller');
  }
}
window.alert('Yoppppi you did it');