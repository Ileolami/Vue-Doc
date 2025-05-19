// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import liveCode from 'astro-live-code'
import vue from "@astrojs/vue";
import starlightVideos from 'starlight-videos'
// https://astro.build/config
export default defineConfig({
    i18n: {
    locales: ["es", "en", "pt-br", "fr", "ja", "zh-CN"],
    defaultLocale: "en",
  },
  integrations: [
    starlightVideos(),
    react({
    include: ['**/react/*', '**/*.react.*'],
  }), vue(
    {
      exclude: ['**/react/*', '**/*.react.*'],
    }
  ), liveCode({}), starlight({
    title: "Vue.js",
    expressiveCode: {
        themes: ['catppuccin-mocha'],
          styleOverrides: {
          borderRadius: '0.5rem',
          frames: {
            shadowColor: '#124',
          },
        },
      },
    tableOfContents: {maxHeadingLevel: 2 },
    customCss: [
      // Relative path to your custom CSS file
      "./src/styles/custom.css",
    ],
    favicon: "/logo.svg",
    logo: {
      src: "./public/logo.svg",
    },
    social: [
      { icon: "github", label: "GitHub", href: "https://github.com/vuejs/" },
      {
        icon: "twitter",
        label: "Twitter",
        href: "https://twitter.com/vuejs",
      },
      { icon: "discord", label: "Discord", href: "https://discord.gg/vuejs" },
    ],
    sidebar: [
      {
        label: "Getting Started",
        items:[
          {slug: "guides/intro"},
          {slug: "guides/quick-start"},
          {slug: "guides/vue-components"},
        ]
      },
      {
        label: "Essentials",
        items: [
         {slug: "essentials/create"},
         {slug: "essentials/template"},
         {slug: "essentials/reactivity"},
         {slug: "essentials/computed"},
         {slug: "essentials/class-styles"},
        ],
      },
      {
        label: "Components In-Depth",
        items: [
          {slug: "components/registration"},
          {slug: "components/props"},
          {slug: "components/events"},
          {slug: "components/component-v"},
          {slug: "components/fallthrough"},
        ],
      },
      {
        label: "Reusability",
        items: [
          {slug: "reusability/composables"},
          {slug: "reusability/custom"},
          {slug: "reusability/plugins"},
        ],
      },
      {
        label: "Built-in Components",
        items: [
          {slug: "built-in/transition"},
          {slug: "built-in/transition-group"},
          {slug: "built-in/keep-alive"},
          {slug: "built-in/suspense"},
          {slug: "built-in/teleport"},
        ],
      },
      {
        label: "Scaling Up",
        items: [
          {slug: "scaling-up/sfc"},
        ],
      },
      {
        label: "Best Practices",
        autogenerate: { directory: "best-practices" },
      },
      {
        label: "Typescript",
        autogenerate: { directory: "typescripts" },
      },
      {
        label: "Extra Topics",
        autogenerate: { directory: "extra-topics" },
      },
    ],
  }), ],
});