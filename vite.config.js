import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Puoi omettere questa linea se vuoi usare il valore di default '/'
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/scss/_colors.scss";@import "./src/scss/_typo.scss";',
      },
    },
  },
  server: {
    proxy: {
      //"/api": {
        //target: "http://localhost", // L'URL del tuo server PHP locale
        //changeOrigin: true,
        //rewrite: (path) => path.replace(/^\/api/, ""),
      //},
    },
  },
});
