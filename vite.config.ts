import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/network-dept-portal/', // 這裡要跟你 GitHub 上的 Repository 名稱一模一樣
})