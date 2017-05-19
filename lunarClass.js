//this is the lunar class scirpt

//alert("Hi");

//var gameArea = document.getElementById('game');
//var gameRect = gameArea.getBoundingClientRect();
//var gameAreaHeight = Math.round(gameRect.bottom - gameRect.top);
//var gameAreaWidth = Math.round(gameRect.right - gameRect.left);

//alert("Hi game Area width is " + gameAreaWidth + "and game area height is" + gameAreaHeight);
//var landerImage = document.getElementbyId('lander');
//landerImage.style.position= "absolute";
//var targetImage = document.getElementById('target');
//targetImage.style.position= "absolute";
//var flameImage = document.getElementById('flame');
// var blowUp = document.getElementById('blowUp');



alert("Hi");

var gameArea = document.getElementById('myGameArea');
var gameRect = gameArea.getBoundingClientRect();
var gameAreaWidth = gameRect.right - gameRect.left;
var gameAreaHeight = gameRect.bottom - gameRect.top;



var landerImage = document.getElementById('lander');
landerImage.style.position = "absolute";
landerImage.style.zIndex = "1";



var targetImage = document.getElementById('target');
targetImage.style.position = "absolute";
targetImage.style.zIndex = "0";



var flameImage = document.getElementById('flame');
flameImage.style.position = "absolute";
flameImage.style.zIndex = "0";
flameImage.style.display = "none";



var blowUpImage = document.getElementById('blowup');
blowUpImage.style.position = "absolute";
blowUpImage.style.zIndex = "1";
blowUpImage.style.display = "none";



var landerDY = 6;
var landerDX = 0;
var landerX = 0;
var landerY = 0;
var landerWidth = 110;
var targetX = 0;
var targetY = 0;
var flameX = 0;
var flameY = 0;
var id;

function setFlamePosition(){

    flameY = landerY + 80;
    flameX = landerX + 40;
    flameImage.style.top = flameY + 'px';
    flameImage.style.left = flameX + 'px';
}


function setLanderAtTopAndTargetAtBottom(){

    blowUpImage.style.display = "none";
    landerImage.style.display = "block";

    landerY = 0;
    landerDX = 0;
    landerDY = 6;

    landerImage.style.top = landerY + 'px';

    landerX = Math.round(gameAreaWidth/2) - Math.round(landerWidth/2);
    landerImage.style.left = landerX + 'px';
    targetY = gameAreaHeight - 75;
    targetX = Math.round(Math.random() * (gameAreaWidth-110)) + 55;
    targetImage.style.top = targetY + 'px';
    targetImage.style.left = targetX + 'px';
    setFlamePosition();
}
   

