/*
 * La clase `transicion` actúa como un controlador para gestionar las diferentes escenas
 * en la aplicación. Maneja la transición entre escenas y mantiene un registro de
 * la escena actual y su índice.
 */
class transicion {
    /*
     * El constructor inicializa las propiedades necesarias para la gestión de escenas.
     * - `escenaActual` almacena la escena actualmente activa.
     * - `escenaActiva` almacena el índice de la escena activa en el array `escenas`.
     * - `escenas` es un array que contiene todas las escenas disponibles.
     */
    constructor() {
        this.escenaActual = null; // Inicialmente no hay ninguna escena activa
        this.escenaActiva = null; // Índice de la escena activa, inicializado a null
        this.escenas = []; // Array para almacenar las escenas
    }

    /*
     * El método `agregarEscena` añade una nueva escena al array de escenas.
     * - `escenas`: La instancia de la escena a añadir.
     */
    agregarEscena(escena) {
        this.escenas.push(escena); // Agregar la escena al array de escenas
    }

    /*
     * El método `colocarEscena` cambia la escena activa a la especificada por el índice.
     * - `numero`: Índice de la escena que se debe establecer como activa.
     * Se asegura de que el índice esté dentro del rango válido de escenas.
     */
    colocarEscena(numero) {
        if (numero < 0 || numero >= this.escenas.length) {
            // Verifica si el índice está fuera del rango de escenas válidas
            print(`ERROR: No existe la escena ${numero}`); // Mostrar un mensaje de error en la consola
            return; // Salir de la función si el índice es inválido
        }

        /*------------------- Esto fue lo que agregue para ocultar los sliders al cambiar de escena*/
        if (this.escenaActual && this.escenaActual.hideElements) {
            this.escenaActual.hideElements(); // Ocultar elementos de la escena anterior si es necesario
        }
        
        this.escenaActual = this.escenas[numero]; // Establecer la escena activa
        this.escenaActiva = numero; // Actualizar el índice de la escena activa
    }

    /*
     * El método `siguienteEscena` cambia a la siguiente escena en el array.
     * Utiliza la operación módulo para asegurar que el índice vuelva al inicio si
     * se excede el número de escenas.
     */
    siguienteEscena() {
        let i = (this.escenaActiva + 1) % this.escenas.length; // Calcular el índice de la siguiente escena
        this.colocarEscena(i); // Establecer la siguiente escena como activa
    }

    /*
     * El método `anteriorEscena` cambia a la escena anterior en el array.
     * Si el índice de la escena actual es menor a 0, se ajusta al último índice de escenas.
     */
    anteriorEscena() {
        let indiceEscena = this.escenaActiva - 1; // Calcular el índice de la escena anterior
        if (indiceEscena < 0) {
            indiceEscena = this.escenas.length - 1; // Ajustar al último índice si el índice es negativo
        }
        this.colocarEscena(indiceEscena); // Establecer la escena anterior como activa
    }
}
