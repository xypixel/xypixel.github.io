import { Canvas } from "./canvas";

export type Buttons = 'up' | 'dn' | 'lt' | 'rt' | 'select' | 'start' | 'b' | 'a';

export interface ButtonsOptions {
  options: {
    onPressDown: (type: Buttons, event: Event) => void;
    onPressUp: (type: Buttons, event: Event) => void;
  },
  canvas?: Canvas;
}

let canvas: Canvas | undefined;

function handleResize (): void {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const screenIsLandscape = screenWidth > screenHeight;
  
  if (screenIsLandscape) {
    
  }
}

export function init (params: ButtonsOptions): void {
  const buttons: { [Key in Buttons]: HTMLElement | null } = {
    up: null,
    dn: null,
    lt: null,
    rt: null,
    select: null,
    start: null,
    b: null,
    a: null
  };

  canvas = params.canvas;

  for (const key in buttons) {
    if (Object.prototype.hasOwnProperty.call(buttons, key)) {
      buttons[<Buttons>key] = document.querySelector(`#${key}`);
      buttons[<Buttons>key]!.addEventListener('touchstart', (e) => {
        params.options.onPressDown(<Buttons>key, e);
      });
      buttons[<Buttons>key]!.addEventListener('mousedown', (e) => {
        params.options.onPressDown(<Buttons>key, e);
      });
      buttons[<Buttons>key]!.addEventListener('touchend', (e) => {
        params.options.onPressUp(<Buttons>key, e);
      });
      buttons[<Buttons>key]!.addEventListener('mouseup', (e) => {
        params.options.onPressUp(<Buttons>key, e);
      });
    }
  }

  handleResize();

  window.onresize = handleResize;
  window.ondeviceorientation = handleResize;
}
