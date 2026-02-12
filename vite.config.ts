import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const defaultBase = './'
const envBase = process.env.VITE_BASE_PATH
const githubRepo = process.env.GITHUB_REPOSITORY?.split('/')[1]
const githubBase = githubRepo ? `/${githubRepo}/` : defaultBase
const base = envBase ?? (process.env.GITHUB_ACTIONS ? githubBase : defaultBase)

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [vue()],
})
