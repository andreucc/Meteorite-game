class Shoot {
  constructor(canvas, x, y) {
    this.sizeX = 50;
    this.sizeY = 50;
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
    //this.ctx.fillStyle = 'black';
    //this.ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
    this.ctx.drawImage(this.imageShoot, this.x, this.y, this.sizeX, this.sizeY)
  };

  outCanvasShoot() {
    if (this.y < 0) {
      return true;
    }
  }

  checkShootEnemy(enemy) {
    const collideRight = this.x + this.sizeX / 2 > enemy.x - enemy.size/ 2;
    const collideLeft = this.x - this.sizeX / 2 < enemy.x + enemy.size/ 2;
    const collideTop = this.y - this.sizeY / 2 < enemy.y + enemy.size / 2;
    const collideBottom = this.y + this.sizeY / 2 > enemy.y - enemy.size / 2;

    if(collideRight && collideLeft && collideTop && collideBottom) {
      return true;
    }
    return false;
  }

}