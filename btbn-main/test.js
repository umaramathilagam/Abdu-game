class test {
  constructor(x, y, width, height) {

    var options = {
      
      'isStaic':true
      
  }

  var vert = [
  {x : 100 , y : 10},
  {x : 100 , y : 190},
  {x : 140 , y : 190},
  {x : 140 , y : 50},
  {x : 300 , y : 50},
  {x : 300 , y : 10},
  {x : 100 , y : 10}
]
     this.body = Bodies.fromVertices(100,10,vert,options);

    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    console.log(pos);
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    stroke("black");
    beginShape();
    vertex(100, 10);
    vertex(100, 190);
    vertex(140, 190);
    vertex(140, 50);
    vertex(300, 50);
    vertex(300, 10);
    vertex(100, 10);
    
    
   
    endShape(CLOSE);
    
    strokeWeight(3);

    //rect(0, 0, this.width, this.height);
    pop();
  }
};
