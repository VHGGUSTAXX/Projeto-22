var starImg,bgImg;
var star, starBody;
var fada;
var imgFada;
var vozFada;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    imgFada = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

    vozFada = loadSound("sound/JoyMusic.mp3");

    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    vozFada.play();

    fada = createSprite(100,600);
    fada.scale = 0.2
    fada.addAnimation("fadavoando",imgFada);
    

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}

function draw(){
    background(bgImg);
    drawSprites();
    star.x = starBody.position.x;
    star.y = starBody.position.y;


    if(keyDown("A")){
        fada.x = fada.x -10;
    }

    if(keyDown("D")){
        fada.x = fada.x +10;
    }

    if(keyDown("S")){
        Matter.Body.setStatic(starBody,false);
    }


    if(star.y > 530 && starBody.position.y > 530){
        Matter.Body.setStatic(starBody,true);
    }
}