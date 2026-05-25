import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const copyTheme = (): Plugin => ({
  name: "ars-docendi-ui:copy-theme",
  apply: "build",
  closeBundle() {
    copyFileSync(
      resolve(__dirname, "src/styles/theme.css"),
      resolve(__dirname, "dist/theme.css"),
    );
    copyFileSync(
      resolve(__dirname, "src/styles/components.css"),
      resolve(__dirname, "dist/components.css"),
    );
  },
});

export default defineConfig({
  plugins: [
    react(),
    dts({ tsconfigPath: "./tsconfig.lib.json", rollupTypes: true }),
    copyTheme(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
    cssCodeSplit: false,
  },
});
