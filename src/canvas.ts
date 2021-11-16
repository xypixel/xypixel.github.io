import { Config } from "./config";

export interface Canvas {
  element: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
  dimensions: number;
  pixelScale: number;
}

export interface CanvasOptions {
  options?: Partial<Pick<Canvas, 'dimensions'>>;
  config?: Config;
};

const canvas: Canvas = {
  element: null,
  context: null,
  dimensions: 256,
  pixelScale: 1
};

let config: Config | undefined;

export function calculatePixelScale (
  screenWidth: number,
  screenHeight: number,
  screenIsLandscape: boolean
): number {
  const actualDimensions = screenIsLandscape ? screenHeight : screenWidth;
  const aliasingThreshold = 2;
  
  let scale = actualDimensions / canvas.dimensions;
  scale = scale < aliasingThreshold ? scale : Math.floor(scale);

  if (config?.debug.console) {
    console.log(`pixel scale: ${scale}`);
  }

  return scale;
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

export function init (params: CanvasOptions = {}): void {
  const options = {
    dimensions: 256,
    ...params.options
  };

  config = params.config;

  canvas.element = document.querySelector('canvas');
  canvas.context = canvas.element!.getContext('2d');
  canvas.dimensions = options.dimensions;

  handleResize();

  window.onresize = handleResize;
  window.ondeviceorientation = handleResize;
}

export function getRef (): Canvas {
  if (!canvas.element) {
    throw new Error('Please call canvas#init first');
  }

  return canvas;
}

export function getBoundingRect (): DOMRect {
  return canvas.element!.getBoundingClientRect();
}

export function resetCanvas (): void {
  canvas.element = null;
  canvas.context = null;
  canvas.dimensions = 256;
  canvas.pixelScale = 1;
}
