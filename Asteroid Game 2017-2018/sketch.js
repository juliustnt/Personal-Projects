/*
* @juliustnt
* 
*/
let ship, temp1, asteroids, temp2, bullets, blip;
let margin = 40;

function preload() {
  temp1 = loadImage("x-wing.png");
  temp2 = loadImage("laser.png");
  blip = loadSound("Xwing.mp3");
  blip2 = loadSound("Boom.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  ship = createSprite(width / 2, height / 2);
  ship.addImage("normal", temp1);
  ship.setCollider("circle", 0, 0, 400);
  ship.debug = false;
  ship.scale = 0.1;
  ship.maxSpeed = 6; //SIZE OF SHIP
  ship.friction = 0.98;

  asteroids = new Group;
  bullets = new Group;

  for (let i = 0; i < 10; i++) {

    //   let s = createSprite(random(width), random(height));
    //   s.setSpeed(random(3, 5), random(360));
    //   asteroids.add(s);
    // }

    let px = random(width);
    let py = random(height);

    createAsteroid(3, px, py);
  }
}

function draw() {
  background(50);

  fill(255, 0, 255);
  textAlign(CENTER);
  text("Controls: Arrow Keys + X", width / 2, 20);

  for (let i = 0; i < allSprites.length; i++) {
    let s = allSprites[i];

    if (s.position.x > width + margin) {
      s.position.x = -margin;
    }

    if (s.position.x < -margin) {
      s.position.x = width + margin;
    }
    if (s.position.y > height + margin) {
      s.position.y = -margin;
    }

    if (s.position.y < -margin) {
      s.position.y = height + margin;
    }
  }

  if (keyDown(LEFT_ARROW)) {
    ship.rotation = ship.rotation - 4;
  }

  if (keyDown(RIGHT_ARROW)) {
    ship.rotation = ship.rotation + 4;
  }

  if (keyDown(UP_ARROW)) {
    ship.addSpeed(0.2, ship.rotation - 90);

  } else {
    ship.changeAnimation("normal");
  }

  if (keyWentDown("e")) {
    blip.play();
    let b = createSprite(ship.position.x -30, ship.position.y);
    b.addImage(temp2)
    b.scale = 0.05;
    b.rotation = ship.rotation
    b.setSpeed(ship.getSpeed() + 15, ship.rotation - 90);
    b.life = 20;
    bullets.add(b);
    let b2 = createSprite(ship.position.x + 30, ship.position.y);
    b2.addImage(temp2)
    b2.scale = 0.05;
    b2.rotation = ship.rotation
    b2.setSpeed(ship.getSpeed() + 15, ship.rotation - 90);
    b2.life = 20;
    bullets.add(b2);
    let b3 = createSprite(ship.position.x -35, ship.position.y);
    b3.addImage(temp2)
    b3.scale = 0.05;
    b3.rotation = ship.rotation
    b3.setSpeed(ship.getSpeed() + 15, ship.rotation - 90);
    b3.life = 20;
    bullets.add(b3);
    let b4 = createSprite(ship.position.x + 35, ship.position.y);
    b4.addImage(temp2)
    b4.scale = 0.05;
    b4.rotation = ship.rotation
    b4.setSpeed(ship.getSpeed() + 15, ship.rotation - 90);
    b4.life = 20;
    bullets.add(b4);
  }



  if (keyWentDown("x")) {
    blip.play();
    let b = createSprite(ship.position.x , ship.position.y);
    b.addImage(temp2)
    b.scale = 0.05;
    b.rotation = ship.rotation
    b.setSpeed(ship.getSpeed() + 15, ship.rotation - 90);
    b.life = 50;
    bullets.add(b);
  }


  asteroids.overlap(bullets, asteroidHit);
  ship.bounce(asteroids);

  drawSprites();



}

function createAsteroid(type, x, y) {
  let a = createSprite(x, y);
  let img = loadImage("asteroid" + floor(random(1, 5)) +
    ".png");
  a.addImage(img);
  a.setSpeed(2.5 - type / 2, random(0, 360));
  a.rotationSpeed = random(-0.5, 0.5);
  a.debug = false;
  a.type = type;



if(type == 3){
    a.scale = 0.5;
  }
  if(type == 2){
    a.scale = 0.25;
}
if(type == 1){
  a.scale = 0.05;
}

a.mass = 2 + a.scale;
a.setCollider("circle", 0, 0, 80);
asteroids.add(a);




}


  function asteroidHit(asteroid, bullet){
    let newType = asteroid.type - 1;

    if(newType > 0){
      createAsteroid(newType, asteroid.position.x, asteroid.position.y);
      createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    }

    bullet.remove();
    asteroid.remove();
  }





function asteroidHit(asteroid, bullet){
  let newType = asteroid.type - 1;
  let img = loadImage("asteroid" + floor(random(1, 5)) +
    ".png");
  blip2.play();


  if(newType > 0){
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
    createAsteroid(newType, asteroid.position.x, asteroid.position.y);
  }

  bullet.remove();
  asteroid.remove();
  if(asteroids.length == 0) {
    for (let i = 0; i < 10; i++) {
      let px = random(width);
      let py = random(height);
      createAsteroid(3, px, py);
    }
  }
}