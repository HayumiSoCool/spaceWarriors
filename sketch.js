// Variables 
var bg,bgImg;
var ss,ssImg;
var alien,alien1,alien2,alien3,alien4,alien5,alien6,alien7;
var gameover,gameoverImg;
var restart,restartImg;
var score=0;
var gameState="play";
var alienGroup,lazerGroup;
var lazer;
var edges;

function preload(){
  
    // Loading Images
    bgImg=loadImage("assets/bg4.webp");
    ssImg=loadImage("assets/ss2.png");
  
    alien1=loadImage("assets/alien1.png");
    alien2=loadImage("assets/alien2.png");
    alien3=loadImage("assets/alien3.png");
    alien4=loadImage("assets/alien4.png");
    alien5=loadImage("assets/alien5.png");
    alien6=loadImage("assets/alien6.png");
    alien7=loadImage("assets/alien7.png");
  
    gameoverImg=loadImage("assets/gameover.png");
    restartImg=loadImage("assets/restart.png");
}
function setup() {
   
    createCanvas(1600,800);
  
    // Background Sprite
    bg = createSprite(800,350,1600,800);
    bg .addImage(bgImg);
  
    // Groups
    alienGroup=new Group();
    laserGroup=new Group();
  
    // Sapceship Sprite
    ss=createSprite(50,350);
    ss.scale= 0.5
    ss.addImage(ssImg);
    ss.setCollider("rectangle",0,0,200,ss.height);
  
    // Edge Sprite
    edges=createEdgeSprites();
  
  }
  function draw (){
  background("black")
drawSprites()
fill("white")
textSize(30)
text("score :"+ score,50,50)
if(gameState==="play"){
if(keyDown(UP_ARROW)){
ss.y-=5
}
if(keyDown(DOWN_ARROW)){
    ss.y+=5
    }
ss.collide(edges[2])
ss.collide(edges[3])
if(keyDown(LEFT_ARROW)){
releaseLazer()
}
//spawnAliens()



}
if(gameState==="end"){

}


}
function releaseLazer(){
 lazer= createSprite( 100,ss.position.y,60,5)
 lazer.shapeColor="lime"
 lazer.velocityX=10
 lazer.lifetime=1600/10
 lazerGroup.add (lazer)

}

function spawnAliens(){
 if(frameCount%150===0){
var rnd= Math.round(random(100,700))
alien= createSprite(1600,rnd)
alien.velocityX=-4
 }   
}






