class Boton {
    constructor(x, y, w, h, img, accion, escenaNavegador) {

        /* El constructor inicializa las propiedades del botón. 
        * Recibe las coordenadas (x, y), el ancho (w), la altura (h), 
        * la imagen del botón (img), una acción a ejecutar cuando se hace 
        * clic en el botón (accion) y un parámetro adicional (escenaNavegador) 
        * que se utiliza para determinar si se debe aplicar el efecto 
        * de la línea animada bajo el botón cuando el mouse está sobre él.
        */

        this.x = x;//Posicion x del boton  
        this.y = y;//Posicion y del boton
        this.w = w;//Ancho del boton
        this.h = h;//Alto del boton
        this.img = img;//Imagen del boton
        this.accion = accion;//Acción que ejecuta cuando hace clic

        /* El parámetro escenaNavegador se usa para funciones adicionales, 
        * en este caso, para manejar el efecto visual de navegación 
        * entre escenas. Se inicializan también las propiedades que 
        * controlan si el mouse está sobre el botón (mouseSobre) 
        * y el progreso de la animación de la línea (progresoLinea), 
        * así como la velocidad de la animación (velocidadLinea).
        */
        this.escenaNavegador = escenaNavegador;//Contiene el texto "escenaNavegador" una vez que se lo indica escenaNavegador.js
        this.mouseSobre = false;//Verifica si esta el mouse sobre el boton 
        this.progresoLinea = 0;//Controla el progreso de la linea para que no exceda la imagen
        this.velocidadLinea = 0.05;//Controla la velocidad con la que se hace la linea
    }

    draw() {
        /* La función draw se encarga de dibujar el botón en la pantalla. 
        * Primero, verifica si el mouse está sobre el área del botón. 
        * Si lo está, cambia el tamaño del botón para hacerlo más grande 
        * (w y h se ajustan a 160). Si no, lo mantiene en su tamaño original 
        * (128). Esta interacción proporciona un feedback visual al usuario.
        */
        if (
            mouseX > this.x - this.w / 2 &&//Estas 4 lineas preguntan su el cursor esta dentro del boton
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        ) {
            this.mouseSobre = true;//El mouse esta sobre el boton
            this.w = 160;//Tamaño nuevo de ancho
            this.h = 160;//Tamaño nuevo de alto
        } else {
            this.mouseSobre = false;//El mouse no esta sobre el boton
            this.w = 128;//Tamaño constante
            this.h = 128;//Tamaño constante 
        }

        push();
        imageMode(CENTER);//Posiciona la imagen en el centro
        image(this.img, this.x, this.y, this.w, this.h);//Posiciona la imagen en x, y, y escala la imagen segun w, h 

        /* Si el mouse está sobre el botón y la escena corresponde a "escenaNavegador", 
        * se dibuja una línea progresiva debajo del botón. Esto se logra 
        * calculando la posición inicial y final de la línea, y luego 
        * usando la función lerp para interpolar entre estas posiciones 
        * a medida que avanza el progreso de la animación.
        */
        if (this.mouseSobre && this.escenaNavegador === "escenaNavegador") { /*Para que this.escenaNavegador contenga el texto "escenaNavegador",
                                                                             * se lo va a dar el archivo escenaNavegador.js en la parte de this.botones
                                                                             */
            stroke(255);//Color de linea
            strokeWeight(3);//Grosor de linea

            this.comienzoX = this.x - this.w / 2;//Posicion inicial de X
            this.finalX = this.x + this.w / 2;//Posicion final de x
            this.lineaY = this.y + this.h / 2 + 10;//La altura a la que va a estar la linea blanca
            this.posicionActualX = lerp(this.comienzoX, this.finalX, this.progresoLinea);//Posicion actual de X

            line(this.comienzoX, this.lineaY, this.posicionActualX, this.lineaY);//Dibuja la linea

            /* El progreso de la animación de la línea se incrementa 
            * con cada frame, basado en la velocidad definida por velocidadLinea. 
            * El progreso se restringe entre 0 y 1 para asegurar que la 
            * animación se complete correctamente.
            */
            this.progresoLinea += this.velocidadLinea;//Calcula el progreso de la linea
            this.progresoLinea = constrain(this.progresoLinea, 0, 1);//Evita que la linea se salga
        } else {
            /* Si el mouse no está sobre el botón o la escena no es 
            * "escenaNavegador", se reinicia el progreso de la animación a 0.
            */
            this.progresoLinea = 0;//Resetea la animacion si el cursor no esta sobre la imagen 
        }
        pop();
    }

    areaBoton(x, y) {
        /* La función areaBoton verifica si las coordenadas proporcionadas 
        * (x, y) están dentro del área del botón. Esto es útil para 
        * determinar si el botón ha sido clicado. Devuelve true si las 
        * coordenadas están dentro del área, y false en caso contrario.
        */
        if (
            x >= this.x - this.w / 2 &&
            x <= this.x + this.w / 2 &&
            y >= this.y - this.h / 2 &&
            y <= this.y + this.h / 2
        ) {
            return true;
        }
        return false;
    }

    cliqueado() {
        /* La función clicked se llama cuando el botón es clicado. 
        * Primero, verifica si las coordenadas del mouse están dentro 
        * del área del botón utilizando la función contains. Si es así, 
        * ejecuta la acción asociada con el botón (this.action()) y 
        * actualiza el fondo de la pantalla.
        */
        if (this.areaBoton(mouseX, mouseY)) {
            this.accion();//Ejecuta la funcion "accion" si el boton se cliqueo
            background(30);//Dibuja el fondo
        }
    }
}
