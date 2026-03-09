import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// Trigger Vercel Deployment
export default defineConfig({
  plugins: [react()],
});
