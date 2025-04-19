// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		starlight({
			title: 'Vue.js',
			customCss: [
				// Relative path to your custom CSS file
				'./src/style/custom.css',
			  ],
			favicon: './public/logo.svg',
			logo: {
				src: './public/logo.svg',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vuejs/' },
				{ icon: 'twitter', label: 'Twitter', href: 'https://twitter.com/vuejs' },
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/vuejs' }
			],
			sidebar: [
				{
					label: 'Getting Started',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Essentials',
					autogenerate: { directory: 'essentials' },
				},
				{
					label: 'Components In-Depth',
					autogenerate: { directory: 'components'}
				},
				{
					label: 'Reusability',
					autogenerate: { directory: 'reusability'}
				},
				{
					label: 'Built-in Components',
					autogenerate: { directory: 'built-in'}
				},
				{
					label: 'Scaling Up',
					autogenerate: { directory: 'scaling-up'}
				},
				{
					label: 'Best Practices',
					autogenerate: { directory: 'best-practices'}
				},
				{
					label: 'Typescript',
					autogenerate: { directory: 'typescript'}
				},
				{
					label: 'Extra Topics',
					autogenerate: { directory: 'extra-topics'}
				}
			],
		}),
	],
});
