import * as canvas from '../src/canvas';

describe('canvas', () => {
  beforeEach(() => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
  });

  afterEach(() => {
    canvas.resetCanvas();
  })

  describe('init()', () => {
    it('keeps default pixel scale', () => {
      canvas.init();
      expect(canvas.getCanvas().dimensions).toBe(256);
    });

    it('sets custom pixel scale', () => {
      canvas.init({
        dimensions: 1024
      });
      expect(canvas.getCanvas().dimensions).toBe(1024);
    });

    it('queries element and creates context', () => {
      canvas.init();
      expect(canvas.getCanvas().element).toBeTruthy();
      expect(canvas.getCanvas().context).toBeTruthy();
    });
  });

  describe('getCanvas()', () => {
    it('throws if element not found', () => {
      expect(() => {
        canvas.getCanvas()
      }).toThrowError('Please call canvas#init first');
    });
  });

  xdescribe('handle resizing', () => {
    it('', () => {
      //
    });
  });
});
