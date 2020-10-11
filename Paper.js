class Paper {
    constructor(x,y,radius) {
      var options = {
          'isStatic' :false,
          'restitution':0.2,
          'friction':10.3,
          'density':1.2,
         
      }
      this.body = Bodies.circle(x, y, 10, options);
      this.width = 50;
      this.height = 50;
      this.radius = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //pos.x = mouseX;
      //pos.y = mouseY;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      //rectMode(CENTER);
      fill("green");
     stroke("green");
      circle(0, 0, this.radius);
      pop();
    }
  };
