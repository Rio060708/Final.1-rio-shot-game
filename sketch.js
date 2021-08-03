const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var arrow, slingshot;

var gameState = "onSling";

var bg = "sprites/back.png";
var score = 0;
var gameLevel=4;
var gameScore=0;
var monster=[];

function preload() {
    backgroundImg = loadImage(bg);
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    monster[0] = new Monster(300,10,50,50,1);
    monster[1] = new Monster(500,10,50,50,1);
    monster[2] = new Monster(600,30,50,50,2);
    monster[3] = new Monster(550,10,50,50,1);
    monster[4] = new Monster(500,30,50,50,2);
    monster[5] = new Monster(850,0,50,50,1);
    monster[6] = new Monster(300,10,50,50,1)
    monster[7] = new Monster(500,30,50,50,2);
    monster[8] = new Monster(700,0,50,50,1);
    monster[9] = new Monster(850,0,50,50,2);
    monster[10] = new Monster(1000,100,149,150,6);

    ground = new Ground(600,height,1200,20);
    platform = new Ground(600,height,1200,20);

    arrow = new Arrow(200,250);
    slingshot = new Bow(arrow.body,{x:150, y:250});
}

function draw(){
   
    if(backgroundImg)
        background(backgroundImg);
        noStroke();
        textSize(25);
        fill("white");
        text("Score  " + score, width-300, 50);
        text("Level  " + gameLevel, width-300, 100);
    
    Engine.update(engine);
    //strokeWeight(4);
  
    ground.display();
    switch (gameLevel){
        case 1: 
            monster[0].display();
            monster[0].score();
        break;
        case 2: 
        monster[1].display();
        monster[1].score();
        monster[2].display();
        monster[2].score();
           
        break;
        case 3: 
        monster[4].display();
        monster[4].score();
        monster[5].display();
        monster[5].score();
        monster[6].display();
        monster[6].score();
        break;
        case 4: 
        monster[7].display();
        monster[7].score();
        monster[8].display();
        monster[8].score();
        monster[9].display();
        monster[9].score();
        monster[10].display();
        monster[10].score();
            
        break;
       
        }
    
    arrow.display();
    platform.display();
    slingshot.display();

    if(gameLevel===1 && score===1){
    
        nextLevel();
        
    }
       
  else if(gameLevel===2 && score === 2){
        nextLevel();
        
    }

    else if(gameLevel===3 && score === 3){
        nextLevel();
        
    }
    else if(gameLevel===4 && score === 4){
        nextLevel();
        
    }
    else if(gameLevel===5 && score === 5){
        nextLevel();
        
    }
    else if(gameLevel===6 && score === 6){
        nextLevel();
        
    }
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       arrow.trajectory = [];
       Matter.Body.setPosition(arrow.body,{x:200, y:50});
       slingshot.attach(arrow.body);
       Monster6.display();
    }
}

function nextLevel(){
    gameLevel = gameLevel + 1;
    arrow.trajectory = [];
        Matter.Body.setPosition(arrow.body,{x:200, y:50});
        slingshot.attach(arrow.body);
        gameScore += gameLevel*10;
}