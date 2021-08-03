class Monster extends BaseClass {
  constructor(x, y,width,height,type){
    var options = {
      friction:0.3,
      density:0.3,
      restitution: 0.8
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
  }

 display(){
  //  console.log(this.body.speed);
    super.display();
  //  if(this.body.speed < 10){
    
  //  }
  //  else{
  //    World.remove(world, this.body);
  //    push();
  //    this.Visiblity = this.Visiblity - 5;
  //    tint(255,this.Visiblity);
  //    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
  //    pop();
  //  }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};