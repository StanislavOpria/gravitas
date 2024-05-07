import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "modules", // es2015
    assetsDir: "static",
    outDir: "./build",
    manifest: true,
    sourcemap: true,
  },
  plugins: [react()],
  server: {
    port: 8080,
    cors: false,
  },
  base: "/gravitas/",
});
