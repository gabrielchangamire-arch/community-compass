import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base` matters for GitHub Pages: the site is hosted under
// /community-compass so all asset paths must be prefixed.
export default defineConfig({
  base: "/community-compass/",
  plugins: [react()],
  server: { port: 5174 },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    css: false,
  },
});
