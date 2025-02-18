// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), icon()],
  site: 'https://jumscrafteur.fr',
  server: {
    headers: {
      'Access-Control-Allow-Origin': 'https://xkcd.vercel.app/?comic=latest',
    }
  }
});