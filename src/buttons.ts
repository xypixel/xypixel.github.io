export type Buttons = 'up' | 'dn' | 'lt' | 'rt' | 'a' | 'b';
export type ButtonCallback = (type: Buttons, event: Event) => void;

export function init (callback: ButtonCallback): void {
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
        callback(<Buttons>key, e);
      });
      buttons[<Buttons>key]!.addEventListener('mousedown', (e) => {
        callback(<Buttons>key, e);
      });
    }
  }
}
