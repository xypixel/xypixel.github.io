import Console from '../src/Console';

describe('Console', () => {
  let console: Console;

  beforeEach(() => {
    console = new Console();
    global.innerWidth = 1024;
    global.innerHeight = 768;
  });

  // describe
});
