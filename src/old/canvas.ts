export interface Canvas {
  element: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  dimensions: number;
  pixelScale: number;

  getBoundingRect: () => DOMRect;
}

export interface CanvasOptions {
  options?: Partial<Pick<Canvas, 'dimensions'>>;
};

const canvas: Canvas = {
  element: null,
  context: null,
  dimensions: 256,
  pixelScale: 1,

  getBoundingRect: () => ({}) as DOMRect
};

export function calculatePixelScale (
  screenWidth: number,
  screenHeight: number,
  screenIsLandscape: boolean
): number {
  const actualDimensions = screenIsLandscape ? screenHeight : screenWidth;
  const aliasingThreshold = 2;
  let scale = actualDimensions / canvas.dimensions;

  const dimensions = canvas.dimensions * scale;
  const canvasPercentageOfViewport = (dimensions / (screenIsLandscape ? screenWidth : screenHeight)) * 100;

  if (canvasPercentageOfViewport > 72 ) {
    scale -= 0.4;
  }
  
  return scale > aliasingThreshold ? Math.floor(scale) : scale;
}

export function updateCanvas (
  screenWidth: number,
  screenHeight: number,
  screenIsLandscape: boolean
): void {
  const dimensions = canvas.dimensions * canvas.pixelScale;

  canvas.element!.width = dimensions;
  canvas.element!.height = dimensions;

  canvas.element!.style.left = `${Math.floor((screenWidth / 2) - (dimensions / 2))}px`;
  canvas.element!.style.top = screenIsLandscape ?
    `${Math.floor((screenHeight / 2) - (dimensions / 2))}px` :
    '0';
}

function handleResize (): void {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const screenIsLandscape = screenWidth > screenHeight;
  
  canvas.pixelScale = calculatePixelScale(screenWidth, screenHeight, screenIsLandscape);
  updateCanvas(screenWidth, screenHeight, screenIsLandscape);
}

export function init (params: CanvasOptions = {}): void {
  const options = {
    dimensions: 256,
    ...params.options
  };

  canvas.element = document.querySelector('canvas');
  canvas.context = canvas.element!.getContext('2d');
  canvas.dimensions = options.dimensions;
  canvas.getBoundingRect = () => canvas.element!.getBoundingClientRect();

  handleResize();

  window.addEventListener('resize', handleResize, false);
  window.addEventListener('deviceorientation', handleResize, false);
}

export function getRef (): Canvas {
  if (!canvas.element) {
    throw new Error('Please call canvas#init first');
  }

  return canvas;
}

export function resetRef (): void {
  canvas.element = null;
  canvas.context = null;
  canvas.dimensions = 256;
  canvas.pixelScale = 1;

  window.removeEventListener('resize', handleResize, false);
  window.removeEventListener('deviceorientation', handleResize, false);

  canvas.getBoundingRect = () => ({}) as DOMRect;
}
