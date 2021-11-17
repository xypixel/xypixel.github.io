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
      expect(canvas.getRef().dimensions).toBe(256);
    });

    it('sets custom pixel scale', () => {
      canvas.init({
        options: {
          dimensions: 1024
        }
      });
      expect(canvas.getRef().dimensions).toBe(1024);
    });

    it('queries element and creates context', () => {
      canvas.init();
      expect(canvas.getRef().element).toBeTruthy();
      expect(canvas.getRef().context).toBeTruthy();
    });
  });

  describe('getRef()', () => {
    it('throws if element not found', () => {
      expect(() => {
        canvas.getRef()
      }).toThrowError('Please call canvas#init first');
    });
  });

  xdescribe('calculatePixelScale()', () => {
    it('sets correct pixel scale when viewport is landscape', () => {
      //
    });
  });

  xdescribe('updateCanvas()', () => {
    it('', () => {
      //
    });
  });
});
