/* Se crea una instancia global de `transicionEscena` para gestionar las diferentes escenas
 * y sus recursos. La instancia `transicionEscena` es utilizada a lo largo del programa para
 * acceder y controlar las escenas, imágenes y sonidos.
 */
const transicionEscena = new transicion();

/*
 * La función `preload` se ejecuta antes de `setup` y se encarga de cargar todos
 * los recursos necesarios para la aplicación, incluyendo imágenes, fuentes y sonidos.
 * Estos recursos son cargados en la instancia global `transicionEscena` para su posterior uso
 * en las diferentes escenas.
 */
function preload() {
    //iconos
    transicionEscena.img_next = loadImage('assets/next.png'); // Imagen para el botón de siguiente
    transicionEscena.img_prev = loadImage('assets/prev.png'); // Imagen para el botón de anterior
    transicionEscena.img_start = loadImage('assets/start.png'); // Imagen para el botón de inicio
    transicionEscena.img_home = loadImage('assets/home.png'); // Imagen para el botón de inicio
    transicionEscena.img_comp1 = loadImage('assets/comp1.png'); // Imagen para el primer componente
    transicionEscena.img_comp2 = loadImage('assets/comp2.png'); // Imagen para el segundo componente
    transicionEscena.img_comp3 = loadImage('assets/comp3.png'); // Imagen para el tercer componente
    transicionEscena.img_nav = loadImage('assets/nav.png'); // Imagen para la navegación
   

    //fuentes
    transicionEscena.myFont = loadFont('fonts/myfont.ttf'); // Fuente personalizada

    
}

/*
 * La función `setup` se ejecuta una vez al inicio y se encarga de configurar el
 * entorno del canvas y crear las escenas. Cada escena se instancia y se añade al
 * mundo. La escena por defecto se establece al inicio del programa.
 */
function setup() {
    createCanvas(windowWidth, windowHeight, { willReadFrequently: true }); // Crear el canvas con el tamaño de la ventana

    //crear escenas y agregarlas al mundo
    const menu = new EscenaMenu(); // instancia de la escena de inicio
    transicionEscena.agregarEscena(menu);
    const navegar = new EscenaNavegador(); // instancia de la escena de navegación
    transicionEscena.agregarEscena(navegar);
    const escenaUno = new EscenaUno(); // instancia de la escena 1
    transicionEscena.agregarEscena(escenaUno);
    const escenaDos = new EscenaDos(); // instancia de la escena 2
    transicionEscena.agregarEscena(escenaDos);
    const escenaTres = new EscenaTres(); // instancia de la escena 3
    transicionEscena.agregarEscena(escenaTres);
    const final = new EscenaFinal(); // instancia de la escena final
    transicionEscena.agregarEscena(final);

    //definir la escena por defecto al iniciar el programa
    transicionEscena.colocarEscena(0); // establecer la escena inicial

   }

/*
 * La función `draw` se ejecuta en cada fotograma y se encarga de dibujar la escena
 * actual en el canvas. La escena actual se obtiene desde la instancia `transicionEscena`.
 */
function draw() {
    transicionEscena.escenaActual.draw(); // dibujar la escena actual
}

/*
 * La función `mouseClicked` se ejecuta cada vez que se hace clic en el canvas.
 * Se encarga de manejar los clics en la escena actual, permitiendo interacciones
 * como botones y efectos visuales.
 */
function mouseClicked() {
    transicionEscena.escenaActual.mouseClicked(); // manejar clics en la escena actual
}

/*
 * La función `keyPressed` se ejecuta cada vez que se presiona una tecla. Permite
 * manejar eventos de teclado en la escena actual.
 */
function keyPressed() {
    transicionEscena.escenaActual.keyPressed(); // manejar presiones de teclas en la escena actual
}
