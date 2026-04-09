import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://joshchomps.github.io',
  base: '/',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
