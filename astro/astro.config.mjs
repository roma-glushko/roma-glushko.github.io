import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.romaglushko.com/',
  integrations: [
    mdx(), 
    sitemap(), 
    react(), 
    image(), 
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ]
});