import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    'import.meta.env.VITE_STREAMLIT': JSON.stringify('true'),
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: '../streamlit_assets',
    emptyOutDir: true,
    minify: 'esbuild',
    lib: {
      entry: './src/streamlit.jsx',
      formats: ['es'],
      fileName: () => 'terminal.js',
    },
  },
});
