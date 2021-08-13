const plugins = [
  require('autoprefixer'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('@samatech/postcss-colors'),
]

module.exports = (opts = {}) => {
  // TODO -- pass along plugins
  return plugins
}
