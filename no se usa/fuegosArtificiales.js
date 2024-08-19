/* 
 * La clase `Firework` extiende la funcionalidad de la clase `Particle`,
 * añadiendo características específicas para simular un fuego artificial.
 * El constructor recibe las posiciones `x` y `y`, una lista de colores
 * disponibles y una lista de partículas. Inicializa un temporizador (`countdown`)
 * que determina cuándo explota el fuego artificial y se crean las partículas de la explosión.
 */
// class Firework extends Particle {
    // constructor(x, y, colors, particles) {
        // super(x, y, random(-2, 2), random(-10, -15), random(colors), 10);
        // this.countdown = random(30, 60);
        // this.particles = particles;
    // }

    /* 
     * El método `step` se encarga de actualizar la posición del fuego artificial
     * en cada cuadro. Disminuye el temporizador (`countdown`) y, cuando llega a cero,
     * el fuego artificial explota generando una cantidad aleatoria de nuevas partículas,
     * las cuales se dispersan en diferentes direcciones y velocidades simulando una explosión.
     */
    // step() {
        // super.step();
        // this.countdown--;
        // if (this.countdown <= 0) {
            // const explosionSize = floor(random(40, 150));
            // for (let i = 0; i < explosionSize; i++) {

                /* 
                 * Para cada partícula de la explosión, se calcula una velocidad
                 * aleatoria y un ángulo de dispersión. Luego, se crean nuevas
                 * instancias de `Particle` con estas propiedades, añadiéndolas
                 * a la lista de partículas (`particles`).
                 */
                // const speed = random(5, 15);
                // const angle = random(TWO_PI);
                // const xSpeed = cos(angle) * speed;
                // const ySpeed = sin(angle) * speed;

                // this.particles.push(new Particle(this.x, this.y, xSpeed, ySpeed, this.color, 5));
            // }

            /* 
             * Una vez que el fuego artificial ha explotado y generado las partículas,
             * se marca como inactivo (`isAlive = false`), indicando que ya no es necesario
             * seguir actualizando su estado.
             */
            // this.isAlive = false;
        // }
    // }
// }
