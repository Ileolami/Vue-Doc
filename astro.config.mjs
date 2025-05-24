// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import liveCode from "astro-live-code";
import vue from "@astrojs/vue";
import starlightVideos from "starlight-videos";
import starlightScrollToTop from "starlight-scroll-to-top";
// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en", "pt-br", "fr", "ja", "zh-CN"],
    defaultLocale: "en",
  },
  integrations: [
    starlightVideos(),
    react({
      include: ["**/react/*", "**/*.react.*"],
    }),
    vue({
      exclude: ["**/react/*", "**/*.react.*"],
    }),
    liveCode({}),
    starlight({
      editLink: {
        baseUrl: "https://github.com/Ileolami/Vue-Doc/tree/main",
      },
      title: "Vue.js",
      plugins: [
        starlightScrollToTop({
          position: "right",
          tooltipText: "Back to top",
          showTooltip: true,
          smoothScroll: true,
          threshold: 20,
          svgPath: "M12 4L8 10H10V16H14V10H16L12 4M10 16L12 20L14 16",
          svgStrokeWidth: 1,
          borderRadius: "50",
        }),
      ],
      expressiveCode: {
        themes: ["catppuccin-mocha"],
        styleOverrides: {
          borderRadius: "0.5rem",
          frames: {
            shadowColor: "#124",
          },
        },
      },
      components: {
        TableOfContents: "./src/components/overrides/TableOfContents.astro",
      },
      tableOfContents: { maxHeadingLevel: 2 },
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
          items: [
            { slug: "guides/intro" },
            { slug: "guides/quick-start" },
            { slug: "guides/vue-components" },
          ],
        },
        {
          label: "Essentials",
          items: [
            { slug: "essentials/create" },
            { slug: "essentials/template" },
            { slug: "essentials/reactivity" },
            { slug: "essentials/computed" },
            { slug: "essentials/class-styles" },
          ],
        },
        {
          label: "Components In-Depth",
          items: [
            { slug: "components-in-depth/registration" },
            { slug: "components-in-depth/props" },
            { slug: "components-in-depth/events" },
            { slug: "components-in-depth/component-v" },
            { slug: "components-in-depth/fallthrough" },
          ],
        },
        {
          label: "Reusability",
          items: [
            { slug: "reusability/composables" },
            { slug: "reusability/custom" },
            { slug: "reusability/plugins" },
          ],
        },
        {
          label: "Built-in Components",
          items: [
            { slug: "built-in/transition" },
            { slug: "built-in/transition-group" },
            { slug: "built-in/keep-alive" },
            { slug: "built-in/teleport" },
            { slug: "built-in/suspense" },
          ],
        },
        {
          label: "Scaling Up",
          items: [
            { slug: "scaling-up/sfc" },
            { slug: "scaling-up/tooling" },
            { slug: "scaling-up/routing" },
            { slug: "scaling-up/state-management" },
            { slug: "scaling-up/testing" },
          ],
        },
        {
          label: "Best Practices",
          items: [
            { slug: "best-practices/production-deploy" },
            { slug: "best-practices/performance" },
            { slug: "best-practices/accessibilty" },
            { slug: "best-practices/security" },
          ],
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
    }),
  ],
});
