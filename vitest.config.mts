import "dotenv/config";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx"],
    setupFiles: ["tests/ui/setup.ts"],
    // Integrasi memakai PostgreSQL nyata; Windows/CI lambat butuh ruang lebih dari 5 dtk.
    testTimeout: 30_000,
    hookTimeout: 30_000,
    // File integrasi berbagi database yang sama: jalankan berurutan agar hasil deterministik.
    fileParallelism: false,
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"],
      include: ["src/server/fallback/**", "src/lib/fallback/**"],
    },
  },
});
