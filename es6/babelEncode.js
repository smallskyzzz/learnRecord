// 使用Babel可以转码es6语法
// 配置.babelrc文件
//     "presets": [
//       "@babel/env",
//       "@babel/preset-react"
//     ],
//     "plugins": []
//   }
// 安装npm install --save-dev @babel/core
// 安装npm install --save-dev @babel/preset-env
// 安装npm install --save-dev @babel/cli
// # 转码结果写入一个文件
// # --out-file 或 -o 参数指定输出文件
// $ npx babel example.js --out-file compiled.js
// # 或者
// $ npx babel example.js -o compiled.js
//
// # 整个目录转码
// # --out-dir 或 -d 参数指定输出目录
// $ npx babel src --out-dir lib
// # 或者
// $ npx babel src -d lib
//
// # -s 参数生成source map文件
// $ npx babel src -d lib -s

// Babel 默认只转换新的 JavaScript 句法（syntax），而不转换新的 API，比如Iterator、Generator、Set、Map、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
//
// 举例来说，ES6 在Array对象上新增了Array.from方法。Babel 就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

let flag = 0
let a = () => {
    flag ++
}
