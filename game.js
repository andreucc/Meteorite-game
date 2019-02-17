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
  };


  startLoop() {
    this.player = new Player(this.canvas);
    //const x = Math.random() * this.canvas.width;
   // this.enemies.push(new Enemy(this.canvas, x));
    
    const loop = () => {
        
      if(Math.random() > 0.99) {
        const x = Math.random() * this.canvas.width;
        this.enemies.push(new Enemy(this.canvas, x));
      };
      
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
    /* NOMES ES NECESSARI SI FICAM "VIDES" SINO ES GAMEOVER
    this.enemies.forEach((enemy) => {
     if (enemy.outCanvasEnemy()) {
      this.enemies.splice(this.enemies.indexOf(enemy), 1);
     }
    })*/
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
      if (this.player.checkCollisionEnemy(enemy)/* || enemy.checkImpact() === true*/) {
        this.gameOver = true;
        this.onGameOver();
      };
    });
    
    this.enemies.forEach((enemy) =>{
      this.shoots.forEach((shoot) => {
        if (shoot.checkShootEnemy(enemy)){
          this.enemies.splice(this.enemies.indexOf(enemy), 1);
          this.shoots.splice(this.shoots.indexOf(shoot), 1);
          this.score += 1;
          console.log(this.score)
        } 
      })
    })  
  }
  
  gameOverCallback(callback) {
    this.onGameOver = callback;
  }

};