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
  plugins: [react()],
});
