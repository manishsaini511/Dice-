var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var img1 = document.querySelectorAll("img") [0];

img1.setAttribute("src", randomImageSource);

