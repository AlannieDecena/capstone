// Import the defineConfig function from the 'vite' package
// Import the react plugin from the '@vitejs/plugin-react' package
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Export the default configuration object for Vite
export default defineConfig({
  // Add the react plugin to the array of plugins
  plugins: [react()],
})
//This is a code that helps your program run smoothly. It uses special tools called "vite" and "react" to make your program work better. 
//The code also uses something called "defineConfig" to make sure everything is set up correctly. 
//It's like a recipe that tells your program what ingredients to use.