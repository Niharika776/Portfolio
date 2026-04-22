import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change '/portfolio/' to match your GitHub repo name
// e.g. if repo is github.com/niharika/my-portfolio → base: '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/niharika-portfolio/',   // ← your repo name here
})