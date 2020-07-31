var wall,bullet;
var speed,weight,thickness,damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,10,50);
  bullet.shapeColor = color(255);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
}
function draw() 
{
  background(0,0,0);  

if(hasCollided(bullet, wall))
{
    bullet.velocityX = 0;
    //var damage = (0.5 * bulletWeight * bulletSpeed * bulletSpeed)/(wall.thickness * wall.thickness * wall.thickness);
    // Here I have substituted the formula above into numbers to test it, and it still didn't work, when I didn't have numbers, 
    //both the wall and the bullet moved so fast out of the screen. 
    damage = (0.5 * weight * speed* speed)/(thickness * thickness * thickness);

    
if(damage>10)
 { 
    wall.shapeColor=color(255,0,0);
 }
    
 if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }
}

  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge=Lbullet.x + Lbullet.width;
  wallLeftEdge=Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
  return true;
  }
  else 
  {
      return false;
  }

}