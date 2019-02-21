'use strict';

let name ="";

const main = () => {
  
  const buildDom = (html) => {
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplashScreen = () => {
    const splashScreen = buildDom(`
    <section class="splash-screen">
      <p class="title">METEORITE GAME</p>
      <div class="player-name">
      <p class="text"> CHOOSE YOUR NAME </p>
        <input type="text" placeholder="Player's Name"></input>
      </div>
      <button class="start">Start</button>
    </section>
    `);

    const startButton = document.querySelector('button');
    startButton.addEventListener('click', buildGameScreen);

    const input = document.querySelector('input');
    input.addEventListener('keyup', () => {
      name = username(input);  
    });

    function username (name) {
      return name.value;
    }


    addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        buildGameScreen();
      }
    });
  };

  const buildGameScreen = () => {
    const gameScreen = buildDom(`
      <header class="game-header"> 
        <div>
          <p>SCORE</p>
          <p id="score-player">00</p>
        </div>
        <div>
          <p>PLAYER</p>
          <p id="player-name">Anonymous</p>
        </div>
        <div>
          <p>LIVES</p>
          <p id="player-lives">00</p>
        </div>  
      </header>
        <section class="game-screen game">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <canvas></canvas>
          <audio autoplay loop>
            <source src="./sound/.mp3" type="audio/mpeg">
          </audio>
        </section>
      <footer class="game-footer">
      </footer>
    `);

    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;
    const playerNameShow = document.getElementById('player-name');
    playerNameShow.innerHTML = name;
    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    const game = new Game(canvasElement);
    game.gameOverCallback((score) => {
      buildGameOver(score);
    });

    game.gameUpdateScore(() => {
       const scorePlayerShow = document.getElementById('score-player');
       const playerLivesShow = document.getElementById('player-lives');
       playerLivesShow.innerHTML = game.player.lives;
       scorePlayerShow.innerHTML = game.score;
    });



    game.startLoop();
    
    const setPlayerDirectionMove = (event) => {
      if (event.code === 'ArrowRight') {
        game.player.setDirection(1);
      } else if (event.code === 'ArrowLeft') {
        game.player.setDirection(-1);
      }; 
    };

    const setPlatyerDirectionStop = (event) => {
      if (event.code === 'ArrowRight') {
        game.player.setDirection(0);
      } else if (event.code === 'ArrowLeft') {
        game.player.setDirection(0);
      };
    };

    const shooting = (event) => {
      if (event.code === 'KeyS') {
        return game.shoots.push(game.player.shoot());
      };
    };
    
    document.addEventListener('keypress', shooting)
    document.addEventListener('keydown', setPlayerDirectionMove);
    document.addEventListener('keyup', setPlatyerDirectionStop);
  };

  
  const buildGameOver = (scorePlayerShow) => {
    const gameOverScreen = buildDom(`
      <section class="game-over">
         <p class="title">GAME OVER</p>
          <div class="final">
            <span class="text"> YOUR SCORE IS: </span>
            <span class="text" id="finalScore">score</span>  
            </div> 
            <button class="replay">Try it Again</button>
            <div class="hallOfFame">
            <h3>HALL OF FAME</h3> 
            <ol>
              <li>LuckyRandom <span>36</span></li>
              <li>Anonymous <span>31</span></li>
              <li>Matias<span>28</span></li>
              <li>Andreu<span>21</span></li>
            </ol>
           </div> 
        </section>
    `);
    const defenderScore = document.getElementById('finalScore');
    defenderScore.innerHTML = scorePlayerShow;
  
    const restartButton = document.querySelector('button');  
    restartButton.addEventListener('click', buildGameScreen);
  }

  buildSplashScreen();
};  


window.addEventListener('load', main);

