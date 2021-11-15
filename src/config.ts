export interface Config {
  title: string;
}

let config: Config;

export function init (options: Partial<Config> = {}): void {
  config = {
    ...config,
    ...options
  };

  document.title = config.title;
}

export function getConfig (): Config {
  return config;
}
