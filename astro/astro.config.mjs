import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import partytown from "@astrojs/partytown";

import moonlightTheme from "./src/data/moonlight-ii.json" assert { type: "json" };

import rmMath from 'remark-math';
import rmReadingTime from './src/markdown/readingTime.mjs';

import rhKatex from 'rehype-katex';
import rhVideo from './src/markdown/videoRenderer.mjs';
import rhLazyLoading from 'rehype-plugin-image-native-lazy-loading';
import rehypePrettyCode from 'rehype-pretty-code';
import rhSlug from 'rehype-slug';
import rhAutolinkHeadings from 'rehype-autolink-headings'

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
    syntaxHighlight: false,
    remarkPlugins: [rmMath, rmReadingTime],
    rehypePlugins: [
      [
        rehypePrettyCode, // https://rehype-pretty-code.netlify.app/
        {
          keepBackground: false,
          theme: {
            dark: moonlightTheme, //'github-dark',
            light: 'github-light',
          },
        }
      ],
      rhKatex,
      rhLazyLoading,
      [rhVideo, videoOptions],
      rhSlug,
      rhAutolinkHeadings,
    ],
    extendDefaultPlugins: true,
  },
  integrations: [
    image(),
    mdx(),
    react(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap({changefreq: 'daily', lastmod: new Date()}),
  ],
  experimental: {
    viewTransitions: true,
  }
});
