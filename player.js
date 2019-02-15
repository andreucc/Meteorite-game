'use strict';

class Player{
  constructor(canvas) {
    this.size = 20;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = this.canvas.width/2;
    this.y = this.canvas.height-this.size;
    this.speed = 5;
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
    if (this.x - this.size/2 <= 0) {
      this.direction = 1;
    } else if (this.x + this.size/2 >= this.canvas.width) {
      this.direction = -1;
    };
  };

  checkCollisionEnemy(enemy) {
    const collideRight = this.x + this.size / 2 > enemy.x - enemy.size/ 2;
    const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size/ 2;
    const collideTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
    const collideBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;

    if(collideRight && collideLeft && collideTop && collideBottom) {
      return true;
    }
    return false;
  }
};



