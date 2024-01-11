import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import UnFonts from 'unplugin-fonts/vite';

export default defineConfig({
	plugins: [
		vue(),
		UnFonts({
			google: {
				families: [{
					name: 'Montserrat',
					styles: 'ital,wght@0,400;0,500;0,600;0,700;1,200;1,400;1,500;1,600;1,700'
				}],
			},
		}),
	],
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	root: './src',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.')[1];
					if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
						extType = 'fonts';
					}
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = 'img';
					}
					return `assets/${extType}/[name][extname]`;
				},
				entryFileNames: 'assets/js/[name].js',
				chunkFileNames: 'assets/js/[name].js',
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "./src/scss/utills/utills.scss" as *;', // グローバルなscss
			},
		},
	},
});
