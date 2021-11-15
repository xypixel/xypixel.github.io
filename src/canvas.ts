export interface Canvas {
  element: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  dimensions: number;
  pixelScale: number;
}

export type CanvasOptions = Partial<Pick<Canvas, 'dimensions'>>;

const canvas: Canvas = {
  element: null,
  context: null,
  dimensions: 256,
  pixelScale: 1
};

export function calculatePixelScale (
  screenWidth: number,
  screenHeight: number,
  screenIsLandscape: boolean
): number {
  const actualDimensions = screenIsLandscape ? screenHeight : screenWidth;
  const aliasingThreshold = 2;
  
  const scale = actualDimensions / canvas.dimensions;
  return scale < aliasingThreshold ? scale : Math.floor(scale);
}

export function updateCanvas (
  screenWidth: number,
  screenHeight: number,
  screenIsLandscape: boolean
): void {
  const dimensions = canvas.dimensions * canvas.pixelScale;

  canvas.element!.width = dimensions;
  canvas.element!.height = dimensions;

  canvas.element!.style.left = `${(screenWidth / 2) - (dimensions / 2)}px`;
  canvas.element!.style.top = screenIsLandscape ?
    `${(screenHeight / 2) - (dimensions / 2)}px` :
    '0';
}

function handleResize (): void {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const screenIsLandscape = screenWidth > screenHeight;
  
  canvas.pixelScale = calculatePixelScale(screenWidth, screenHeight, screenIsLandscape);
  updateCanvas(screenWidth, screenHeight, screenIsLandscape);
}

export function init (options: CanvasOptions = {}): void {
  const config = {
    dimensions: 256,
    ...options
  };

  canvas.element = document.querySelector('canvas');
  canvas.context = canvas.element!.getContext('2d');
  canvas.dimensions = config.dimensions;

  handleResize();

  window.onresize = handleResize;
  window.ondeviceorientation = handleResize;
}

export function getCanvas (): Canvas {
  if (!canvas.element) {
    throw new Error('Please call canvas#init first');
  }

  return canvas;
}

export function resetCanvas (): void {
  canvas.element = null;
  canvas.context = null;
  canvas.dimensions = 256;
  canvas.pixelScale = 1;
}
