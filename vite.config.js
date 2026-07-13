import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'Campamento Jovenes 2026',
        short_name: 'Campamento 2026',
        description: 'App del campamento de jovenes: horario, grupos, actividades, oracion y cancionero',
        theme_color: '#2B1220',
        background_color: '#2B1220',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        // Precachea absolutamente todo lo generado en el build (JS, CSS, HTML, fuentes, JSON de datos)
        // para que la app funcione 100% sin conexion desde la primera visita.
        globPatterns: ['**/*.{js,css,html,png,svg,woff,woff2}'],
        cleanupOutdatedCaches: true
      },
      devOptions: {
        enabled: true
      }
    })
  ]
});
