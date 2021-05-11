/*
 * @Author: w
 * @Date: 2021-05-10 16:21:06
 * @LastEditors: w
 * @LastEditTime: 2021-05-11 09:54:48
 */
const { name } = require("./package");
const path = require('path');

module.exports = {
  filenameHashing: true,
  runtimeCompiler: true,
  devServer: {
    port: 1002,
    open: true,
    disableHostCheck: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
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
  // 自定义webpack配置
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
};
