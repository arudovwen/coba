import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { vercelPreset } from "@vercel/react-router/vite";

export default defineConfig({
  plugins: [reactRouter(), tailwindcss(), vercelPreset()],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@pages": "/src/pages",
      "@layouts": "/src/layouts",
    },
  },
});
