interface Canvas {
  element: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
}

const canvas: Canvas = {
  element: null,
  context: null
};

export function getCanvas (): Canvas {
  if (!canvas.element) {
    canvas.element = document.querySelector('canvas');
    canvas.context = canvas.element!.getContext('2d');
  }

  return canvas;
}
