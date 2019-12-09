// export default {
//   modifyBundlerConfig: (config) => {
//     config.module.rules.push({
//       test: /\.scss$/,
//       use: ['style-loader', 'css-loader', 'sass-loader'],
//     })
//     return config
//   },
// }

// exports.onCreateWebpackConfig = ({
// stage, getConfig, rules, loaders, actions,
// }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: [loaders.style(), loaders.css()]
//         },
//       ],
//     },
//   })
// }

export default {
  title: 'Bungalo Ui Legos',
  menu: [],
}
