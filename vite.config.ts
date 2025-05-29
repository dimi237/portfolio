import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, './src/components'),
      'pages': path.resolve(__dirname, './src/pages'),
      'utils': path.resolve(__dirname, './src/utils'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'assets': path.resolve(__dirname, './src/assets'),
      'context': path.resolve(__dirname, './src/context'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'services': path.resolve(__dirname, './src/services'),
      'router': path.resolve(__dirname, './src/router'),
      'data': path.resolve(__dirname, './src/data'),
      'theme': path.resolve(__dirname, './src/theme'),
      'api': path.resolve(__dirname, './src/api'),
      'store': path.resolve(__dirname, './src/store'),

    },
  },
  server: {
    port: +(process.env.PORT || 3000),
    host: true,
  }
})
