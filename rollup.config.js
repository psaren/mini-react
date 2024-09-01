import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/mini-react.js', // 入口文件
  output: {
    file: 'dist/mini-react.js', // 输出文件
    format: 'iife', // 立即调用函数表达式，适合浏览器环境
    name: 'MiniReact', // 全局变量名称
  },
  plugins: [
    nodeResolve(), // 解析 node_modules 中的模块
    commonjs(), // 转换 CommonJS 模块为 ES6
  ],
};