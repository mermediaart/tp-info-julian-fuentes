/* 
 * La clase `EscenaUno` extiende la clase base `Escena` y representa 
 * una de las escenas del proyecto interactivo. Esta escena permite 
 * al usuario avanzar a la siguiente etapa del proyecto a través de 
 * un botón interactivo. 
 */
class EscenaUno extends Escena {
    /* 
     * El constructor de `EscenaUno` invoca el constructor de la clase 
     * base `Escena` utilizando `super()`, y luego llama al método 
     * `inicializar` para configurar la escena. Se define un botón 
     * que permite al usuario avanzar a la siguiente escena. 
     */
    constructor() {
        super();

        this.inicializar(); // Inicializa las propiedades de la escena.

        // Crear la instancia de LineaOndulada
        this.lineasCanvas = createGraphics(windowWidth, windowHeight);
        this.lineasCanvas.clear();

         // Acceder al contexto y configurar willReadFrequently
         this.ctx = this.lineasCanvas.elt.getContext('2d', { willReadFrequently: true });

        this.lineas = new LineaOndulada(
            0.1,  // Resorte
            0.85,  // Fricción
            30,    // Número de divisiones
            5,     // Diferencia
            [      // Array de colores
                [227, 6, 19, 150],  // Rojo con transparencia
                [255, 215, 0, 150], // Amarillo con transparencia
                [0, 85, 164, 150],  // Azul con transparencia
                [0, 166, 81, 150],  // Verde con transparencia
                [255, 102, 0, 150], // Naranja con transparencia
                [139, 0, 255, 150]  // Magenta con transparencia
            ]
        );
        
        let escena3 = () => {
            transicionEscena.colocarEscena(3); // Cambia a la tercera escena.
        }

        this.botones = [
            new Boton(width - width / 12, height - height / 8, 128, 128, transicionEscena.img_next, escena3), // Botón para avanzar a la siguiente escena.
        ];
    }

    /* 
     * El método `inicializar` configura las propiedades iniciales de 
     * la escena. En este caso, `borrarFondo` se establece en true para 
     * limpiar el fondo al dibujar la escena.
     */
    inicializar() {
        this.borrarFondo = true; // Define si el fondo debe ser limpiado.
    }

    /* 
     * El método `draw` se encarga de dibujar la escena en cada 
     * fotograma. Si `borrarFondo` es verdadero, establece un fondo 
     * oscuro y luego se asegura de que el fondo se mantenga constante 
     * en los siguientes fotogramas. También dibuja un rectángulo para 
     * evitar que el botón "next" quede impreso en el lienzo y, 
     * finalmente, dibuja los botones interactivos.
     */
    draw() {
        //FUNCIONALIDADES PARA LA INTERFAZ
        if (this.borrarFondo) {
            background(30); // Establece el fondo en color oscuro.
            this.borrarFondo = true; // Mantiene la propiedad para futuras ejecuciones.
        }

        fill(30);
        noStroke();
        rect(width * (2 / 3), 0, width / 3, height); // Evita que el botón "next" se imprima en el canvas.

        for (let boton of this.botones) {
            boton.draw(); // Dibuja los botones en la escena.
        }

        //CODIGO DEL SALPICADO
        // Código del sketch para dibujar líneas

        let frecuencia = 1;
        
        if (frameCount % frecuencia == 0) {
            let x = random(width);
            let y = random(height);
            let rangoCorto = 250;
            let x2 = constrain(x + random(-rangoCorto, rangoCorto), 0, width);
            let y2 = constrain(y + random(-rangoCorto, rangoCorto), 0, height);

            let color = this.lineas.colores[int(random(this.lineas.colores.length))];
            let tamañoBase = random(15, 30);
            this.lineas.dibujarLinea(this.lineasCanvas, x, y, x2, y2, color, tamañoBase);
        }

        image(this.lineasCanvas, 0, 0);

        for (let boton of this.botones) {
            boton.draw(); // Dibuja los botones en la escena.
        }
    }

    /* 
     * El método `mouseClicked` detecta los clics del usuario sobre los 
     * botones de la escena. Cuando se hace clic en un botón, se ejecuta 
     * la función asociada, permitiendo avanzar a la siguiente escena 
     * u otras acciones.
     */
    mouseClicked() {
        for (let b of this.botones) {
            b.cliqueado(); // Verifica si algún botón fue clickeado.
            this.lineasCanvas.clear();
        }
    }

    windowResized() {
        resizeCanvas(windowWidth, windowHeight);
        this.lineasCanvas.resizeCanvas(windowWidth, windowHeight);
    }
}
