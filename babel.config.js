module.exports = function (api) {
  const plugins = [
    '@babel/plugin-proposal-class-properties',
  ]
  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ]
  api.cache.forever()
  return {
    plugins,
    presets,
  }
}
