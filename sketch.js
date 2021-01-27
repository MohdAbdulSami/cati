var c1,garden,m1;
var gard,tom,mi;


function preload() {
   //load the images here
c1=loadAnimation("cat1.png","cat2.png","cat3.png","cat4.png")
garden=loadAnimation("garden.png")
m1=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png")
}

function  setup(){


   createCanvas(1000,800);

   gard.createSprite(500,400)
   gard.addAnimation(garden)
   gard.scale=14;

   //create tom and jerry sprites here
 
tom=createSprite(300,300)
tom.addAnimation(c1)
tom.scale=4;

mi=createSprite(300,300)
mi.addAnimation(m1)
mi.scale=4;


   }



function draw() {

   background("black");
   if(c1.x-mi.x<(c1.width-mi.width)/2){
   
   }
   //Write condition here to evalute if tom and jerry collide
keyPressed();
   drawSprites();
}
  

function keyPressed(){

   // For moving and changing animation write code here
 
 
 }
 