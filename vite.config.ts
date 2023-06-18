import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(), // take care of aliases from tsconfig.json
  ],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly', // доступ к свойствам css только через styles.fooBar
      // localsConvention: 'camelCase', //  доступ к свойствам css через styles.fooBar и styles['foo-bar']
    },
  },
});
