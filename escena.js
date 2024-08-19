/* 
 * La clase `Scene` es una estructura base diseñada para ser extendida 
 * por otras clases que representen diferentes escenas en un proyecto 
 * interactivo o un juego. Esta clase contiene métodos vacíos (`draw`, 
 * `mouseClicked`, y `keyType`) que serán sobrescritos por las subclases 
 * para definir el comportamiento específico de cada escena.
 */
class Escena {
    /* 
     * El método `draw` es un espacio reservado (placeholder) que 
     * será utilizado para dibujar los elementos gráficos de la 
     * escena en la pantalla. Cada subclase que extienda `Scene` 
     * implementará su propia versión de este método.
     */
    draw() {}

    /* 
     * El método `mouseClicked` es otro placeholder que se activará 
     * cuando el usuario haga clic con el mouse. Las subclases que 
     * extienden `Scene` pueden sobrescribir este método para definir 
     * cómo responde la escena a los clics del mouse.
     */
    mouseClicked() {}

    /* 
     * El método `keyType` es un tercer placeholder destinado a 
     * manejar la entrada del teclado. Al sobrescribir este método, 
     * las subclases pueden definir acciones específicas que se 
     * desencadenan al presionar teclas en la escena.
     */
    keyType() {}
}
