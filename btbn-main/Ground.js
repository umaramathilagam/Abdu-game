class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,880,900,40,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill("brown");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,40);
    }
}