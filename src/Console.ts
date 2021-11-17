import Canvas from "./Canvas";

export interface ConsoleParams {
  canvas: Canvas;
}

export default class Console {
  private canvas: Canvas;
  private leftConElement: HTMLDivElement;
  private rightConElement: HTMLDivElement;
  private calculatedScreenDimensions: number = 256;

  constructor (params: ConsoleParams) {
    this.canvas = params.canvas;
    this.leftConElement = document.querySelector('#leftCon')!;
    this.rightConElement = document.querySelector('#rightCon')!;

    this.calculatePositionAndScale();

    window.addEventListener('resize', () => {
      this.calculatePositionAndScale();
    }, false);
    window.addEventListener('deviceorientation', () => {
      this.calculatePositionAndScale();
    }, false);
  }

  private calculatePositionAndScale (): void {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const viewportIsLandscape = viewportWidth > viewportHeight;
    
    this.calculatedScreenDimensions = Math.floor(
      viewportIsLandscape ?
        viewportWidth / viewportHeight < 2 ? viewportWidth / 2 : viewportHeight :
        viewportHeight / viewportWidth < 2 ? viewportHeight / 2 : viewportWidth
    );

    this.canvas.element.width = this.calculatedScreenDimensions;
    this.canvas.element.height = this.calculatedScreenDimensions;

    this.positionAndScaleElements(viewportWidth, viewportHeight, viewportIsLandscape);
  }

  private positionAndScaleElements (
    viewportWidth: number,
    viewportHeight: number,
    viewportIsLandscape: boolean
  ): void {
    const screenLeft = viewportWidth / 2 - this.calculatedScreenDimensions / 2;
    const screenTop = viewportHeight / 2 - (viewportIsLandscape ? this.calculatedScreenDimensions / 2 : this.calculatedScreenDimensions);
    const leftConLeft = viewportIsLandscape ? screenLeft - this.calculatedScreenDimensions / 2 : screenLeft;
    const leftConTop = viewportIsLandscape ? screenTop : screenTop + this.calculatedScreenDimensions;
    const rightConLeft = viewportIsLandscape ? screenLeft + this.calculatedScreenDimensions : screenLeft + this.calculatedScreenDimensions / 2;
    const rightConTop = viewportIsLandscape ? screenTop : screenTop + this.calculatedScreenDimensions;
    const conWidth = this.calculatedScreenDimensions / 2;
    const conHeight = this.calculatedScreenDimensions;
    
    this.canvas.element.style.left = `${screenLeft}px`;
    this.canvas.element.style.top = `${screenTop}px`;

    this.leftConElement.style.left = `${leftConLeft}px`;
    this.leftConElement.style.top = `${leftConTop}px`;
    this.leftConElement.style.width = `${conWidth}px`;
    this.leftConElement.style.height = `${conHeight}px`;

    this.rightConElement.style.left = `${rightConLeft}px`;
    this.rightConElement.style.top = `${rightConTop}px`;
    this.rightConElement.style.width = `${conWidth}px`;
    this.rightConElement.style.height = `${conHeight}px`;
  }
}
