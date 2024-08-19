/* 
 * La clase `Particle` define las propiedades y comportamientos básicos
 * de una partícula que se mueve en un espacio 2D. Las propiedades incluyen 
 * su posición (`x`, `y`), velocidad en los ejes `x` e `y` (`xSpeed`, `ySpeed`),
 * color (`pColor`), tamaño (`size`), y estado de vida (`isAlive`). También se
 * inicializan propiedades adicionales como la gravedad (`gravity`), que afecta 
 * la velocidad vertical, y `trail`, una lista que almacena la trayectoria reciente
 * de la partícula para crear un efecto de estela.
 */
// class Particle {
    // constructor(x, y, xSpeed, ySpeed, pColor, size) {
    //     this.x = x;
    //     this.y = y;
    //     this.xSpeed = xSpeed;
    //     this.ySpeed = ySpeed;
    //     this.color = pColor;
    //     this.size = size;
    //     this.isAlive = true;
    //     this.trail = [];
    //     this.trailIndex = 0;

    /* 
     * La propiedad `gravity` determina cuánto se incrementa la velocidad vertical 
     * (`ySpeed`) en cada cuadro, simulando el efecto de la gravedad. `endColor` se usa 
     * para mezclar el color de la partícula a medida que se mueve, creando un efecto
     * de desvanecimiento en la estela.
     */
    //     this.gravity = .25;
    //     this.endColor = color(64, 0);
    // }

    /* 
     * El método `step` actualiza la posición de la partícula y almacena 
     * la posición actual en la lista `trail`, que se usa para dibujar la estela.
     * La velocidad vertical aumenta debido a la gravedad, y si la partícula 
     * alcanza el borde inferior de la pantalla (`height`), se marca como muerta
     * (`isAlive = false`), lo que indica que ya no debería seguir actualizándose.
     */
    // step() {
    //     this.trail[this.trailIndex] = createVector(this.x, this.y);
    //     this.trailIndex++;
    //     if (this.trailIndex > 10) {
    //         this.trailIndex = 0;
    //     }
    //     this.x += this.xSpeed;
    //     this.y += this.ySpeed;

    //     this.ySpeed += this.gravity;

    //     if (this.y > height) {
    //         this.isAlive = false;
    //     }
    // }

    /* 
     * El método `draw` se encarga de representar visualmente la partícula
     * en la pantalla. Llama a `drawTrail` para dibujar la estela detrás de
     * la partícula, y luego dibuja la partícula misma como un rectángulo
     * en su posición actual.
     */
    // draw() {
    //     this.drawTrail();
    //     fill(this.color);
    //     noStroke();
    //     rect(this.x, this.y, this.size, this.size);
    // }

    /* 
     * El método `drawTrail` dibuja la estela de la partícula. La estela se 
     * crea interpolando (`lerpColor`) entre el color original de la partícula
     * y un color de desvanecimiento (`endColor`). Se dibuja un rectángulo en cada 
     * posición almacenada en `trail`, creando un efecto de movimiento fluido.
     */
    // drawTrail() {
    //     let index = 0;

    //     for (let i = this.trailIndex - 1; i >= 0; i--) {
    //         const tColor = lerpColor(color(this.color), this.endColor, index / this.trail.length);
    //         fill(tColor);
    //         noStroke();
    //         rect(this.trail[i].x, this.trail[i].y, this.size, this.size);
    //         index++;
    //     }

    //     for (let i = this.trail.length - 1; i >= this.trailIndex; i--) {
    //         const tColor = lerpColor(color(this.color), this.endColor, index / this.trail.length);
    //         fill(tColor);
    //         noStroke();
    //         rect(this.trail[i].x, this.trail[i].y, this.size, this.size);
    //         index++;
    //     }
    // }
// }
