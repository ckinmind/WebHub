### 第3章 Sass的语法格式及编译调试 
[教程地址：第3章 Sass的语法格式及编译调试 ](http://www.imooc.com/code/6376)

---
### 3.1 Sass 语法格式
- 推荐使用scss的语法格式

### 3.2 Sass 编译
>略

### 3.3 [Sass]命令编译
>略

### 3.4 [Sass]GUI 界面工具编译
- 再用koala

### 3.5 [Sass]自动化编译
>略

### 3.6 [Sass]常见的编译错误
- 注意文件编码
- 注意不要有中文出现在路径中

### 3.7 [Sass]不同样式风格的输出方法
- 嵌套输出方式 nested
- 展开输出方式 expanded  （目前使用这种）
- 紧凑输出方式 compact 
- 压缩输出方式 compressed

### 3.8 [Sass]嵌套输出方式 nested
```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none; }
```
>嵌套输出方式就是结尾花括号不单独一行

### 3.9 [Sass]展开输出方式 expanded
- 就是最正统的css方式，例子略

### 3.10 [Sass]紧凑输出方式 compact
- 就是一个样式代码在一行

### 3.11 [Sass]压缩输出方式 compressed
- 就是全是压缩在一起

### 3.12 Sass 的调试
- Sass 调试一直以来都是一件头痛的事情，使用 Sass 的同学都希望能在浏览器中直接调试 Sass 文件，能找到对应的行数。值得庆幸的是，现在实现并不是一件难事，只要你的浏览器支持“sourcemap”功能即可
