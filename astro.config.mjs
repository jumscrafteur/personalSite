// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://jumscrafteur.fr',
  server: {
    headers: {
      'Access-Control-Allow-Origin': 'https://xkcd.vercel.app/?comic=latest',
    }
  }
});