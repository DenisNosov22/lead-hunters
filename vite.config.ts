import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function getBasePath() {
  if (process.env.GITHUB_PAGES !== 'true') {
    return '/';
  }

  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
  return repositoryName.endsWith('.github.io') ? '/' : `/${repositoryName}/`;
}

export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
});
