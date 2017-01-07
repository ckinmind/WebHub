### ECMAScript 6简介
[教程地址：ECMAScript 6简介](http://es6.ruanyifeng.com/#docs/intro)

---
### 目录
```
1. ECMAScript和JavaScript的关系
2. ES6与ECMAScript 2015的关系
3. 语法提案的批准流程
4. ECMAScript的历史
5. 部署进度
6. Babel转码器
7. Traceur转码器
```


---
### 1. ECMAScript和JavaScript的关系
- ECMAScript和JavaScript的关系是，前者是后者的规格，后者是前者的一种实现（另外的ECMAScript方言还有Jscript和ActionScript）。日常场合，这两个词是可以互换的

---
### 2. ES6与ECMAScript 2015的关系
- 本书中提到“ES6”的地方，一般是指ES2015标准，但有时也是泛指“下一代JavaScript语言”

---
### 3. 语法提案的批准流程
>略

---
### 4. ECMAScript的历史
>略

---
### 5. 部署进度
- 随着时间的推移，支持度已经越来越高了，ES6的大部分特性都实现了
- Node.js是JavaScript语言的服务器运行环境，对ES6的支持度比浏览器更高。通过Node，可以体验更多ES6的特性

---
### 6. Babel转码器
- Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。这意味着，你可以用ES6的方式编写程序，又不用担心现有环境是否支持
- Babel的配置文件是.babelrc，存放在项目的根目录下。使用Babel的第一步，就是配置这个文件
- Babel提供babel-cli工具，用于命令行转码
- babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境。它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码
- babel-register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码
- 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块
- Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码
- Babel提供一个REPL在线编译器，可以在线将ES6代码转为ES5代码。转换后的代码，可以直接作为ES5代码插入网页运行
- 许多工具需要Babel进行前置转码，这里举两个例子：ESLint和Mocha

---
### 7. Traceur转码器
- Google公司的Traceur转码器，也可以将ES6代码转为ES5代码
