### 第3章 你也有控制权（DOM操作）
[教程地址： 第3章 你也有控制权（DOM操作）](http://www.imooc.com/code/468)


---
### 3-1 认识DOM
- 文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。
- HTML文档可以说由节点构成的集合，三种常见的DOM节点:
  - 元素节点：上图中`<html>、<body>、<p>`等都是元素节点，即标签。
  -  文本节点:向用户展示的内容，如`<li>...</li>`中的JavaScript、DOM、CSS等文本
  - 属性节点:元素属性，如`<a>`标签的链接属性`href="http://www.imooc.com"`

---
### 3-2 通过 ID 获取元素
- 通过ID获取元素:`document.getElementById('id') `
- 获取的元素是一个对象，如想对元素进行操作，我们要通过它的属性或方法。

---
### 3-3 innerHTML 属性
- innerHTML 属性用于获取或替换 HTML 元素的内容

---
### 3-4 改变 HTML 样式
- HTML DOM 允许 JavaScript 改变 HTML 元素的样式,通过`Object.style.property=new style;`

```
常见的属性有：
backgroundColor
height
width
color
font
fontFamily
fontSize
```
>注意有些属性和css名称的区别

---
### 3-5 显示和隐藏（display属性）
- `Object.style.display = value` 显示和隐藏（display属性）

---
### 3-6 控制类名（className 属性）
- `object.className = classname`取元素的class 属性, 为网页内的某个元素指定一个css样式来更改该元素的外观



