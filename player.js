'use strict';

class Player{
  constructor(canvas) {
    this.size = 50;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width/2;
    this.y = this.canvas.height-this.size;
    this.speed = 20;
    this.direction = 0;
  }

  update() {
    this.x = this.x + this.direction * this.speed;
  };

  draw() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x , this.y, this.size, this.size)
  }

  setDirection(direction) {
    this.direction = direction;
  }

  checkScreen() {
    if (this.x <= 0+this.speed){
      this.x = this.x + this.size/4;
    } else if (this.x +this.speed+this.size >= this.canvas.width) {
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
};



