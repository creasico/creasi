import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import laravel from 'laravel-vite-plugin'
import windicss from 'vite-plugin-windicss'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', ['APP', 'VITE'])

  const rootdir = 'resources/client'

  return {
    resolve: {
      alias: {
        '~/': `${resolve(__dirname, 'resources/client')}/`,
      },
    },

    build: {
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          /**
           * @see https://rollupjs.org/configuration-options/#output-manualchunks
           */
          manualChunks: (id) => {
            if (id.includes('node_modules'))
              return 'vendor'
          },
        },
      },
    },

    define: {
      'import.meta.env.APP_NAME': JSON.stringify(env.APP_NAME),
      'import.meta.env.APP_LOCALE': JSON.stringify(env.APP_LOCALE),
      'import.meta.env.APP_URL': JSON.stringify(env.APP_URL),
      'import.meta.env.APP_ENV': JSON.stringify(env.APP_ENV),
    },

    plugins: [
      /**
       * @see https://laravel.com/docs/vite
       */
      laravel({
        input: [
          `${rootdir}/app.ts`,
        ],
        valetTls: env.APP_ENV === 'local' && env.APP_URL.startsWith('https://'),
        // refresh: true,
      }),

      /**
       * @see https://windicss.org/integrations/vite.html
       */
      windicss(),
    ],
  }
})
