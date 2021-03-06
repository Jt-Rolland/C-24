const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1,bird;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(810,320);
    bird = new Bird(20,20);
    log1 = new Log(300,300,300,PI/3);
    box3 = new Box(700,280,70,70);
    box4 = new Box(920,280,70,70);
    log2 = new Log(810,270,300,PI);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    log1.display();

    ground.display();
    pig1.display();
    bird.display();
    box3.display();
    box4.display();
    log2.display();

}