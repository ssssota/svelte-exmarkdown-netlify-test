import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
export default defineConfig(({ command }) => ({
	plugins: [sveltekit()],
	optimizeDeps: {
		exclude: command === 'serve' ? [] : ['remark-parse']
	}
}))
