import { defineConfig } from 'astro/config';

// Change `site` and `base` to match your deployment target.
// For GitHub Pages at <user>.github.io/<repo>, set base to '/<repo>/'.
export default defineConfig({
  site: 'https://donjguido.github.io',
  base: '/small-to-large-model-monitoring-frontier/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
