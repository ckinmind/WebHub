### CSS深入理解之padding
[教程地址：CSS深入理解之padding](http://www.imooc.com/learn/710)

---
### 第1章 CSS padding与容器的尺寸 
#### 1-1 CSS padding与元素的尺寸
- **对block元素**
  - padding值暴走，一定会影响尺寸
  - width非auto,padding影响尺寸
  - width为auto或box-sizing为border-box，同时padding值没有暴走，不影响尺寸
- **对inline元素**
- 水平padding影响尺寸，垂直padding不影响尺寸，但是会影响背景色（占据空间）

---
### 第2章 CSS padding负值和百分比值 
#### 2-1 CSS padding负值和百分比值 
- padding不支持任何形式的负值
- padding的百分比是相对于宽度计算的
- inline元素的垂直padding会让规范中的strut出现

---
### 第3章 标签元素的内置padding 
####3-1 CSS 标签元素的内置padding
- 所有浏览器的input/textarea输入框内置padding
- 所有浏览器的button按钮内置padding
- `button{overflow:visible}`IE7下去掉按钮的padding
- button按钮的padding与高度计算在个浏览器下不一致，所以用a模拟button

 ---
### 第4章 padding与图形绘制 
#### 4-1 CSS padding与图形绘制
- 借助padding实现三道杠

---
### 第5章 padding布局实战 
#### 5-1 CSS padding与布局
- 两栏等高布局`margin-bottom:-600px;padding-bottom:-600px;`
