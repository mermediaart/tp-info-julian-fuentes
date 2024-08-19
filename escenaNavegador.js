/* 
 * La clase `EscenaNavegador` extiende la clase base `Escena` y representa 
 * la pantalla de navegación del proyecto. Esta escena permite al 
 * usuario seleccionar entre diferentes obras o secciones interactivas 
 * del proyecto, cada una de las cuales está representada por un botón. 
 * La clase maneja la visualización de estos botones y, opcionalmente, 
 * un efecto de copos de nieve en el fondo, aunque este último está 
 * actualmente comentado.
 */
class EscenaNavegador extends Escena {
    /* 
     * El constructor de `EscenaNavegador` llama al constructor de la clase 
     * base `Escena` utilizando `super()`. Luego, se invoca el método 
     * `inicializar` para configurar los elementos visuales y 
     * propiedades iniciales de la escena. Se definen tres botones 
     * interactivos que permiten al usuario navegar a diferentes escenas 
     * dentro del proyecto. Cada botón está vinculado a una función que 
     * cambia la escena activa.
     */
    constructor() {
        super();

        this.inicializar();

        function escena2() {
            transicionEscena.colocarEscena(2);
        }

        function escena3() {
            transicionEscena.colocarEscena(3);
        }

        function escena4() {
            transicionEscena.colocarEscena(4);
        }

        this.botones = [
            new Boton(width / 3 - width / 9, width / 4.5, 430, 430, transicionEscena.img_comp1, escena2, "escenaNavegador"),
            new Boton(width / 2, width / 4.5, 430, 430, transicionEscena.img_comp2, escena3, "escenaNavegador"),
            new Boton(width - width / 5, width / 4.5, 430, 430, transicionEscena.img_comp3, escena4, "escenaNavegador"),
        ];
    }

    /* 
     * El método `inicializar` se utiliza para establecer la configuración 
     * inicial de la escena de navegación. Se define la propiedad 
     * `borrarFondo`, que probablemente controla si el fondo debe 
     * limpiarse antes de dibujar nuevos elementos. Además, se crea un 
     * arreglo `drops` que podría usarse para implementar un efecto de 
     * copos de nieve en la escena, aunque este código actualmente está 
     * comentado y no se ejecuta.
     */
    inicializar() {
        this.borrarFondo = true;
    }

    /* 
     * El método `draw` se encarga de renderizar la escena de navegación 
     * en la ventana. Primero, establece un fondo oscuro. Luego, se 
     * implementa un efecto de copos de nieve que está actualmente 
     * comentado. A continuación, se muestran los títulos de las 
     * diferentes secciones de la obra, como "Generativo", "Webcam", y 
     * "Sinestesia", con texto estilizado. Finalmente, se dibujan los 
     * botones que permiten al usuario interactuar y cambiar de escena.
     */
    draw() {
        background(30);

        textSize(32);

        push();
        fill(255, 190, 11);
        text('Salpicado', width / 3 - width / 9, height / 2 + height / 6);
        text('Webcam', width / 2, height / 2 + height / 6);
        text('Sinestesia', width - width / 5, height / 2 + height / 6);
        pop();

        fill(231, 246, 248);
        for (let b of this.botones) {
            b.draw();
        }
    }

    /* 
     * El método `mouseClicked` detecta los clics del usuario sobre los 
     * botones de la escena. Si el usuario hace clic en alguno de los 
     * botones, se ejecuta la función asociada, cambiando la escena activa 
     * a la correspondiente, lo que permite al usuario explorar las 
     * diferentes secciones del proyecto.
     */
    mouseClicked() {
        for (let b of this.botones) {
            b.cliqueado();
        }
    }
}
