// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/network-dept-portal/', // 👈 這裡請確保前後都有斜線，且完全對應你的 GitHub 倉庫名
})