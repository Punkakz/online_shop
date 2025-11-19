import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/',
    css: {
      devSourcemap: false
    },
    server: {
      host: true,
      port: 3000,
      strictPort: true,
      allowedHosts: [
	  '16-16-128-178.nip.io',
	  'localhost',
	  'akhtar-ansari.site',
	  'www.akhtar-ansari.site'
]

    }
})
