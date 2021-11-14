export interface Canvas {
  element: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  ratio: string;
  ppp: number;
}

interface CanvasOptions {
  ratio?: string;
  ppp?: number;
}

interface Ratio {
  x: number;
  y: number;
}

const canvas: Canvas = {
  element: null,
  context: null,
  ratio: '',
  ppp: 1
};

function parseRatio (ratio: string): Ratio {
  const characters = ratio.split(':');
  return {
    x: parseInt(characters[0], 10),
    y: parseInt(characters[1], 10)
  }
}

function handleResize (): void {
  const vpWidth = window.innerWidth;
  const vpHeight = window.innerHeight;
  // const isLandscape = vpWidth > vpHeight;
  const ratio: Ratio = parseRatio(canvas.ratio);



  // let canvasWidth = isLandscape ? ratio.x * (vpHeight / ratio.y) : vpWidth;
  // let canvasHeight = isLandscape ? vpHeight : ratio.y * (vpWidth / ratio.x);

  // canvas.element!.width = canvasWidth;
  // canvas.element!.height = canvasHeight;
}

export function init (options: CanvasOptions = {}): void {
  const config = {
    ratio: '4:3',
    ppp: 1,
    ...options
  };

  canvas.element = document.querySelector('canvas');
  canvas.context = canvas.element!.getContext('2d');
  canvas.ratio = config.ratio;
  canvas.ppp = config.ppp;

  handleResize();

  window.onresize = handleResize;
  window.ondeviceorientation = handleResize;
}

export function getCanvas (): Canvas {
  if (!canvas.element) {
    throw new Error('call canvas#init first');
  }

  return canvas;
}
