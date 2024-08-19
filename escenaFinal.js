/* 
 * La clase `SceneEnd` extiende la clase base `Scene` y representa 
 * la escena final de un proyecto interactivo o juego. Esta escena 
 * puede mostrar un mensaje de agradecimiento y un botón para 
 * regresar al inicio del programa. Al heredar de `Scene`, esta clase 
 * sobrescribe métodos clave para definir su comportamiento específico.
 */
class EscenaFinal extends Escena {
    /* 
     * El constructor de `SceneEnd` llama al constructor de la clase 
     * base `Scene` usando `super()`. Luego, se inicializan los colores 
     * utilizados en la escena mediante el método `inicializar`, y se 
     * define un botón de regreso a la escena inicial. Este botón se 
     * coloca en el centro de la pantalla y está vinculado a la función 
     * `escena0`, que cambia la escena actual a la inicial (`Scene 0`).
     */
    constructor() {
        super();

        this.inicializar();

        function escena0() {
            transicionEscena.colocarEscena(0);
        }
        this.botones = [
            new Boton(width / 2, height / 2, 128, 128, transicionEscena.img_home, escena0)
        ];
    }

    /* 
     * El método `inicializar` define una paleta de colores que se 
     * utilizará en la escena final. Estos colores incluyen tonos de 
     * rosa, amarillo, púrpura, azul, rojo y blanco, proporcionando 
     * una variedad cromática para los elementos visuales de la escena.
     */
    inicializar() {
        this.colors = [
            color(255, 0, 110), //PINK
            color(255, 190, 11), //YELLOW
            color(131, 56, 236), //PURPLE
            color(58, 134, 255), //BLUE
            color(193, 0, 22), //RED
            color(231, 246, 248), //WHITE
        ];
    }

    /* 
     * El método `draw` se encarga de dibujar la escena final en la 
     * pantalla. En primer lugar, establece un fondo con un color 
     * púrpura (índice 2 de `this.colors`). Luego, dibuja un rectángulo 
     * de fondo y un mensaje de agradecimiento centrado en la pantalla. 
     * Finalmente, se dibuja un botón que permite al usuario volver a la 
     * escena inicial. Los elementos visuales, como el color del texto 
     * y el botón, se configuran utilizando los colores definidos en 
     * `inicializar`.
     */
    draw() {
        background(this.colors[2]);

        push();
        noStroke();
        fill(30);
        rect(30, 30, width - 55, height - 55);
        textSize(36);
        fill(this.colors[1]);
        textAlign(CENTER);
        text('¡Gracias por usar el programa! Esperamos que te haya gustado.', width / 2, height / 2 - 200);
        pop();

        fill(this.colors[4]);
        line(width, height, 100, 50);

        for (let b of this.botones) {
            b.draw();
        }
    }

    /* 
     * El método `mouseClicked` detecta si el usuario hace clic sobre 
     * alguno de los botones definidos en la escena. Si un botón es 
     * clicado, se ejecuta la acción correspondiente, que en este caso 
     * cambia la escena a la inicial.
     */
    mouseClicked() {
        for (let b of this.botones) {
            b.cliqueado();
        }
    }
}
