
const BASE_URL = process.env.BASE_URL || `/`
// console.log(BASE_URL);
module.exports = {
  publicPath: BASE_URL,
  lintOnSave: process.env.NODE_ENV !== `production`,
  // template: 'public/index.html',
  chainWebpack: config => {
    // clear the existing entry point
    config.plugin(`html`).tap(args => {
      return args
    })

  },
  runtimeCompiler: true,
  pwa: {
    "name": `Dog breed`,
    "short_name": ``,
    "icons": [
      {
        "src": `${BASE_URL}/android-chrome-192x192.png`,
        "sizes": `192x192`,
        "type": `image/png`
      },
      {
        "src": `${BASE_URL}/android-chrome-512x512.png`,
        "sizes": `512x512`,
        "type": `image/png`
      }
    ],
    "theme_color": `#ffffff`,
    "background_color": `#ffffff`,
    "display": `standalone`
  }
}
