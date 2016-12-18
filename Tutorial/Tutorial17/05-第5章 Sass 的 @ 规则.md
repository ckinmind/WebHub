### 第5章 Sass 的 @ 规则 
[教程地址：第5章 Sass 的 @ 规则 ](http://www.imooc.com/code/8789)

---
### 5-1 @import
- Sass 扩展了 CSS 的 @import 规则，让它能够引入 SCSS 和 Sass 文件。 所有引入的 SCSS 和 Sass 文件都会被合并并输出一个单一的 CSS 文件。 另外，被导入的文件中所定义的变量或 mixins 都可以在主文件中使用

---
### 5-2 @media
- Sass 中的 @media 指令和 CSS 的使用规则一样的简单，但它有另外一个功能，可以嵌套在 CSS 规则中。有点类似 JS 的冒泡功能一样，如果在样式中使用 @media 指令，它将冒泡到外面

---
### 5-3 @extend
- Sass 中的 @extend 是用来扩展选择器或占位符

---
### 5-4 @at-root
- @at-root 从字面上解释就是跳出根元素。当你选择器嵌套多层之后，想让某个选择器跳出，此时就可以使用 @at-root

---
### 5-5 @debug
@debug 在 Sass 中是用来调试的，当你的在 Sass 的源码中使用了 @debug 指令之后，Sass 代码在编译出错时，在命令终端会输出你设置的提示 Bug:

---
### 5-6 @warn
- 调试用的，相当于console.log

---
### 5-7 @error
- @error 和 @warn、@debug 功能是如出一辙
