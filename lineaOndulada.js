class LineaOndulada {
    constructor(resorte, fricción, numDivisiones, diferencia, colores) {
      this.resorte = resorte;
      this.fricción = fricción;
      this.numDivisiones = numDivisiones;
      this.diferencia = diferencia;
      this.colores = colores;
      this.vx = 0;
      this.vy = 0;
      this.velocidad = 0;
      this.r = 0;
    }
  
    dibujarLinea(canvasSecundario, x, y, x2, y2, color, tamañoBase) {
      let dx = (x2 - x);
      let dy = (y2 - y);
  
      if (isNaN(this.vx)) this.vx = 0;
      if (isNaN(this.vy)) this.vy = 0;
  
      this.vx += dx * random(0, 0.7);
      this.vy += dy * random(0, 0.7);
      this.vx *= this.fricción;
      this.vy *= this.fricción;
      this.velocidad += sqrt(this.vx * this.vx + this.vy * this.vy) - this.velocidad;
      this.velocidad *= 0.6;
  
      let tamañoActual = tamañoBase;
      this.r = tamañoBase - this.velocidad * 0.5;
  
      if (color && color.length >= 4) {
        canvasSecundario.stroke(color[0], color[1], color[2], color[3]);
      } else {
        console.error('Color no válido:', color);
        return;
      }
  
      let puntos = [];
      let numPuntosIntermedios = 90;
      let amplitud = tamañoBase * 0.5;
      let frecuencia = 4;
  
      for (let i = 0; i <= numPuntosIntermedios; i++) {
        let t = i / numPuntosIntermedios;
        let xt = lerp(x, x2, t);
        let yt = lerp(y, y2, t);
        let onda = sin(t * PI * frecuencia) * amplitud;
        puntos.push(createVector(xt, yt + onda));
      }
  
      for (let i = 1; i < puntos.length; ++i) {
        let prev = puntos[i - 1];
        let curr = puntos[i];
        tamañoActual -= (tamañoActual - this.r) / this.numDivisiones;
        if (tamañoActual < 1) { tamañoActual = 1; }
        canvasSecundario.strokeWeight(tamañoActual + this.diferencia);
  
        let bgColor = this.getBackgroundColor(canvasSecundario, curr.x, curr.y);
        let blendedColor = this.blendColors(color, bgColor);
        canvasSecundario.stroke(blendedColor);
        canvasSecundario.line(prev.x, prev.y, curr.x, curr.y);
        canvasSecundario.strokeWeight(tamañoActual);
        canvasSecundario.line(curr.x + this.diferencia * 2, curr.y + this.diferencia * 2, prev.x + this.diferencia * 2, prev.y + this.diferencia * 2);
        canvasSecundario.line(curr.x - this.diferencia, curr.y - this.diferencia, prev.x - this.diferencia, prev.y - this.diferencia);
        this.agregarManchas(canvasSecundario, curr.x, curr.y, tamañoActual, color);
      }
  
      let ultimo = puntos[puntos.length - 1];
      let penultimo = puntos[puntos.length - 2];
      if (ultimo && penultimo) {
        let dirección = createVector(ultimo.x - penultimo.x, ultimo.y - penultimo.y);
        if (dirección.mag() > 0) {
          dirección.normalize().mult(this.r);
          canvasSecundario.stroke(color[0], color[1], color[2], color[3]);
          canvasSecundario.strokeWeight(this.r + this.diferencia);
          canvasSecundario.line(ultimo.x, ultimo.y, ultimo.x + dirección.x, ultimo.y + dirección.y);
        }
      }
    }
  
    agregarManchas(UI, x, y, tamaño, color) {
      let numManchas = int(random(5, 15));
      for (let i = 0; i < numManchas; i++) {
        let angulo = random(TWO_PI);
        let radio = random(tamaño, tamaño * 2);
        let mx = x + cos(angulo) * radio;
        let my = y + sin(angulo) * radio;
        let tamañoMancha = random(2, 5);
        UI.noStroke();
        UI.fill(color[0], color[1], color[2], color[3]);
        UI.ellipse(mx, my, tamañoMancha, tamañoMancha);
      }
    }
  
    blendColors(color1, color2) {
      let blendFactor = 0.5;
      let blendedColor = [
        lerp(color1[0], color2[0], blendFactor),
        lerp(color1[1], color2[1], blendFactor),
        lerp(color1[2], color2[2], blendFactor),
        lerp(color1[3], color2[3], blendFactor)
      ];
      return blendedColor;
    }
  
    getBackgroundColor(canvas, x, y) {
      x = constrain(x, 0, canvas.width - 1);
      y = constrain(y, 0, canvas.height - 1);
      let color = canvas.get(x, y);
      return [color[0], color[1], color[2], 255];
    }
  }
  