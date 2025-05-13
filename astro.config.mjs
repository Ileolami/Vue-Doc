// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
import liveCode from 'astro-live-code'
import vue from "@astrojs/vue";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react({
      include: ['**/react/*', '**/*.react.*'],
    }),
    vue(
      {
        exclude: ['**/react/*', '**/*.react.*'],
      }
    ),
    liveCode({}),
    starlight({
      title: "Vue.js",
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
            { label: "Introduction", link: "guides/intro" },
            { label: "Quick Start", link: "guides/quick-start" },
            { label: "Vue Component", link: "guides/vue-components" },
          ],
        },
        {
          label: "Essentials",
          items: [
            { label: "Creating An Application", link: "essentials/create" },
            { label: "Template Syntax", link: "essentials/template" },
            { label: "Reactivity Fundamentals", link: "essentials/reactivity" },
            { label: "Computed Properties", link: "essentials/computed" },
            {
              label: "Class and Style Bindings",
              link: "essentials/class-styles",
            },
          ],
        },
        {
          label: "Components In-Depth",
          items: [
            { label: "Registration", link: "components/registration" },
            { label: "Props", link: "components/props" },
            { label: "Events", link: "components/events" },
            { label: "Component v-model", link: "components/component-v" },
            { label: "Fallthrough Attributes", link: "components/fallthrough" },
          ],
        },
        {
          label: "Reusability",
          autogenerate: { directory: "reusability" },
        },
        {
          label: "Built-in Components",
          autogenerate: { directory: "built-in" },
        },
        {
          label: "Scaling Up",
          items: [
            { label: "Single-File Components", link: "scaling-up/sfc" },
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
    }),
  ],
});
