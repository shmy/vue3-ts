import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  server: {
    proxy: {
      '^\/api': {
        target: 'http://www.zdziyuan.com/inc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
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
