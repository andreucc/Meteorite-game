# Nombre del Proyecto
Meteorite-game
## Descripción

Los meteoritos deben ser destruidos antes de llegar a la ciudad, cada meteorito que destruyas te da puntuación, y a medida que va pasando el tiempo caen mas meteoritos y mas deprisa.

## MVP - Tecnología (DOM - CANVAS)

Generar las 3 pantallas con DOM.

Y CANVAS para desarrollarel juego. En donde iran cayendo meteoritos, el jugador esta abajo disparando hacia arriba, y tiene que explotar los meteoritos antes de que caigan sobre la ciudad. Puntuación

## Backlog

- Los meteoritos grandes al ser disparados se dividen en trozos mas pequeños que tambien deben ser disparados.
- Musica // Sonido en colision
- En la pantalla de game over debe salir un historico de las puntuaciones mas altas


## Estructuras de Datos

Definicion de clases y métodos.

- Main.js: Generar con DOM la pantalla inicial, la pantalla del juego y la pantalla de GameOver --> Build DOM() // buildGameScreen() buildSplashScreen() buildGameOverScreen ()
- Game.js: Start() GameOver() enemies[], player 
- Player.js: PosicionX, PosicionY, DireccionDisparo, TamañoObjeto, Color // Update() Draw () Disparar() CheckearColision ()
- Enemy.js: PosicionX, PosicionY, DireccionCaida, Velocidad, TamañoObjeto // Update() Draw() Remove()

## States y States Transitions

Definicion del las transiciones del juego y del main.

- splashScreen --> Un textbox para introducir el nombre del jugador y un boton de start (Donde pasaremos a la gameScreen)
- gameScreen --> Pantalla del juego, fondo negro con una ciudad abajo, en medio una esfera/plataforma desde la que disparar y los meteoritos que van cayendo.
- gameoverScreen --> Un boton para volver a jugar (Volveremos a la gameScreen), un parrafo con tu puntuación

funciones de transicion.

## Task

- Crear estructura pantallas (DOM)
- Crear transiciones
- Crear player
- Crear enemigo
- Crear disparos del player
- Colsisiones bordes
- Movimiento enemigos
- Comportamiento colision disparo/enemigo 
- Crear CSS

## Links

### Trello

[Link url](https://trello.com)

### Git

Especificar las url del proyecto y del deploy

[Link Repositorio](http://github.com)

[Link Deploy](http://github.com)

### Slides.com

Especificar la url de la presentacion

[Link Slides.com](http://slides.com)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones

