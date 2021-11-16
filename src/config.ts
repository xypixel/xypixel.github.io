export interface Config {
  title: string;
  debug: {
    console: boolean;
  };
}

export interface ConfigOptions {
  options?: Partial<Pick<Config, 'title' | 'debug'>>;
}

let config: Config;

export function init (params: ConfigOptions = {}): void {
  config = {
    title: 'XYPixel',
    debug: {
      console: false
    },
    ...params.options
  };

  document.title = config.title;
}

export function getRef (): Config {
  return config;
}
