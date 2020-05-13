/**
 * @file config-overrides.js
 * @author LeeHan(lihan199301@163.com)
 * 基于customize和react-app-rewired的定制化配置文件
 */

//  从customize-cra引入一些相关的方法
const {
  override,
  addLessLoader, // less配置函数
  fixBabelImports
} = require('customize-cra')

const modifyVars = require('./lessVars')

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars
  }),
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
);