import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";

import rmMath from 'remark-math';
import rmReadingTime from './src/markdown/readingTime.mjs';

import rhKatex from 'rehype-katex';
import rhVideo from './src/markdown/videoRenderer.mjs';
import rhLazyLoading from 'rehype-plugin-image-native-lazy-loading';

const videoOptions = {
  width: "100%",
  height: "auto",
  preload: "auto",
  muted: true,
  autoplay: true,
  playsinline: true,
  controls: true,
  loop: true,
};

// https://astro.build/config
export default defineConfig({
  site: 'https://www.romaglushko.com/',
  // trailingSlash: "always",
  output: 'static',
  compressHTML: true,
  markdown: {
    drafts: true,
    syntaxHighlight: "prism",
    remarkPlugins: [rmMath, rmReadingTime],
    rehypePlugins: [
      rhKatex,
      rhLazyLoading,
      [rhVideo, videoOptions],
    ],
    extendDefaultPlugins: true,
  },
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
