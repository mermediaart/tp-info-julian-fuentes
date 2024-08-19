class FiltroLuminosidad {
    constructor(paleta) {
      this.paleta = paleta;
      this.saturacion = 150; // Saturación inicial por defecto
    }
  
    // Método para ajustar la saturación del filtro
    setSaturation(saturacion) {
      this.saturacion = saturacion; // Actualiza la saturación del filtro
    }
  
    applyFilter(src, dst) {
      dst.image(src, 0, 0);
      dst.loadPixels();
  
      for (let y = 0; y < dst.height; y++) {
        for (let x = 0; x < dst.width; x++) {
          let index = (x + y * dst.width) * 4;
  
          let r = dst.pixels[index + 0];
          let g = dst.pixels[index + 1];
          let b = dst.pixels[index + 2];
  
          let luminosidad = (r + g + b) / 3;
          let indicePaleta = Math.floor(map(luminosidad, 0, 255, this.paleta.length - 1, 0));
          
          // Asegurarse de que el índice es válido
          if (indicePaleta >= 0 && indicePaleta < this.paleta.length) {
            let colorPaleta = this.paleta[indicePaleta];
  
            if (colorPaleta && colorPaleta.length === 4) {
              dst.pixels[index + 0] = colorPaleta[0];
              dst.pixels[index + 1] = colorPaleta[1];
              dst.pixels[index + 2] = colorPaleta[2];
              dst.pixels[index + 3] = colorPaleta[3] * (this.saturacion / 255); // Aplicar la saturación
            }
          }
        }
      }
  
      dst.updatePixels();
    }
  }
  