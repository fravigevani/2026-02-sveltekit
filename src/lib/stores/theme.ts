import { writable } from 'svelte/store';

export const theme = writable<'light' | 'dark'>('dark');

export function toggleTheme() {
  theme.update(current => current === 'dark' ? 'light' : 'dark');
}
