// module.exports = {
//     module: {
//       rules: [
//         // ... other rules omitted
  
//         // this will apply to both plain `.scss` files
//         // AND `<style lang="scss">` blocks in `.vue` files
//         {
//             test: /\.sass$/,
//             use: [
//               'vue-style-loader',
//               'css-loader',
//               {
//                 loader: 'sass-loader',
//                 options: {
//                   indentedSyntax: true,
//                   includePaths: ["@/style/_variables.scss"]
//                 }
//               }
//             ]
//           }
//       ]
//     },
//     // plugin omitted
//   }