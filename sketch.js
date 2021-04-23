//Create variables here
var  dog, happyDog, database, foodS, foodStock;
function preload()
{
	//load images here
  dog1=loadImage("images/dogImg.png")
  happyDog= loadImage("images/happydog.png")
}

function setup() {
  database=firebase.database()
	createCanvas(500, 500);
  dog=createSprite(250,200,10,10);
  dog.addImage(dog1)
  dog.scale=0.2
  
  foodStock= database.ref('Food').on("value",readStock)
}


function draw() {  
background(46, 139, 87)
  drawSprites();
  //add styles here
if(keyWentDown("up")){
  writeStock(foodS)
dog.addImage(happyDog)
}
 textSize(20)
 fill("pink")
 stroke("yellow")
 text("Food left : "+foodS,300,50)
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0
}else{
  x=x-1
}
database.ref('/').update({
  Food:x
})
}
