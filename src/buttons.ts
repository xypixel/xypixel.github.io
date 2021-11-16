export type Buttons = 'up' | 'dn' | 'lt' | 'rt' | 'a' | 'b';
export interface ButtonsOptions {
  options: {
    callback: (type: Buttons, event: Event) => void;
  }
}

function handleResize (): void {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const screenIsLandscape = screenWidth > screenHeight;
  
  //
}

export function init (params: ButtonsOptions): void {
  const buttons: { [Key in Buttons]: HTMLElement | null } = {
    up: null,
    dn: null,
    lt: null,
    rt: null,
    a: null,
    b: null
  };

  for (const key in buttons) {
    if (Object.prototype.hasOwnProperty.call(buttons, key)) {
      buttons[<Buttons>key] = document.querySelector(`#${key}`);
      buttons[<Buttons>key]!.addEventListener('touchstart', (e) => {
        params.options.callback(<Buttons>key, e);
      });
      buttons[<Buttons>key]!.addEventListener('mousedown', (e) => {
        params.options.callback(<Buttons>key, e);
      });
    }
  }

  handleResize();

  window.onresize = handleResize;
  window.ondeviceorientation = handleResize;
}
