class Monster extends BaseClass {
  constructor(x, y,width,height,type){
    var options = {
      friction:0.2,
      density:0.03,
      restitution: 1
  }
  
  super(x,y,width,height);
    if(type===1){
      this.image = loadImage("sprites/Monster1.png");
    }
    if(type===2){
      this.image = loadImage("sprites/Monster2.png");
    }
    if(type===6){
     this.image = loadImage("sprites/BossMonster.png");
  
    }
    this.Visiblity = 255;
    this.body.velocity.x=0;
    this.body.velocity.y=0;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    // this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
   
  }

 display(){
  super.display();
  if(this.body.speed <10){
    
    this.Visibility = 255;
   }
   else{
     //World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity -1;
    tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1){
      score = score+1;
    }
  }

  
  





};