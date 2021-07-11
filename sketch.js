const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, bodies;
var bg, bg_img;
var l1, l2, l3, l4, lp;
var bi1, bi2, bi3;
var c1, c2, c3, c4, c5;
var c11, c22, c33, c44, c55;
var chs;

var f1, play, pname; 

var logsGroup, birdsGroup;
var PLAY = 1;
var END = 2;
var gameState = 0;

function preload(){
  
  c1 = loadImage("characterss/ch1.png");
  c2 = loadImage("characterss/ch2.png");
  c3 = loadImage("characterss/ch3.png");
  c4 = loadImage("characterss/ch4.png");
  c5 = loadImage("characterss/ch5.png");

  l1 = loadImage("logs/lo1.png");
  l2 = loadImage("logs/lo2.png");
  l3 = loadImage("logs/lo3.png");
  l4 = loadImage("logs/lo4.png");
  lp = loadImage("logs/lp.png");

  bi1 = loadImage("birds/bir1.png");
  bi2 = loadImage("birds/bir2.png");
  bi3 = loadImage("birds/bir3.png");

}

function setup(){
createCanvas(displayWidth, displayHeight);
database = firebase.database();
logsGroup = new Group();

f1 = new Form();
f1.display();

}

function draw(){
  background("white");
  
  
  drawSprites();
}






function spawnBi(){


}
