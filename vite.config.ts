import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    outDir: "./dist",
    emptyOutDir: true,
  },
});
