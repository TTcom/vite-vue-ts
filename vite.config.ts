import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy' //兼容低版本浏览器插件
import styleImport from 'vite-plugin-style-import'
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'
const Timestamp = new Date().getTime()
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  plugins: [
    legacy({
      targets: ['> 1%, last 1 version, ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'], // 面向IE11时需要此插件
    }),
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: (name) => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    }),
    eslintPlugin({fix:true})
  ],
  build: {
    // 去除console
    rollupOptions:{
      output: {
        entryFileNames: `assets/[name].${Timestamp}.js`,
        chunkFileNames: `assets/[name]-[hash].${Timestamp}.js`,
        assetFileNames: `assets/[name]-[hash].${Timestamp}.css`
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: { // 更改主题在这里
        //   'primary-color': '#52c41a',
        //   'link-color': '#1DA57A',
        //   'border-radius-base': '2px'
        // },
        javascriptEnabled: true
      }
    }
  },
  base: './', // 设置打包路径
  server: {
    // host: '0.0.0.0',
    port: 8085, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    https: false,
    cors: true, // 允许跨域

    // 设置代理，根据我们项目实际情况配置
     proxy: {
       '/weapi': {
         target: 'https://interface.music.163.com/',
        changeOrigin: true,
         secure: false,
         rewrite: (path) => path.replace('/api/', '/weapi')
       }
     }
  }
})
