/*
    @desc: Constructor Function to create body parts that inherits x and y from player
*/
function BodyPart(x, y, width, height, color, offsetX, offsetY) {
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
const player = {
    x: 155,
    y: 200,
    width: 300,
    height: 300,
  };
//head
const head = new BodyPart(player.x, player.y, 50, 50, "#ffb4a2", 0, 0);
const rightEye = new BodyPart(head.x, head.y, 10, 10, "white", 7, 10);
const rightEyePupil = new BodyPart(rightEye.x, rightEye.y, 5, 5, "black", 3, 3);
const leftEye = new BodyPart(head.x, head.y, 10, 10, "white", 33, 10);
const leftEyePupil = new BodyPart(leftEye.x, leftEye.y, 5, 5, "black", 3, 3);
const topNose = new BodyPart(head.x, head.y, 4, 5, '#e5989b', 23, 25)
const bottomNose = new BodyPart(head.x, head.y, 8, 3, '#e5989b', 23, 25)
const mouth = new BodyPart(head.x, head.y, 30, 5, 'black', 10, 35)

//body
const shoulders = new BodyPart(player.x, player.y, 100, 10, '#11bb69', -25, 55)
const leftArm = new BodyPart(shoulders.x, shoulders.y, 10, 70, 'black', 7, 0)
const rightArm = new BodyPart(shoulders.x, shoulders.y, 10, 70, 'black', 83, 0)
const torso = new BodyPart(shoulders.x, shoulders.y, 10, 80, '#11bb69', 45, 0)
const waist = new BodyPart(torso.x, torso.y, 25, 10, '#11bb69', -7.5, 70)

//legs
const leftLeg = new BodyPart(waist.x, waist.y, 10, 70, 'black', -.5, 0)
const rightLeg = new BodyPart(waist.x, waist.y, 10, 70, 'black', 15.5, 0)

player.bodyparts = [head, rightEye, rightEyePupil, leftEye, leftEyePupil, topNose, bottomNose, mouth, leftArm, rightArm, shoulders, torso, leftLeg, rightLeg, waist];

console.log(player.bodyparts);
