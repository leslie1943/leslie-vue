'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

/**
 * 在平时项目的开发环境中，经常会遇到跨域的问题，
 * 尤其是使用vue-cli这种脚手架工具开发时，
 * 由于项目本身启动本地服务是需要占用一个端口的，所以必然会产生跨域的问题
 */
// 过程: 【本地服务器 --》 代理 --》目标服务器 --》拿到数据后通过代理伪装成本地服务请求的返回值 ---》然后浏览器就顺利收到了我们想要的数据】
module.exports = {
  dev: {
    // Various Dev Server settings
    host: 'localhost',
    port: 1943, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    // port number必须要与server中的保持一致
    // network中看不到url和port的变化
    proxyTable: {
      '/api': {
        target: 'http://localhost:2714/api', //目标接口域名
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '' //重写接口
        }
      }
    },

    //😁😁😁😁 经过了上述的配置
    //😁😁😁😁 http://localost:8080/api =====> http://www.abc.com/api


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
