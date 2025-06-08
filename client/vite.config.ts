import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiBaseUrl = env.VITE_API_BASE_URL;
  if (!apiBaseUrl) {
    throw new Error("VITE_API_BASE_URL must be defined in .env");
  }

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: apiBaseUrl,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
