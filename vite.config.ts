import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ellipsol-website/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
