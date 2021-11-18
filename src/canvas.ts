export default class Canvas {
  public dimensions: number = 256;
  public element: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public pixelScale: number = 1;
  public antiAliasingScaleThreshold = 4;

  constructor () {
    this.element = document.querySelector('#screen')!;
    this.context = this.element.getContext('2d')!;
  }

  public setPixelScale (calculatedScreenDimensions: number): void {
    const scale = calculatedScreenDimensions / this.dimensions;
    this.pixelScale = scale > this.antiAliasingScaleThreshold ? Math.floor(scale) : scale;
  }
}
