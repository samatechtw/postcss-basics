// lib/index.ts
import autoprefixer from "autoprefixer";
import postcssMixins from "postcss-mixins";
import postcssSimpleVars from "postcss-simple-vars";
import postcssNested from "postcss-nested";
import postcssColors from "@samatech/postcss-colors";
var plugins = [
  autoprefixer,
  postcssMixins,
  postcssSimpleVars,
  postcssNested,
  postcssColors()
];
var lib_default = (opts = {}) => {
  return plugins;
};
export {
  lib_default as default
};
