export default class Console {
  private leftConElement: HTMLDivElement;
  private bodyElement: HTMLDivElement;
  private screenElement: HTMLCanvasElement;
  private rightConElement: HTMLDivElement;

  constructor () {
    this.leftConElement = document.querySelector('#leftCon')!;
    this.bodyElement = document.querySelector('#body')!;
    this.screenElement = document.querySelector('canvas')!;
    this.rightConElement = document.querySelector('#rightCon')!;

    this.positionPieces();

    window.addEventListener('resize', () => {
      this.positionPieces();
    }, false);
    window.addEventListener('deviceorientation', () => {
      this.positionPieces();
    }, false);
  }

  private positionPieces (): void {
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    const screenIsLandscape = screenWidth > screenHeight;

    let bodyDimensions;

    if (screenIsLandscape) {
      bodyDimensions = screenWidth / screenHeight < 2 ? screenWidth / 2 : screenHeight;
    } else {
      bodyDimensions = screenHeight / screenWidth < 2 ? screenHeight / 2 : screenWidth;
    }

    this.leftConElement.style.width = `${bodyDimensions / 2}px`;
    this.leftConElement.style.height = `${bodyDimensions}px`;

    this.bodyElement.style.width = `${bodyDimensions}px`;
    this.bodyElement.style.height = `${bodyDimensions}px`;
    this.bodyElement.style.left = `${screenWidth / 2 - bodyDimensions / 2}px`;

    this.rightConElement.style.width = `${bodyDimensions / 2}px`;
    this.rightConElement.style.height = `${bodyDimensions}px`;

    if (screenIsLandscape) {
      this.leftConElement.style.left = `${screenWidth / 2 - bodyDimensions}px`;
      this.leftConElement.style.top = `${screenHeight / 2 - bodyDimensions / 2}px`;

      this.bodyElement.style.top = `${screenHeight / 2 - bodyDimensions / 2}px`;

      this.rightConElement.style.left = `${screenWidth / 2 + bodyDimensions / 2}px`;
      this.rightConElement.style.top = `${screenHeight / 2 - bodyDimensions / 2}px`;
    } else {
      this.leftConElement.style.left = `${screenWidth / 2 - bodyDimensions / 2}px`;
      this.leftConElement.style.top = `${bodyDimensions}px`;

      this.bodyElement.style.top = `0`;

      this.rightConElement.style.left = `${screenWidth / 2}px`;
      this.rightConElement.style.top = `${bodyDimensions}px`;
    }

    const screenDimensions = Math.floor(bodyDimensions * 0.89); // 256 / 288
    this.screenElement.width = screenDimensions;
    this.screenElement.height = screenDimensions;
    this.screenElement.style.left = `${parseInt(this.bodyElement.style.left, 10) + ((bodyDimensions - screenDimensions) / 2)}px`;
    this.screenElement.style.top = `${parseInt(this.bodyElement.style.top, 10) + ((bodyDimensions - screenDimensions) / 2)}px`;
  }
}
