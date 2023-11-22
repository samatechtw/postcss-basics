import autoprefixer from 'autoprefixer'
import postcssMixins from 'postcss-mixins'
import postcssSimpleVars from 'postcss-simple-vars'
import postcssNested from 'postcss-nested'
import postcssColors from '@samatech/postcss-colors'

const plugins = [
  autoprefixer,
  postcssMixins,
  postcssSimpleVars,
  postcssNested,
  postcssColors(),
]

export default (opts = {}) => {
  // TODO -- pass along plugin options
  return plugins
}
