'use strict';

class Game{
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.enemies = [];
    this.gameOver = false;
  };


  startLoop() {

    this.player = new Player(this.canvas);
    const x = Math.random() * this.canvas.width;
    this.enemies.push(new Enemy(this.canvas, x));
    const loop = () => {
      /*
      if(Math.random() > 0.99) {
        const x = Math.random() * this.canvas.width;
        this.enemies.push(new Enemy(this.canvas, x));
      };
      */
      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      if(!this.gameOver) {
        window.requestAnimationFrame(loop);
      };
    };

    window.requestAnimationFrame(loop);
  };

  updateCanvas() {
    this.player.update();
    this.enemies.forEach((enemy) => {
      enemy.update();
    });
  };

  clearCanvas() {
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  };

  drawCanvas() {
    this.player.draw();
    this.enemies.forEach((enemy) => {
      enemy.draw();
    });
  };
  
  checkAllCollisions() {
    this.player.checkScreen();
    this.enemies.forEach((enemy) =>{
      if (this.player.checkCollisionEnemy(enemy) || enemy.checkImpact() === true) {
        this.gameOver = true;
        this.onGameOver();
      };
    });
    /*this.enemies.forEach((enemy) => {
      if (enemy.checkImpact() === true) {
        this.gameOver = true;
        this.onGameOver();
      }
    })*/
  }
  
  gameOverCallback(callback) {
    this.onGameOver = callback;
  }

};