import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
      "/auth": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      '/api': {
        target: "http://localhost:5000",
        changeOrigin:true
    },
  },
  plugins: [react()],
});