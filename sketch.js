var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var robots, robot1,robot2;
var robot1Img, robot2Img;
var bg, bgImg, gameBg;

function preload(){
  bgImg=loadImage("images/form_bg.jpg");
  gameBg=loadImage("images/game_bg.jpg");
 
 


}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  if(gameState==2){
    game.end();
  }
}
