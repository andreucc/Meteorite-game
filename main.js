'use strict';

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
      <button>Start</button>
    </section>
    `);

    const startButton = document.querySelector('button');
    startButton.addEventListener('click', buildGameScreen);
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

  
  
  
  
  
  }


  const buildGameOverScreen = () => {
    const GameOverScreen = buildDom(`
    <section class="game-over-screen>
      <p>You fail and the city is destroyed, your defender score is XXX</p>  
      <button>Play Again</button>
    </section>
    `);
  
    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click', buildGameScreen);
  };
   
  buildSplashScreen();
};  

window.addEventListener('load', main);