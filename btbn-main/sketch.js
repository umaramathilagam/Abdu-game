const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Composite = Matter.Composite
var Common = Matter.Common;
var engine, world;
var ball;
var polygon_img;
var bg;
var base;



function preload(){
  polygon_img = loadImage("img/polygon.png");
  bg = loadImage("img/bg.jpg");
}

function setup() {
  createCanvas(700,900);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  base = new Block(325,845,550,30);
  
  //level one
  block1 = new Box(100,275,100,50);
  block2 = new Box(325,275,350,50);
  block3 = new Box(550,275,100,50);
  block4 = new Box(75,250,50,100);
  block5 = new Box(125,250,50,100);
  block6 = new Box(525,200,50,100);
  block7 = new Box(575,200,50,100);
  block8 = new Box(325,200,150,50);
  block9 = new Box(325,200,150,50);
  block10 = new Box(200,200,100,100);
  block11 = new Box(450,200,100,100);
  block12 = new Box(325,175,550,50);
  
  r1 = new test (575,100,20,30);



  


 // block5 = new Block(420,275,30,40);
 // block6 = new Block(450,275,30,40);
 // block7 = new Block(480,275,30,40);
  //level two
 // block8 = new Block(330,235,30,40);
 // block9 = new Block(360,235,30,40);
 // block10 = new Block(390,235,30,40);
 // block11 = new Block(420,235,30,40);
 // block12 = new Block(450,235,30,40);
  //level three
 // block13 = new Block(360,195,30,40);
 // block14 = new Block(390,195,30,40);
 // block15 = new Block(420,195,30,40);
  //top
 // block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  //blocks1 = new Block(640,175,30,40);
  //blocks2 = new Block(670,175,30,40);
  //blocks3 = new Block(700,175,30,40);
  //blocks4 = new Block(730,175,30,40);
  //blocks5 = new Block(760,175,30,40);
  //level two
  //blocks6 = new Block(670,135,30,40);
  //blocks7 = new Block(700,135,30,40);
  //blocks8 = new Block(730,135,30,40);
  //top
  //blocks9 = new Block(700,95,30,40);

 // ball holder with slings
  ball = Bodies.circle(325,100,40); 
  World.add(world,ball);

  
}
function draw() {
  background(bg); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  
  
  ground.display();

  fill("yellow");
  base.display();

  fill("blue");
  block1.display();
  fill("green");
  block2.display();
  fill("blue");
   block3.display();
  fill("#F70FE8");
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  fill("red");
  block10.display();
  block11.display();
  fill("#FE6F20");
  block12.display();
  fill("#F70FE8");

  r1.display();
  
  //triangle1.display();
 // block15.display();
 // block16.display();


 // blocks1.display();
 // blocks2.display();
 // blocks3.display();
 // blocks4.display();
 // blocks5.display();
  //blocks6.display();
  //blocks7.display();
  //blocks8.display();
  //blocks9.display();
 
 strokeWeight(4);
 stroke("black");
 imageMode(CENTER)
 image(polygon_img ,ball.position.x,ball.position.y,100,100);
 


}