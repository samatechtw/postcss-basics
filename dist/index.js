"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  default: () => lib_default
});
module.exports = __toCommonJS(lib_exports);
var import_autoprefixer = __toESM(require("autoprefixer"));
var import_postcss_mixins = __toESM(require("postcss-mixins"));
var import_postcss_simple_vars = __toESM(require("postcss-simple-vars"));
var import_postcss_nested = __toESM(require("postcss-nested"));
var import_postcss_colors = __toESM(require("@samatech/postcss-colors"));
var plugins = [
  import_autoprefixer.default,
  import_postcss_mixins.default,
  import_postcss_simple_vars.default,
  import_postcss_nested.default,
  (0, import_postcss_colors.default)()
];
var lib_default = (opts = {}) => {
  return plugins;
};
