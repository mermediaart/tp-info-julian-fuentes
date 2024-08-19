class EscenaDos extends Escena {
    constructor() {
        super();
        this.init = true;

        // Configuración de captura de video y filtro
        this.captura = createCapture(VIDEO);
        this.captura.size(width, height);
        this.captura.hide(); // Ocultar el elemento de video HTML

        this.fondoCanvas = createGraphics(width, height);

        this.filtro = new FiltroLuminosidad([
            [255, 215, 0, 255],  // Amarillo
            [0, 166, 81, 255],  // Verde
            [255, 102, 0, 255],  // Naranja
            [227, 6, 19, 255],  // Rojo
            [0, 85, 164, 255],  // Azul
            [139, 0, 255, 255]   // Magenta
        ]);

        // Inicialización del oscilador
        this.osc = new p5.Oscillator('sine');
        this.osc.start();
        this.osc.amp(0);

        // Funciones de navegación para cambiar entre escenas
        let escena2 = () => {
            transicionEscena.colocarEscena(2);
        };

        let escena4 = () => {
            transicionEscena.colocarEscena(4);
        };

        // Creación de botones para navegar a otras escenas
        this.botones = [
            new Boton(width / 4, height - height / 8, 128, 128, transicionEscena.img_prev, escena2),
            new Boton(width - width / 4.5, height - height / 8, 128, 128, transicionEscena.img_next, escena4),
        ];
    }

    inicializar() {
        this.borrarFondo = true;
             // ----- Esto se agrego para "ocultar" el oscilador en otras escenas
             // Reiniciar la amplitud del oscilador al entrar en la escena 
            // this.osc.amp(0.5, 0.05); // Incrementa la amplitud a 0.5 en 0.05 segundos
            }
        
            hideElements() {
                // ----- Esto se agrego para "ocultar" el oscilador en otras escenas
                // Reducir la amplitud del oscilador a cero al salir de la escena
              //  this.osc.amp(0.01, 0.05); // Reduce la amplitud a 0 en 0.05 segundos
            }
    

    mouseClicked() {
        for (let b of this.botones) {
            b.cliqueado();
        }
    }

    draw() {
        background(0);

        // Verificar si las dimensiones de la captura coinciden con las del canvas
        if (this.captura.width !== width || this.captura.height !== height) {
            this.captura.size(width, height);
            this.fondoCanvas.resizeCanvas(width, height);

            console.log(`Tamaño de la captura ajustado: ${this.captura.width} x ${this.captura.height}`);
        }

        // Captura el video de la cámara en el fondo canvas
        this.fondoCanvas.image(this.captura, 0, 0, width, height);

        // Aplicar el filtro de luminosidad a la imagen del fondo canvas
        this.filtro.applyFilter(this.fondoCanvas, this.fondoCanvas);

        // Mostrar el fondo canvas en el lienzo principal
        image(this.fondoCanvas, 0, 0);

        // Capturar los valores de color del fondo canvas filtrado
        let totalR = 0, totalG = 0, totalB = 0;
        let pixelCount = 0;

        this.fondoCanvas.loadPixels();

        for (let y = 0; y < this.fondoCanvas.height; y++) {
            for (let x = 0; x < this.fondoCanvas.width; x++) {
                let index = (x + y * this.fondoCanvas.width) * 4;
                let r = this.fondoCanvas.pixels[index];
                let g = this.fondoCanvas.pixels[index + 1];
                let b = this.fondoCanvas.pixels[index + 2];

                totalR += r;
                totalG += g;
                totalB += b;
                pixelCount++;
            }
        }

        // Calcular los valores promedio
        let avgR = totalR / pixelCount;
        let avgG = totalG / pixelCount;
        let avgB = totalB / pixelCount;

        // Mapear los valores promedio a la frecuencia y amplitud del oscilador
        let freq = map(avgR + avgG + avgB, 0, 255 * 3, 100, 1000);
        this.osc.freq(freq);
        
        let amp = map(avgR, 0, 255, 0, 0.5);
        this.osc.amp(amp);

        // Dibujar los botones de navegación
        for (let b of this.botones) {
            b.draw();
        }
    }

    windowResized() {
        resizeCanvas(windowWidth, windowHeight); // Redimensionar el lienzo principal
        this.fondoCanvas.resizeCanvas(windowWidth, windowHeight); // Redimensionar el fondo canvas
        this.captura.size(width, height); // Ajustar el tamaño del video capturado

        console.log(`Tamaño de la captura redimensionado: ${this.captura.width} x ${this.captura.height}`);
    }
}
