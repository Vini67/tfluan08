import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
    root: 'resources',
    server: {
        open: (process.env.IS_CONTAINER !== "TRUE"),
        hmr: true,
        host: true,
        port: 5173
    },
    resolve: {
        alias: {
            '@fa': path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free'),
        },
    },
    build: {
        outDir: '../public/build',
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            input: [
                "./resources/js/app.ts",
                "./resources/css/app.css"
            ],
            output: {
                assetFileNames: '[name][extname]',
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
            }
        }
    }
})
