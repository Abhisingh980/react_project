import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "15fa-2401-4900-16be-effc-4c91-d7f4-e506-c66a.ngrok-free.app",
    ],
  },
});
