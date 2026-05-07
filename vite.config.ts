import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function getBasePath() {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
  if (process.env.GITHUB_ACTIONS !== 'true' || !repositoryName) {
    return '/';
  }

  return repositoryName.endsWith('.github.io') ? '/' : `/${repositoryName}/`;
}

export default defineConfig({
  base: getBasePath(),
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        main: 'src/main.tsx',
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  plugins: [react()],
});
