import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				primary: 'var(--font-primary)',
				secondary: 'var(--font-secondary)'
			},
			colors: {
				background: {
					primary: 'var(--color-background-primary)'
				},
				content: {
					primary: 'var(--color-content-primary)',
					secondary: 'var(--color-content-secondary)'
				},
				link: {
					default: 'var(--color-link-default)'
				},
				filter: {
					'background-selected': 'var(--color-filter-background-selected)',
					'content-selected': 'var(--color-filter-content-selected)'
				}
			}
		}
	}
};
