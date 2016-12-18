###  Sass的基本特性-基础
[教程地址：04 Sass的基本特性-基础](http://www.imooc.com/code/6950)

---
### 4-1 [Sass]声明变量
```
$btn-primary-color : #fff !default;
```
>如果值后面加上!default则表示默认值, 默认变量的价值在进行组件化开发的时候会非常有用

---
### 4-2 [Sass]普通变量与默认变量
- sass 的默认变量一般是用来设置默认值，然后根据需求来覆盖的，覆盖的方式也很简单，只需要在默认变量之前重新声明下变量即可

---
### 4-3 [Sass]变量的调用
>略

---
### 4-4 [Sass]局部变量和全局变量
- 在选择器、函数、混合宏...的外面定义的变量为全局变量
- 全局变量和局部变量和less中一样

---
### 4-5 [Sass]嵌套-选择器嵌套
- 和less一样
- 但是& 好像会指代多层的选择器，不仅仅是单层，这和less不一样

---
### 4-6 [Sass]嵌套-属性嵌套
```
.box {
    border-top: 1px solid red;
    border-bottom: 1px solid green;
}

/* 对应scss代码*/

.box {
  border: {
   top: 1px solid red;
   bottom: 1px solid green;
  }
}
```
>还是宁愿写完整，这样属性的嵌套并没有方便

---
### 4-7 [Sass]嵌套-伪类嵌套
- 伪类嵌套和属性嵌套非常类似，需要借助`&`符号一起配合使用

```
/* scss 代码*/
.clearfix{
&:before,
&:after {
    content:"";
    display: table;
  }
&:after {
    clear:both;
    overflow: hidden;
  }
}

/* 编译之后的代码*/

clearfix:before, 
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
  overflow: hidden;
}
```

---
### 4-8 [Sass]混合宏-声明混合宏
- 如果你的整个网站中有几处小样式类似，比如颜色，字体等，在 Sass 可以使用变量来统一处理，那么这种选择还是不错的。但当你的样式变得越来越复杂，需要重复使用大段的样式时，使用变量就无法达到我们目了。这个时候 Sass 中的混合宏就会变得非常有意义
- 在 Sass 中，使用“@mixin”来声明一个混合宏

**不带参数混合宏：**
```
@mixin border-radius{
    -webkit-border-radius: 5px;
    border-radius: 5px;
}
```
> 其中 @mixin 是用来声明混合宏的关键词，有点类似 CSS 中的 @media、@font-face 一样。
>border-radius 是混合宏的名称。大括号里面是复用的样式代码

**带参数混合宏：**
```
@mixin border-radius($radius:5px){
    -webkit-border-radius: $radius;
    border-radius: $radius;
}
```

**复杂的混合宏：**
```
@mixin box-shadow($shadow...) {
  @if length($shadow) >= 1 {
    @include prefixer(box-shadow, $shadow);
  } @else{
    $shadow:0 0 4px rgba(0,0,0,.3);
    @include prefixer(box-shadow, $shadow);
  }
}
```
>这个 box-shadow 的混合宏，带有多个参数，这个时候可以使用“ … ”来替代
>简单的解释一下，当 $shadow 的参数数量值大于或等于“ 1 ”时，表示有多个阴影值，反之调用默认的参数值“ 0 0 4px rgba(0,0,0,.3) ”

---
### 4-9 [Sass]混合宏-调用混合宏
- 在 Sass 中通过 @mixin 关键词声明了一个混合宏，那么在实际调用中，其匹配了一个关键词“@include”来调用声明好的混合宏

```
//定义混合宏
@mixin border-radius{
    -webkit-border-radius: 3px;
    border-radius: 3px;
}

//调用
button {
    @include border-radius;
}
```

---
### 4-10 [Sass]混合宏的参数--传一个不带值的参数
```
//定义
@mixin border-radius($radius){
  -webkit-border-radius: $radius;
  border-radius: $radius;
}

//调用
.box {
  @include border-radius(3px);
}

//调用
.box {
  -webkit-border-radius: 3px;
  border-radius: 3px;
}
```

---
### 4-11 [Sass]混合宏的参数--传一个带值的参数
```
@mixin border-radius($radius:3px){
  -webkit-border-radius: $radius;
  border-radius: $radius;
}
```
>3px是默认值，注意用：

---
### 4-12 [Sass]混合宏的参数--传多个参数
>略

---
### 4-13 [Sass]混合宏的参数--混合宏的不足
- 混合宏在实际编码中给我们带来很多方便之处，特别是对于复用重复代码块。但其最大的不足之处是会生成冗余的代码块

---
### 4-14 [Sass]扩展/继承
- 在 Sass 中也具有继承一说，也是继承类中的样式代码块。在 Sass 中是通过关键词 “@extend”来继承已存在的类样式块，从而实现代码的继承

```
//SCSS
.btn {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
  @extend .btn;
}

//CSS
.btn, .btn-primary, .btn-second {
  border: 1px solid #ccc;
  padding: 6px 10px;
  font-size: 14px;
}

.btn-primary {
  background-color: #f36;
  color: #fff;
}
```
>从示例代码可以看出，在 Sass 中的继承，可以继承类样式块中所有样式代码，而且编译出来的 CSS 会将选择器合并在一起，形成组合选择器

---
### 4-15 [Sass]占位符 %placeholder
-  %placeholder 声明的代码，如果不被 @extend 调用的话，不会产生任何代码

```
//SCSS
%mt5 {
  margin-top: 5px;
}
%pt5{
  padding-top: 5px;
}

.btn {
  @extend %mt5;
  @extend %pt5;
}

.block {
  @extend %mt5;

  span {
    @extend %pt5;
  }
}

// 编译出来的CSS
//CSS
.btn, .block {
  margin-top: 5px;
}

.btn, .block span {
  padding-top: 5px;
}
```
>从编译出来的 CSS 代码可以看出，通过 @extend 调用的占位符，编译出来的代码会将相同的代码合并在一起

---
### 4-16 [Sass]混合宏 VS 继承 VS 占位符
- 如果你的代码块中涉及到变量，建议使用混合宏来创建相同的代码块
- 如果你的代码块不需要专任何变量参数，而且有一个基类已在文件中存在，那么建议使用 Sass 的继承
- “占位符是独立定义，不调用的时候是不会在 CSS 中产生任何代码；继承是首先有一个基类存在，不管调用与不调用，基类的样式都将会出现在编译出来的 CSS 代码中

---
### 4-17 [Sass]插值#{}
```
@mixin generate-sizes($class, $small, $medium, $big) {
    .#{$class}-small { font-size: $small; }
    .#{$class}-medium { font-size: $medium; }
    .#{$class}-big { font-size: $big; }
}
@include generate-sizes("header-text", 12px, 20px, 40px);

//编译出来的 CSS:
.header-text-small { font-size: 12px; }
.header-text-medium { font-size: 20px; }
.header-text-big { font-size: 40px; }
```

---
### 4-18 [Sass]注释
- `多行/**/` 或者 `单行//`

---
### 4-19 [Sass]数据类型
-  Sass 和 JavaScript 语言类似，也具有自己的数据类型，在 Sass 中包含以下几种数据类型
  - 数字: 如，1、 2、 13、 10px；
  - 字符串：有引号字符串或无引号字符串，如，"foo"、 'bar'、 baz；
  - 颜色：如，blue、 #04a3f9、 rgba(255,0,0,0.5)；
  - 布尔型：如，true、 false；
  - 空值：如，null；
  - 值列表：用空格或者逗号分开，如，1.5em 1em 0 2em 、 Helvetica, Arial, sans-seri

---
### 4-20 [Sass]字符串
- SassScript 支持 CSS 的两种字符串类型：
  - 有引号字符串 (quoted strings)，如 `"Lucida Grande"` 、`'http://sass-lang.com'`；
  - 无引号字符串 (unquoted strings)，如 `sans-serifbold`。

- 在编译 CSS 文件时不会改变其类型。只有一种情况例外，使用 #{ }插值语句 (interpolation) 时，有引号字符串将被编译为无引号字符串，这样方便了在混合指令 (mixin) 中引用选择器名

---
### 4-21 [Sass]值列表
- Sass列表函数（Sass list functions）赋予了值列表更多功能（Sass进级会有讲解）
  - nth函数（nth function） 可以直接访问值列表中的某一项；
  - join函数（join function） 可以将多个值列表连结在一起；
  - append函数（append function） 可以在值列表中添加值； 
  - @each规则（@each rule） 则能够给值列表中的每个项目添加样式。
