var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1 = "./images/dice" + randomNumber1 + ".png"
document.querySelector(".img1").setAttribute("src", image1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = "./images/dice" + randomNumber2 + ".png"
document.querySelector(".img2").setAttribute("src", image2);

var heading;
if(randomNumber1 > randomNumber2) {
    heading = "🚩Player 1 Wins!";
} else if(randomNumber2 > randomNumber1) {
    heading = "Player 2 Wins!🚩";
} else {
    heading ="Draw!"
}
document.querySelector("h1").textContent = heading;

function refreshPage() {
    location.reload(); // This will reload the page
}
