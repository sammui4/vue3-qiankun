/*
 * @Author: w
 * @Date: 2021-05-10 16:21:06
 * @LastEditors: w
 * @LastEditTime: 2021-05-11 09:55:25
 */
const path = require('path');

module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 1001,
    open: true,
    // disableHostCheck: true,
    // proxy: {
    //   '^/rock/api': {
    //     target: 'http://rock-test.crosstech.top:8080',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/rock/api': '',
    //     },
    //   },
    //   '/api': {
    //     target: 'http://dyt-gateway:9999',
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //   },
    // },
  },
};
