/* 
 * La clase `EscenaMenu` extiende la clase base `Escena` y representa 
 * la pantalla de inicio del proyecto interactivo o juego. Esta escena 
 * actúa como un punto de partida, proporcionando al usuario opciones 
 * para comenzar una nueva experiencia o navegar por otras secciones 
 * del proyecto. Hereda métodos clave de `Escena` y los sobrescribe para 
 * definir su comportamiento específico.
 */
class EscenaMenu extends Escena {
    /* 
     * El constructor de `EscenaMenu` llama al constructor de la clase 
     * base `Escena` utilizando `super()`. Luego, se invoca el método 
     * `inicializar` para establecer los colores y propiedades iniciales 
     * de la escena. Se definen dos botones: uno para iniciar una nueva 
     * experiencia (escena 1) y otro para navegar a otra sección del 
     * proyecto (escena de navegación). Las funciones `escena1` y 
     * `escenaNav` manejan el cambio de escena y la inicialización 
     * correspondiente.
     */
    constructor() {
        super();

        this.inicializar(); // Inicializa las propiedades de la escena, como los colores.

        function escena1() {
            transicionEscena.colocarEscena(2); // Cambia a la escena 2.
            transicionEscena.escenaActual.inicializar(); // Inicializa la nueva escena.
        }

        function escenaNav() {
            transicionEscena.colocarEscena(1); // Cambia a la escena de navegación.
        }

        this.botones = [
            new Boton(width / 2, height / 2, 128, 128, transicionEscena.img_start, escena1), // Botón para iniciar una nueva experiencia.
            new Boton(width / 2, (height / 2) + height / 3, 128, 128, transicionEscena.img_nav, escenaNav), // Botón para navegar a otra sección.
        ];
    }

    /* 
     * El método `inicializar` establece una paleta de colores utilizada 
     * en la escena de inicio, similar a la paleta definida en otras 
     * escenas. Además, se define la propiedad `borrarFondo` que, 
     * presumiblemente, controla si el fondo debe borrarse o no al dibujar 
     * nuevos elementos en la pantalla.
     */
    inicializar() {
        this.colores = [
            color(255, 190, 11), // Amarillo
            color(131, 56, 236), // Púrpura
        ];
        this.borrarFondo = true;
    }

    /* 
     * El método `draw` se encarga de dibujar la pantalla de inicio en 
     * la ventana. Se establece un fondo de color púrpura y se dibuja 
     * un rectángulo de fondo oscuro. El texto, que incluye información 
     * del proyecto y del estudiante, se alinea y se presenta en el centro 
     * de la pantalla utilizando los colores definidos previamente. 
     * También se dibujan los botones que permiten al usuario interactuar 
     * con la escena y acceder a otras partes del proyecto.
     */
    draw() {
        background(this.colores[1]); // Fondo púrpura.

        push();
        noStroke();
        fill(30); // Color de relleno oscuro.
        rect(30, 30, width - 55, height - 55); // Rectángulo oscuro en el fondo.
        pop();

        textFont(transicionEscena.myFont);
        noStroke();
        textSize(36);
        fill(this.colores[0]); // Texto de color amarillo.
        textAlign(CENTER);
        text("Trabajo Integrador, INFORMATICA APLICADA I, Cat. Samaruga", width / 2, height / 3 - width / 10);
        text("Alumno: Fuentes Julian", width / 2, height / 3 - width / 13);
        text("Universidad Nacional de las Artes, 2024", width / 2, height / 3 - width / 19);
        text("~     HOME     ~", width / 2, height / 2 - width / 27);
        text("~ NAVEGA POR LAS OBRAS ~", width / 2, height / 2 + height / 5);

        for (let b of this.botones) {
            b.draw(); // Dibuja los botones interactivos.
        }
    }

    /* 
     * El método `mouseClicked` detecta si el usuario hace clic sobre 
     * alguno de los botones definidos en la escena. Si se hace clic en 
     * un botón, se ejecuta la función asociada, que cambia la escena a 
     * la correspondiente, ya sea para comenzar una nueva experiencia o 
     * para navegar por otras secciones del proyecto.
     */
    mouseClicked() {
        for (let b of this.botones) {
            b.cliqueado(); // Ejecuta la acción asociada al botón clicado.
        }
    }
}
