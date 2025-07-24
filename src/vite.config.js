console.log('🚀 vite.config.js loaded')
import { defineConfig } from 'vite'
// …后面原有配置

import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    VitePWA({
      filename: 'manifest.webmanifest',
      includeAssets: ['icons/icon-192.png', 'icons/icon-512.png', 'favicon.ico'],
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico,webmanifest}']
      },
      manifest: {
        name: 'KWGGAME',
        short_name: 'KWG',
        start_url: '/',
        display: 'standalone',
        background_color: '#151110',
        theme_color: '#ff5200',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
});
