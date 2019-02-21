class Shoot {
  constructor(canvas, x, y) {
    this.sizeX = 12.5;
    this.sizeY = 30;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.direction = -1;
    this.imageShoot = new Image();
    this.imageShoot.src = "./images/bomb.png"
  };

  update() {
    this.y = this.y + this.direction * this.speed;
  };

  draw() {
    this.ctx.drawImage(this.imageShoot, this.x-this.sizeX/2, this.y, this.sizeX, this.sizeY)
  };

  outCanvasShoot() {
    if (this.y < 0) {
      return true;
    }
  }

  checkShootEnemy(enemy) {
    const collideRight = this.x + this.sizeX > enemy.x;
    const collideLeft = this.x <= enemy.x + enemy.size;
    const collideTop = this.y <= enemy.y;
    const collideBottom = this.y + this.sizeY >= enemy.y - enemy.size;

    if(collideRight && collideLeft && collideTop && collideBottom) {
      return true;
    }
    return false;
  }

}