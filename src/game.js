'use strict';

class Game{
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.enemies = [];
    this.gameOver = false;
    this.shoots = [];
    this.score = 0;
    this.lives = 3;
  };


  startLoop() {
    this.player = new Player(this.canvas, this.lives);
    
    const loop = () => {
            
      if(Math.random() > 0.99) {
        const x = Math.random() * this.canvas.width;
          if (x > 50 && x < this.canvas.width-50) {
          if (this.score <= 10) {
            this.enemies.push(new Enemy(this.canvas, x, 3));
          } else if (this.score >= 10 && this.score <= 20) {
            this.enemies.push(new Enemy(this.canvas, x, 5)); 
          } else if (this.score > 20) {
            this.enemies.push(new Enemy(this.canvas, x, 7)); 
          }
        }
      }

        
      this.updateScore();
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

  drawCanvas() {
    this.player.draw();
    this.enemies.forEach((enemy) => {
      enemy.draw();
    });
    this.shoots.forEach((shoot) => {
      shoot.draw();
    })
  };
  
  updateCanvas() {
    this.player.update();
    this.enemies.forEach((enemy) => {
      enemy.update();
    });
    this.shoots.forEach((shoot) => {
      shoot.update();
    });
    this.shoots.forEach((shoot) =>{
      if (shoot.outCanvasShoot()) {
        this.shoots.splice(this.shoots.indexOf(shoot), 1);
      };
    });
  };

  clearCanvas() {
    this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
  };


  checkAllCollisions() {
    this.player.checkScreen();
    
    this.enemies.forEach((enemy) =>{
      if (this.player.checkCollisionEnemy(enemy)) {
        this.player.loseLive();
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
        if (this.player.lives === 0) {
          this.gameOver = true;
          this.onGameOver();
        }
      }
    });

    this.enemies.forEach((enemy) => {
      if (enemy.checkImpact()) {
        this.player.loseLive();
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
        if (this.player.lives === 0) {
          this.gameOver = true;
          this.onGameOver(this.score);
        }
      }
    });

    this.enemies.forEach((enemy) =>{
      this.shoots.forEach((shoot) => {
        if (shoot.checkShootEnemy(enemy)){
          this.enemies.splice(this.enemies.indexOf(enemy), 1);
          this.shoots.splice(this.shoots.indexOf(shoot), 1);
          this.score += 1;
        } 
      })
    })  
  }
  
  gameOverCallback(callback) {
    this.onGameOver = callback;
  }

  gameUpdateScore(callback) {
    this.updateScore = callback
  }
  
};