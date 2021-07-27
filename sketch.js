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
var gameLevel=1;
var gameScore=0;

function preload() {
    backgroundImg = loadImage(bg);
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    Monster1 = new Monster(350,10,50,50,1);
    Monster2 = new Monster(500,30,50,50,2);
    Monster3 = new Monster(650,50,50,50,1);
    Monster4 = new Monster(800,5,50,50,2);
    Monster5 = new Monster(850,0,50,50,1);
    Monster6 = new Monster(1000,100,149,150,6);
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
            Monster1.display();
            Monster1.score();
        break;
        case 2: 
            Monster1.display();
            Monster2.display();
            Monster1.score();
            Monster2.score();
        break;
        case 3: 
            Monster1.display();
            Monster2.display();
            Monster3.display();
            Monster1.score();
            Monster2.score();
            Monster3.score();
        break;
        case 4: 
            Monster1.display();
            Monster2.display();
            Monster3.display();
            Monster4.display();
            Monster1.score();
            Monster2.score();
            Monster3.score();
            Monster4.score();
            
        break;
        case 5: 
        
            Monster1.display();
            Monster2.display();
            Monster3.display();
            Monster4.display();
            Monster5.display();
            Monster1.score();
            Monster2.score();
            Monster3.score();
            Monster4.score();
            Monster5.score();
        break;
        case 6: 
            Monster1.display();
            Monster2.display();
            Monster3.display();
            Monster4.display();
            Monster5.display();
            Monster6.display();
            Monster1.score();
            Monster2.score();
            Monster3.score();
            Monster4.score();
            Monster5.score();
            Monster6.score();
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