class Shoot {
  constructor(canvas, x, y) {
    this.sizeX = 5;
    this.sizeY = 10;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.direction = -1;
  };

  update() {
    this.y = this.y + this.direction * this.speed;
  };

  draw() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
  };
/*
  outCanvas() {
    if (this.y > this.canvas.height -50) {
      return true;
    }
  }

  checkShootEnemy(enemy) {
    const collideRight = this.x + this.size / 2 > enemy.x - enemy.size/ 2;
    const collideLeft = this.x - this.size / 2 < enemy.x + enemy.size/ 2;
    const collideTop = this.y - this.size / 2 < enemy.y + enemy.size / 2;
    const collideBottom = this.y + this.size / 2 > enemy.y - enemy.size / 2;

    if(collideRight && collideLeft && collideTop && collideBottom) {
      return true;
    }
    return false;
  }*/
}