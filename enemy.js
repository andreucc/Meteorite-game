'use strict';

class Enemy {
  constructor(canvas, x) {
    this.size = 20;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = 0;
    this.speed = 5;
    this.direction = 1;
  };

  update() {
    this.y = this.y + this.direction * this.speed;
  };

  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y - this.size / 2, this.size, this.size);
  };

  checkImpact() {
    if (this.y > this.canvas.height + this.size) {
      return true;
    }
  }
}