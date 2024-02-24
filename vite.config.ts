import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: { enabled: true },
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "apple-touch-icon.png", "mask-icon.svg"],
      manifest: {
        name: "Kubank App",
        short_name: "KuBank",
        description: "Kubank app, the best bank for your Ku",
        theme_color: "#000040",
        icons: [
          {
            src: "pwa-144-144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "pwa-192-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
