import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "b7d8-2401-4900-4e1b-c605-cd89-c8a5-6725-548c.ngrok-free.app",
    ],
  },
});
