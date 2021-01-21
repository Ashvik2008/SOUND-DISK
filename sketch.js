var gameState = 0;
var visibility = 255;

function preload()
{
  logo_Img = loadImage("images/APP_LOGO.png");
  loading = loadAnimation("Load/0.png","Load/1.png","Load/2.png","Load/3.png","Load/4.png","Load/5.png","Load/6.png","Load/7.png","Load/8.png","Load/9.png","Load/9.png","Load/10.png","Load/11.png","Load/12.png","Load/13.png","Load/14.png","Load/15.png","Load/16.png","Load/17.png","Load/18.png","Load/19.png","Load/20.png","Load/21.png","Load/22.png","Load/23.png","Load/24.png","Load/25.png","Load/26.png","Load/27.png","Load/28.png","Load/29.png","Load/30.png",)
}

function setup()
{
  createCanvas(350,600);

  logo = createSprite(175,190,20,20);
  logo.addImage(logo_Img);
  logo.scale = 0.6;

  //creating the sprite for loading
  load = createSprite(175,530,20,20);
  load.addAnimation("loaded",loading);
  load.scale = 0.3
}
function draw()
{
  background(0);

  if(gameState === 0)
  {
    drawSprites();
  }

}


