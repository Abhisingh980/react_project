import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "d6c0-2401-4900-4e1b-c605-cd89-c8a5-6725-548c.ngrok-free.app",
    ],
  },
});
