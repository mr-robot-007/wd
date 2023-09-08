var randomNumber = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var src1 = "./images/dice" + randomNumber + ".png"
var src2 = "./images/dice" + randomNumber2 + ".png"
document.querySelector(".img1").setAttribute("src",src1);
document.querySelector(".img2").setAttribute("src",src2);

var winner;
if(randomNumber > randomNumber2) winner = "Player 1 Won";
else if( randomNumber2 > randomNumber) winner = "Player 2 Won";
else winner = "Its a draw"

document.querySelector("h1").textContent = winner;
console.log("hello");

