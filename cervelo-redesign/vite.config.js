import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        top: "./html/index.html",
      },
      output: {
        // 出力ファイルに付与される hash を取り除く
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
  server: {
    open: "/html/index.html",
  },
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "./src/scss/utills/utills.scss" as *;`, // グローバルなscss
			},
		},
	},
});
