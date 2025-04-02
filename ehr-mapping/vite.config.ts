import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    rollupOptions: {
      external: ['@testing-library/react', 'jest', 'expect'],
    },
  },
  // @ts-ignore: Extend Vite config to include test property
  test: {
    exclude: ['**/*.test.tsx', '**/*.spec.tsx'],
  },
  resolve: {
    alias: {
      '~': '/app',
    },
  },
  server: {
    port: 5173,
  },
});
