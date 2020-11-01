class Log {
    constructor(x,y,width,angle){
  var options = {restitution : 0.8,friction : 0.3, density : 1}
  
  this.body = Bodies.rectangle(x,y,width,20,options);
  World.add(world,this.body);
  this.w = width;
  this.h = 20;
  Matter.Body.setAngle(this.body,angle)   
    }
    display(){
  var pos = this.body.position;
  var angle = this.body.angle;
 
  push (); 
  translate(pos.x,pos.y);
  rotate (angle);
  strokeWeight(4)
  stroke("gold");
  fill("gold");
  rectMode(CENTER);
  rect(0,0,this.w,this.h);
  pop();
    }
  }