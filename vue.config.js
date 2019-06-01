
'use strict'
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
process.env.RESPONSIVEVOICE_KEY = process.env.NODE_ENV === `production`? 'VjvwBt46' : 'eosxOtN4' ;
const BASE_URL = process.env.BASE_URL || `/`
// console.log(BASE_URL);


module.exports = {
  publicPath: BASE_URL,
  lintOnSave: process.env.NODE_ENV !== `production`,
  filenameHashing: process.env.NODE_ENV === `production`,
  // template: 'public/index.html',
  chainWebpack: config => {
    // clear the existing entry point
    // const RESPONSIVEVOICE_KEY = process.env.NODE_ENV === `production`? 'VjvwBt46' : 'eosxOtN4' ;
    config.plugin(`html`).tap(args => {
      args.RESPONSIVEVOICE_KEY = process.env.NODE_ENV === `production`? 'VjvwBt46' : 'eosxOtN4' ;
      return args
    })
     // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      

  },
  runtimeCompiler: true,
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: resolve('src/sw.js'),
      // ...other Workbox options...
    }
  },
  css: {
    
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "~@/style/global.scss"; `
      }
    }
  }
}
