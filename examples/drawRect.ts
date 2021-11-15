import * as config from '~src/config';
import * as canvas from '../src/canvas';

config.init({
  title: 'Draw Rectangle',
  debug: {
    console: true
  }
});
canvas.init({}, config.getConfig());

function drawRect (x: number, y: number, width: number, height: number, fill: string) {
  const ppp = canvas.getCanvas().pixelScale;
  const context = canvas.getCanvas().context!;
  const globalAlpha = context.globalAlpha;
  
  context!.globalAlpha = 1;
  
  if (fill) {
    context.fillStyle = fill;
    context.fillRect(
      x * ppp,
      y * ppp,
      width * ppp,
      height * ppp
    );
  }
  
  // if (strokeColor) {
  //   context.strokeStyle = strokeColor;
  //   context.lineWidth = strokeWidth;
  //   context.strokeRect(
  //     x * ppp,
  //     y * ppp,
  //     width * ppp,
  //     height * ppp
  //   );
  // }
  
  context.globalAlpha = globalAlpha;
}

function draw () {
  drawRect(4, 4, 64, 128, '#c0ffee');

  requestAnimationFrame(() => {
    draw();
  });
}

draw();
