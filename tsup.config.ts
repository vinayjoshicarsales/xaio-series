import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  clean: true,
  loader: {
    ".step": "file",
    ".stp": "file",
  },
});
