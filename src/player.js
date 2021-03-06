'use strict';

class Player{
  constructor(canvas, lives) {
    this.size = 100;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width/2;
    this.y = this.canvas.height-this.size;
    this.speed = 15;
    this.direction = 0;
    this.lives = lives;
    this.imagePlayer = new Image();
    this.imagePlayer.src = './images/spaceship.png';
  }

  update() {
    this.x = this.x + this.direction * this.speed;
  };

  draw() {
    this.ctx.drawImage(this.imagePlayer, this.x, this.y, this.size, this.size)
  }

  setDirection(direction) {
    this.direction = direction;
  }

  checkScreen() {
    if (this.x <= 0){
      this.x = this.x + this.size/4;
    } else if (this.x +this.speed+this.size/1.5 >= this.canvas.width) {
      this.x = this.x - this.size/4;
    }
  };

  shoot () {
    return new Shoot(this.canvas, this.x+this.size/2, this.y); 
  }  

  checkCollisionEnemy(enemy) {
    const collideRight = this.x + this.size / 2 > enemy.x - enemy.size/ 10;
    const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size/ 10;
    const collideTop = this.y - this.size / 2 < enemy.y + enemy.size / 10;
    const collideBottom = this.y + this.size / 2 > enemy.y - enemy.size / 10;

    if(collideRight && collideLeft && collideTop && collideBottom) {
      return true;
    }
    return false;
  }

  loseLive () {
    this.lives--;
  }
};



