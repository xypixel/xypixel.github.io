export interface Config {
  title: string;
  debug: {
    console: boolean;
  };
}

let config: Config;

export function init (options: Partial<Config> = {}): void {
  config = {
    title: 'XYPixel',
    debug: {
      console: false
    },
    ...options
  };

  document.title = config.title;
}

export function getConfig (): Config {
  return config;
}
