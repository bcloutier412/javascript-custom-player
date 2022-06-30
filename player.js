/*
    @desc: Constructor Function to create body parts that inherits x and y from player
*/
function BodyPart(x, y, width, height, color, offsetX, offsetY, inheritObject) {
  this.inheritObject = inheritObject
  this.offsetX = offsetX
  this.offsetY = offsetY
  this.x = x + offsetX;
  this.y = y + offsetY;
  this.width = width;
  this.height = height;
  this.color = color;
}

/*
    @desc: Method to draw the object to the screen
*/
BodyPart.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

/*
    @desc: Iterates through the player.bodypart array,
    uses the bodypart.draw() method
*/
function drawAllbodyParts() {
  for (let i = 0; i < player.bodyparts.length; i++) {
    player.bodyparts[i].draw(); 
  }
}

/*
    @Player
    
*/
//player function constructor
function createPlayer() {
  this.x = 155
  this.y = 200
  this.head = new BodyPart(this.x, this.y, 50, 50, "#ffb4a2", 0, 0, this);
  this.rightEye = new BodyPart(this.head.x, this.head.y, 10, 10, "white", 7, 10, this.head);
  this.rightEyePupil = new BodyPart(this.rightEye.x, this.rightEye.y, 5, 5, "black", 3, 3, this.rightEye);
  this.leftEye = new BodyPart(this.head.x, this.head.y, 10, 10, "white", 33, 10, this.head);
  this.leftEyePupil = new BodyPart(this.leftEye.x, this.leftEye.y, 5, 5, "black", 3, 3, this.leftEye);
  this.topNose = new BodyPart(this.head.x, this.head.y, 4, 5, '#e5989b', 23, 25, this.head);
  this.bottomNose = new BodyPart(this.head.x, this.head.y, 8, 3, '#e5989b', 23, 25, this.head);
  this.mouth = new BodyPart(this.head.x, this.head.y, 30, 5, 'black', 10, 35, this.head);
  this.shoulders = new BodyPart(this.x, this.y, 100, 10, '#11bb69', -25, 55, this);
  this.leftArm = new BodyPart(this.x, this.y, 10, 70, 'black', -25, 55, this);
  this.rightArm = new BodyPart(this.x, this.y, 10, 70, 'black', 65, 55, this);
  this.torso = new BodyPart(this.x, this.y, 10, 80, '#11bb69', 20, 55, this)
  this.chest = new BodyPart(this.torso.x, this.torso.y, 45, 40, '#11bb69', -17.5, 7, this.torso)
  this.waist = new BodyPart(this.torso.x, this.torso.y, 30, 10, '#11bb69', -10, 70, this.torso)
  this.reporductiveOrgan = new BodyPart(this.torso.x, this.torso.y, 20, 4, '#ff97c4', 2, 72, this.torso)
  this.balls = new BodyPart(this.torso.x, this.torso.y, 10, 10, '#ff97c4', 2, 72, this.torso)
  this.leftLeg = new BodyPart(this.torso.x, this.waist.y, 10, 50, 'black', -10, 80, this.torso)
  this.rightLeg = new BodyPart(this.torso.x, this.waist.y, 10, 50, 'black', 10, 80, this.torso)
  this.width = 300
  this.height = 300
  this.xspeed = 0;
  this.yspeed = 0;
  this.friction = 0.6;
  this.maxSpeed = 10;
  this.width = 50;
  this.height = 200;
  this.active = true;
  this.isJumping = false;
  this.bodyparts = [this.head, this.rightEye, this.rightEyePupil, this.leftEye, this.leftEyePupil,this.topNose, 
    this.bottomNose, this.mouth, this.leftArm, this.rightArm, this.shoulders, this.torso, this.chest, this.leftLeg, this.rightLeg, this.waist, this.reporductiveOrgan, this.balls]

  //movement
  this.step = function () {
    if (this.active) {
      //Horizontal Movement
      if (!leftKey && !rightKey || leftKey && rightKey) {
        //Slow Down
        this.xspeed *= this.friction;
      } else if (rightKey) {
        //Move right
        this.xspeed++;
      } else if (leftKey) {
        //Move left
        this.xspeed--;
      }

      //Veritcal Movement
      if (upKey) {
        //Check if on ground
        if (!this.isJumping) {
          this.yspeed -= 20;
          this.isJumping = true;
        }

      }

      //Apply gravity
      this.yspeed += 1;

      //Correct Speed
      if (this.xspeed > this.maxSpeed) {
        this.xspeed = this.maxSpeed
      }
      else if (this.xspeed < -this.maxSpeed) {
        this.xspeed = -this.maxSpeed
      }
      this.x += this.xspeed;
      this.y += this.yspeed;
      if (this.yspeed > this.maxSpeed) {
        this.yspeed = this.maxSpeed
      }
      else if (this.yspeed < -this.maxSpeed) {
        this.yspeed = -this.maxSpeed
      }

      //Collision with window borders
      if (this.y > screenHeight - this.height) {
        this.y = screenHeight - this.height
        this.isJumping = false;
        this.yspeed = 0;
      }
      if (this.x - this.xspeed < 0) {
        this.x -= this.x;
        this.xspeed = 0
      } else if (this.x + this.xspeed > screenWidth - this.width) {
        this.x += (screenWidth - this.width) - this.x;
        this.xspeed = 0;
      } else {
        this.x += this.xspeed;
      }
      this.y += this.yspeed;
      // ctx.fillStyle = "red";
      // ctx.fillRect(this.x, this.y, 100, 100)
    }
  }
}
createPlayer.prototype.updateLocation = function() {
  for(let i = 0; i < this.bodyparts.length; i++) {
    let object = this.bodyparts[i]
    object.x = object.inheritObject.x + object.offsetX;
    object.y = object.inheritObject.y + object.offsetY;
  }
}

//player object
const player = new createPlayer()

//head
// const head = new BodyPart(player.x, player.y, 50, 50, "#ffb4a2", 0, 0);
// const rightEye = new BodyPart(head.x, head.y, 10, 10, "white", 7, 10);
// const rightEyePupil = new BodyPart(rightEye.x, rightEye.y, 5, 5, "black", 3, 3);
// const leftEye = new BodyPart(head.x, head.y, 10, 10, "white", 33, 10);
// const leftEyePupil = new BodyPart(leftEye.x, leftEye.y, 5, 5, "black", 3, 3);
// const topNose = new BodyPart(head.x, head.y, 4, 5, '#e5989b', 23, 25);
// const bottomNose = new BodyPart(head.x, head.y, 8, 3, '#e5989b', 23, 25);
// const mouth = new BodyPart(head.x, head.y, 30, 5, 'black', 10, 35);

// //body
// const shoulders = new BodyPart(player.x, player.y, 100, 10, '#11bb69', -25, 55);
// const leftArm = new BodyPart(shoulders.x, shoulders.y, 10, 70, 'black', 7, 0);
// const rightArm = new BodyPart(shoulders.x, shoulders.y, 10, 70, 'black', 83, 0);
// const torso = new BodyPart(shoulders.x, shoulders.y, 10, 80, '#11bb69', 45, 0);
// const waist = new BodyPart(torso.x, torso.y, 25, 10, '#11bb69', -7.5, 7)

// //legs
// const leftLeg = new BodyPart(waist.x, waist.y, 10, 70, 'black', -.5, 0, waist)
// const rightLeg = new BodyPart(waist.x, waist.y, 10, 70, 'black', 15.5, 0, waist)

// player.bodyparts = [head
//   , rightEye, rightEyePupil, leftEye, leftEyePupil, topNose, bottomNose, mouth,
//   leftArm, rightArm, shoulders, torso,
//   leftLeg, rightLeg, waist];

console.log(player.bodyparts);
