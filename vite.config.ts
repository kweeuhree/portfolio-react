import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const PWAConfig = {
  includeAssets: ["favicon.ico", "robots.txt"],
  manifest: {
    short_name: "Veronika Kolesnikova | Portfolio",
    name: "Veronika Kolesnikova | Portfolio",
    description: `Welcome to the portfolio website of Veronika Kolesnikova, a dedicated software engineer passionate about programming. 
      I am excited to share my journey with you!`,
    icons: [
      {
        src: "favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    start_url: ".",
    theme_color: "#000000",
    background_color: "#ffffff",
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          three: ["three"],
          drei: ["@react-three/drei"],
        },
      },
    },
  },
  plugins: [react(), VitePWA(PWAConfig)],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
});
