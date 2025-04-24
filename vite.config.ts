import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Needed for path aliases

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set up path aliases (adjust according to your project structure)
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist", 
    emptyOutDir: true,
    sourcemap: true,
  }
});
