module.exports = {
  publicPath: './', // 部署应用包时的基本路径
  outputDir: 'dist', //构建时的输出目录（运行 vue-cli-service build 时生成的生产环境构建文件的目录）
  assetsDir: "static", //放置生成的静态资源 (js、css、img、fonts) 目录
  indexPath: "index.html", //html的输出路径
  filenameHashing: true, //文件名哈希
  pages: undefined, // 用于多页配置，默认是 undefined
  lintOnSave: true, // 是否在保存的时候使用 `eslint-loader` 进行检查。
  runtimeCompiler: false, //  是否使用带有浏览器内编译器的完整构建版本
  transpileDependencies: [ /* string or regex */ ], //  babel-loader 默认会跳过 node_modules 依赖。
  productionSourceMap: true, // 是否为生产环境构建生成 source map？
  crossorigin: "", //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  integrity: false, //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  //  调整内部的 webpack 配置
  configureWebpack: {
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }]
    }
  },
  chainWebpack: () => {},
  // 配置 webpack-dev-server 行为。
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      '/api': {
        target: "http://app.rmsdmedia.com",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": ""

        }
      },

      '/foo': {
        target: '<other_url>'
      }

    },
    before: app => {}

  },
  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中),也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给 Css-loader 时，使用 `{ Css: { ... } }`。
    loaderOptions: {
      css: {
        // 这里的选项会传递给 css-loader
      },
      postcss: {
        // 这里的选项会传递给 postcss-loader
      }
    },

    // 为所有的 CSS 及其预处理文件开启 CSS Modules,这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: false
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`, 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {},

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
}