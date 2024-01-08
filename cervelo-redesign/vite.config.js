import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
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
			input: {
				top: './src/index.html',
				bikes: './src/bikes/bikes.html',
			},
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split('.')[1];
					//Webフォントファイルの振り分け
					if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
						extType = 'fonts';
					}
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = 'imgs';
					}
					if (assetInfo.name === 'top.css') {
						return 'css/index.css';
					}
					if (assetInfo.name === 'header.css') {
						return 'parts/css/parts.css';
					}
					if (extType === 'css') {
						return '[name]/css/index.css';
					}
					return `${extType}/[name][extname]`;
				},
				entryFileNames: (chunkInfo) => {
					if (`[name]` == 'top') {
						return 'js/index.js';
					}
					return '[name]/js/index.js';
				},
				chunkFileNames: 'parts/js/parts.js',
			},
		},
	},
	server: {
		open: './src/index.html',
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: '@use "./src/scss/utills/utills.scss" as *;', // グローバルなscss
			},
		},
	},
});
