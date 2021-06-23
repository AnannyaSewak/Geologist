const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber;
var rubber;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer (10,100);
    rubber = new Rubber (350,100,30);
    iron = new Iron (600,200,50,50)
  

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    plane.display();
    hammer.display();
    rubber.display("darkblue");
    iron.display()

    
 
}
