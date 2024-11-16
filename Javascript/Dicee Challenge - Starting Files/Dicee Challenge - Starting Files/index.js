//for left side img
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImagesSelector1 = "dice" + randomNumber1 + ".png";
var randomImagesSource1 = "images/" + randomImagesSelector1;
document.querySelector(".img1").setAttribute("src", randomImagesSource1);

//for right side img
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImagesSelector2 = "dice" + randomNumber2 + ".png";
var randomImagesSource2 = "images/" + randomImagesSelector2;
document.querySelector(".img2").setAttribute("src", randomImagesSource2);

//h1 tag
var text = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    text.textContent = "🚩Player 1 Wins";
}
else if (randomNumber1 == randomNumber2) text.textContent = "Draw";
else {
    text.textContent = "Player 2 Wins🚩";
}