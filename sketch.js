var car1, wall1;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random (55,90);
  weight = random (400,1500); 

  car1 = createSprite(50, 200, 50, 50);
  wall1 = createSprite(1500,200,40,200);
  wall1.shapeColor = color(80,80,80);
}

function draw() {
  background("white");
  
  

  car1.velocityX = speed;

  if (wall1.x - car1.x < (car1.width + wall1.width)/2) {
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if (deformation >180) {
      car1.shapeColor = "red";
    }

    if (deformation <180 && deformation > 100) {
      car1.shapeColor = "yellow";
    }

    if (deformation < 100) {
      car1.shapeColor = "green"
 }
  }


  drawSprites();
}