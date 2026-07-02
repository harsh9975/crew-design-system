import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button.tsx", "src/accordion.tsx", "src/alert.tsx", "src/toast.tsx", "src/avatar.tsx", "src/badge.tsx", "src/breadcrumb.tsx", "src/button-group.tsx", "src/card.tsx", "src/checkbox.tsx"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
