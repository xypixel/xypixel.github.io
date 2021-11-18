import Canvas from "./Canvas";

export interface ConsoleParams {
  canvas: Canvas;
}

export default class Console {
  private canvas: Canvas;

  private leftConElement: HTMLDivElement;
  private rightConElement: HTMLDivElement;
  private dpadElement: HTMLDivElement;
  private actionBtnIElement: HTMLDivElement;
  private actionBtnIIElement: HTMLDivElement;

  private calculatedScreenDimensions: number = 256;

  constructor (params: ConsoleParams) {
    this.canvas = params.canvas;
    this.leftConElement = document.querySelector('#leftCon')!;
    this.rightConElement = document.querySelector('#rightCon')!;
    this.dpadElement = document.querySelector('#dpad')!;
    this.actionBtnIElement = document.querySelector('#I')!;
    this.actionBtnIIElement = document.querySelector('#II')!;

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

    this.canvas.setPixelScale(this.calculatedScreenDimensions);

    if (this.calculatedScreenDimensions / this.canvas.dimensions > this.canvas.pixelScale) {
      this.calculatedScreenDimensions = this.canvas.dimensions * this.canvas.pixelScale;
    }

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
    
    const dpadDimensions = conWidth / 1.6;
    const dpadLeft = (leftConLeft + conWidth / 2) - dpadDimensions / 2;
    const dpadTop = (leftConTop + conHeight / 2) - dpadDimensions / 2;

    const actionBtnDimensions = conWidth / 3.6;
    const actionBtnSpacing = conWidth / 9;
    const actionBtnCenterX = rightConLeft + conWidth / 2;
    const actionBtnCenterY = rightConTop + conHeight / 2;
    
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

    this.dpadElement.style.left = `${dpadLeft}px`;
    this.dpadElement.style.top = `${dpadTop}px`;
    this.dpadElement.style.width = `${dpadDimensions}px`;
    this.dpadElement.style.height = `${dpadDimensions}px`;

    this.actionBtnIElement.style.left = `${actionBtnCenterX - actionBtnSpacing / 2 - actionBtnDimensions}px`;
    this.actionBtnIElement.style.top = `${actionBtnCenterY}px`;
    this.actionBtnIElement.style.width = `${actionBtnDimensions}px`;
    this.actionBtnIElement.style.height = `${actionBtnDimensions}px`;
    
    this.actionBtnIIElement.style.left = `${actionBtnCenterX + actionBtnSpacing / 2}px`;
    this.actionBtnIIElement.style.top = `${actionBtnCenterY - actionBtnDimensions}px`;
    this.actionBtnIIElement.style.width = `${actionBtnDimensions}px`;
    this.actionBtnIIElement.style.height = `${actionBtnDimensions}px`;
  }
}
