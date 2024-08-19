class EscenaTres extends Escena {
    constructor() {
        super();

        this.inicializar();

        function escena3() {
            transicionEscena.colocarEscena(3);
        }

        function escena5() {
            transicionEscena.colocarEscena(5);
        }

        this.botones = [
            new Boton(width / 15, height - height / 2, 128, 128, transicionEscena.img_prev, escena3),
            new Boton(width - width / 15, height - height / 2, 128, 128, transicionEscena.img_next, escena5),
        ];

        console.log("Índice de la escena actual:", transicion.escenaActiva);

        // Código cámara-filtro
        this.captura = createCapture(VIDEO);
        this.captura.size(width, height);
        this.captura.hide(); // Ocultar el elemento de video HTML

        this.fondoCanvas = createGraphics(width, height);
        this.lineasCanvas = createGraphics(width, height);
        this.lineasCanvas.clear(); // Asegúrate de que el canvas secundario esté vacío al principio

        this.lineas = new LineaOndulada(
            0.1, // Resorte
            0.85, // Fricción
            30, // Número de divisiones
            5, // Diferencia
            [ // Array de colores
                [227, 6, 19, 150], // Rojo con transparencia
                [255, 215, 0, 150], // Amarillo con transparencia
                [0, 85, 164, 150], // Azul con transparencia
                [0, 166, 81, 150], // Verde con transparencia
                [255, 102, 0, 150], // Naranja con transparencia
                [139, 0, 255, 150] // Magenta con transparencia
            ]
        );

        this.filtro = new FiltroLuminosidad([
            [255, 215, 0, 150], // Amarillo
            [0, 166, 81, 150], // Verde
            [255, 102, 0, 150], // Naranja
            [227, 6, 19, 150], // Rojo
            [0, 85, 164, 150], // Azul
            [139, 0, 255, 150] // Magenta
        ]);

        // Inicializar los sliders y textos

        /*  this.saturationSlider = createSlider(0, 255, 150);
        this.saturationSlider.position(20, 10); // Posición del slider
        this.saturationSlider.show(); // Mostrar el slider

        this.lineDensitySlider = createSlider(1, 30, 10);
        this.lineDensitySlider.position(200, 10); // Posición del slider
        this.lineDensitySlider.show(); // Mostrar el slider

        this.saturationText = createP("Saturación");
        this.saturationText.position(30, 20); // Posición del texto
        this.saturationText.show(); // Mostrar el texto

        this.lineDensityText = createP("Densidad de líneas");
        this.lineDensityText.position(180, 20); // Posición del texto
        this.lineDensityText.show(); // Mostrar el texto
        
        
        ------------------- Esto fue lo que modifiique para ocultar los sliders */
       
            // Inicializar los sliders y textos aquí, pero no mostrarlos todavía
            this.saturationSlider = createSlider(0, 255, 150);
            this.saturationSlider.position(20, 10); 
            this.saturationSlider.hide(); // Ocultar el slider por defecto
    
            this.lineDensitySlider = createSlider(1, 30, 10);
            this.lineDensitySlider.position(200, 10); 
            this.lineDensitySlider.hide(); // Ocultar el slider por defecto
    
            this.saturationText = createP("Saturación");
            this.saturationText.position(30, 20); 
            this.saturationText.hide(); // Ocultar el texto por defecto
    
            this.lineDensityText = createP("Densidad de líneas");
            this.lineDensityText.position(180, 20); 
            this.lineDensityText.hide(); // Ocultar el texto por defecto
        //hasta aca
    
    }

    inicializar() {
        this.borrarFondo = true;
    }

    mouseClicked() {
        for (let b of this.botones) {
            b.cliqueado();
        }
    }

    draw() {
        // Dibujar el rectángulo horizontal en la parte superior
        let rectHeight = 80; // Altura del rectángulo horizontal
        let rectColor = [139, 0, 255, 150]; // Color del rectángulo horizontal
        fill(rectColor);
        noStroke();
        rect(0, 0, width, rectHeight); // Opcional, descomentar si se desea mostrar el rectángulo

        // Mostrar el contenido gráfico en el espacio restante
        let spaceTop = 80; // Altura del rectángulo horizontal

        // Captura el video de la cámara en el fondo canvas
        this.fondoCanvas.image(this.captura, 0, spaceTop, width, height - spaceTop);

        // Aplicar el filtro de luminosidad a la imagen del fondo canvas
        let saturationValue = int(this.saturationSlider.value()); // Obtener el valor del slider
        this.filtro.setSaturation(saturationValue); // Ajustar la saturación del filtro
        this.filtro.applyFilter(this.fondoCanvas, this.fondoCanvas);

        // Limpiar el lienzo gráfico de líneas antes de dibujar nuevas líneas
        this.lineasCanvas.clear();

        // Obtener la densidad de las líneas del slider
        let lineDensity = int(this.lineDensitySlider.value()); // Obtener el valor del slider

        // Si es el momento adecuado para generar una línea según la densidad de líneas
        if (frameCount % lineDensity == 0) {
            let x = random(width); // Coordenada x inicial aleatoria
            let y = random(height); // Coordenada y inicial aleatoria

            let rangoCorto = 250; // Define el rango más corto
            let x2 = constrain(x + random(-rangoCorto, rangoCorto), 0, width); // Coordenada x final
            let y2 = constrain(y + random(-rangoCorto, rangoCorto), 0, height); // Coordenada y final

            // Seleccionar un color aleatorio de lineas.colores
            let color = this.lineas.colores[int(random(this.lineas.colores.length))];
            let tamañoBase = random(15, 30); // Variar el tamaño base de la línea
            this.lineas.dibujarLinea(this.lineasCanvas, x, y, x2, y2, color, tamañoBase); // Dibujar la línea
        }

        // Mostrar el fondo canvas en el lienzo principal
        image(this.fondoCanvas, 0, 0);

        // Mostrar el contenido del lienzo gráfico secundario en el lienzo principal
        image(this.lineasCanvas, 0, 0);

        for (let b of this.botones) {
            b.draw();
        }

        //------------------- Esto fue lo que modifiique para ocultar los sliders 
        
         // Mostrar los sliders y textos SOLO cuando se dibuja la escena tres
         this.saturationSlider.show();
         this.lineDensitySlider.show();
         this.saturationText.show();
         this.lineDensityText.show();
          //hasta aca
    }
//------------------- Esto fue lo que modifiique para ocultar los sliders
 // Método para ocultar los sliders y textos al salir de la escena (se llama en transicion.js en colocarEscena)
 hideElements() {
    this.saturationSlider.hide();
    this.lineDensitySlider.hide();
    this.saturationText.hide();
    this.lineDensityText.hide();
    //hasta aca
}
    windowResized() {
        resizeCanvas(windowWidth, windowHeight); // Redimensionar el lienzo principal
        this.fondoCanvas.resizeCanvas(windowWidth, windowHeight); // Redimensionar el fondo canvas
        this.lineasCanvas.resizeCanvas(windowWidth, windowHeight); // Redimensionar el segundo canvas
        this.captura.size(width, height); // Ajustar el tamaño del video capturado
        clear(); // Limpiar el lienzo
    }
}
