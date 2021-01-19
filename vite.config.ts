import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import * as path from 'path'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.juejin.cn/recommend_api/v1',
        changeOrigin: true,
        autoRewrite: true,
        followRedirects: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  css: {
    modules: {
      generateScopedName: "[local]__[hash:base64:5]"
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    vitePluginImp({
      libList: [
        {
          libName: 'ant-design-vue',
          style: (name) => {
            // return `element-plus/lib/theme-chalk/${name}.css`
            return `ant-design-vue/lib/${name}/style/index.css`
          }
        }
      ]
    }),
  ],
  optimizeDeps: {
    include: [
      // 'element-plus/lib/locale/lang/zh-cn',
      // 'element-plus/lib/locale',
      // 'dayjs/locale/zh-cn'
    ]
  }
})
