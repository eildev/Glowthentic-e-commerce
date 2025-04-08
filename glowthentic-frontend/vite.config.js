import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://backend.glowthentic.store",
        changeOrigin: true,
        secure: false,
      },
      "/sanctum": {
        target: "https://backend.glowthentic.store",
        changeOrigin: true,
        secure: false,
      },
    },

    // host: "127.0.0.1", // This allows access from any network interface
    // host: "https://backend.glowthentic.store", // This allows access from any network interface
    host: "0.0.0.0",
    port: 5173, // Optional: Specify the port if you want to use a specific one
  },
  optimizeDeps: {
    include: ["dompurify"],
  },
});

