import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginImp from 'vite-plugin-imp'

export default defineConfig({
    plugins: [
        vue(),
        vitePluginImp({
            libList: [
                {
                    libName: 'element-plus',
                    style: (name) => {
                      return `element-plus/lib/theme-chalk/${name}.css`
                    }
                }
            ]
        }),
    ]
})
