var canvas;
var music;
var box1,box2,box3,box4,box5,player;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    player = createSprite(random(20,750))
      player.shapeColor = ("white")
      player.velocityY = 5
      player.velocityX = 5
      player.scale = 0.3
      

    box1 = createSprite(715,585,150,20)
      box1.shapeColor = ("blue")
      

    box2 = createSprite(550,585,150,20)
      box2.shapeColor = ("red")
    
    box3 = createSprite(385,585,150,20)
      box3.shapeColor = ("yellow")
    
    box4 = createSprite(220,585,150,20)
      box4.shapeColor = ("purple")

    box5 = createSprite(55,585,150,20) 
      box5.shapeColor = ("green")

    edges = createSprite(805,300,20,800)
      edges.shapeColor = (0)

    edges2 = createSprite(-5,300,20,800)
      edges2.shapeColor = (0)
      
    edges3 = createSprite(400,-5,800,20)
      edges3.shapeColor = (0)

   
}
 
function draw() {
    background(0);
   
   if (player.isTouching(box1)){
     player.bounceOff(box1)
     player.shapeColor = ("blue")
     music.play();
   }
    
   if (player.isTouching(box2)){
     player.bounceOff(box2)
     player.shapeColor = ("red")
     music.play();
   }
    
   if(player.isTouching(box3)){
     player.shapeColor = ("yellow")
     player.velocityX = 0
     player.velocityY = 0
     music.stop()
   } 
   
   if(player.isTouching(box4)){
     player.bounceOff(box4)
     player.shapeColor = ("purple")
     music.play();
   }

   if(player.isTouching(box5)){
     player.bounceOff(box5)
     player.shapeColor = ("green")
     music.play();
   }

   if(player.isTouching(edges)){
     player.bounceOff(edges)
   }

   if(player.isTouching(edges2)){
     player.bounceOff(edges2)
   }

   if(player.isTouching(edges3)){
     player.bounceOff(edges3)
   }
    drawSprites();
    
}
