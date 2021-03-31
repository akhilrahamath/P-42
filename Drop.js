class Drop{
    constructor(x,y,r){
      var options={
        isStatic:false
      }  

      this.rain=Bodies.circle(x,y,r,options);
      this.r=r;
      World.add(world,this.rain);

    }

     display(){
      var pos=this.rain.position;
      var angle=this.rain.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      noStroke();
      fill("blue");
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
    }

    updateY(){     
      if(this.rain.position.y > height){
          Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
      }
  }

   showDrop(){
      fill("blue")
      ellipseMode(CENTER);
      ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
  }

    