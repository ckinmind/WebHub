### 移动端开发框架Zepto.js入门
[教程地址：移动端开发框架Zepto.js入门](http://www.imooc.com/learn/229)

---
### 第1章 常见移动端开发框架简介
#### 1-1 常见移动端开发框架简介
- 介绍了zepto和jQuery的区别

---
### 第2章 Zepto框架介绍和入门
#### 2-1 Zepto 介绍
- 为什么要使用zepto
  - 无缝接入和改造现有项目
  - 更好的代码执行效率
- 对比其他框架优势
  - 更低廉的学习成本
  - 比较轻量化，没有提供复杂的模式

#### 2-2 Zepto 选择器
- `$`本身是一个函数构造器，做dom选择器
- 介绍了选择器的执行流程

---
### 第3章 Zepto框架核心API
#### 3-1 Zepto core
- 介绍了一些zepto的api

#### 3-2 Zepto 事件
- 源码里不包含移动端touch事件，需要再引入一个第三方touch库

#### 3-3 zepto ajax
- zepto自带四个核心模块：事件，ajax, IE兼容
- zepto的ajax使用了XMLHttpRequest Level 2协议，支持跨域访问
- 可以用jsonp的方法来跨域

#### 3-4 Zepto 插件
- zepto的touch事件都是插件

---
### 第4章 移动端简单网页案例
#### 4-1 移动端案例介绍
- 网站演示

#### 4-2 项目的目录结构
- 一个项目的目录结构：node.js做后台，应用JS模板引擎ejs,最后发布有js/css的合并压缩的目录

#### 4-3 页面结构搭建
- 后台用的是express框架，前端有入口文件

#### 4-4 页面的JS逻辑
- 用canvas做图片加载的加速，不用img的src，原因是canvas能够将图片转成data: url base64的形式，然后就可以缓存在本地的localstorage中，然后下次访问就直接读取localstorage中了
