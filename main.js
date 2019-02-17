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
      <h1>Meteorite Game</h1>
      <h3>Save the city.. or not</h3>
      <div class="player-name">
            <input type="text" placeholder="Player's Name"></input>
      </div>
      <button>Start</button>
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
      <section class="game-screen">
        <canvas></canvas>
      </section>
    `);

    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);
     /*comprovar que agafa nom be, i comença joc
    console.log(name);*/
  
    const game = new Game(canvasElement);
    game.gameOverCallback(buildGameOver);

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

  const buildGameOver = () => {
    const gameOverScreen = buildDom(`
      <section class="game-over">
        <h1>You fail and the city is destroyed</h1>
        <button id="cd">Try it Again</button>  
      </section>
    `);

  
    const restartButton = document.querySelector('button');  
    restartButton.addEventListener('click', buildGameScreen);
  }

  buildSplashScreen();
};  


window.addEventListener('load', main);