const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  var canvas = createCanvas(1240,595);
    engine = Engine.create();
    world = engine.world;
  
  ground = new Ground(600,590,1300,20);
  ground1 = new Ground(593,455,300,10);
  ground2 = new Ground(1033,365,300,10);

  shooter = new Shooter(200,200,50,50);

  slingShot1 = new SlingShot(shooter.body,{x:100,y:200}) 

  block1 = new Block2(490,425,30,40);
  block2 = new Block2(540,425,30,40);
  block3 = new Block2(590,425,30,40);
  block4 = new Block2(640,425,30,40);
  block5 = new Block2(690,425,30,40);
  block6 = new Block1(540,375,30,40);
  block7 = new Block1(590,375,30,40);
  block8 = new Block1(640,375,30,40);
  block9 = new Block2(590,324,30,40);

  block10 = new Block1(930,335,30,40);
  block11 = new Block1(980,335,30,40);
  block12 = new Block1(1030,335,30,40);
  block13 = new Block1(1080,335,30,40);
  block14 = new Block1(1130,335,30,40);
  block15 = new Block2(980,285,30,40);
  block16 = new Block2(1030,285,30,40);
  block17 = new Block2(1080,285,30,40);
  block18 = new Block1(1030,234,30,40);

}

function draw() {
  background("lightblue");

 Engine.update(engine);
 
 ground.display();
 ground1.display();
 ground2.display();

 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();

 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();

 shooter.display();

 slingShot1.display();

 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
    slingShot1.fly();
    Matter.Body.applyForce(shooter.body, shooter.body.position,{x:85,y:-85})
  }
  function keyPressed(){
    if(keyCode==32){
        slingShot1.attach(shooter.body);
    }
}