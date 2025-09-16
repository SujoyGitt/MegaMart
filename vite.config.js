// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),        // Default home page
        about: resolve(__dirname, 'about.html'),
        product: resolve(__dirname, 'product.html'),
        contact: resolve(__dirname, 'contact.html'),
        addToCart: resolve(__dirname, 'addToCart.html'),
      }
    }
  }
})
