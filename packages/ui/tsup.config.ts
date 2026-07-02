import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button.tsx", "src/accordion.tsx", "src/alert.tsx", "src/toast.tsx", "src/avatar.tsx", "src/badge.tsx", "src/breadcrumb.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
