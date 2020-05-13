/**
 * @file config-overrides.js
 * @author LeeHan(lihan199301@163.com)
 * 基于customize和react-app-rewired的定制化配置文件
 */

//  从customize-cra引入一些相关的方法
const {
  override,
  addLessLoader, // less配置函数
  addBabelPlugins // babel插件配置函数
} = require('customize-cra')


module.exports = override(    
  addLessLoader(),
  ...addBabelPlugins( // 支持装饰器
    [
      '@babel/plugin-proposal-decorators',
      { legacy: true}
    ]
  )
);