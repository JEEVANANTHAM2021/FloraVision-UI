import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@" : "/src",
      "@src" : "/src",
      "@components" : "/src/components",
      "@assets" : "/src/assets",
      "@pages"  : "/src/pages",
    },
    extensions : [".jsx", ".js", ".tsx", ".ts", ".json"]
  },
  
});
