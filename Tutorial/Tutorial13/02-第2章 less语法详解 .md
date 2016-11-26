###  第2章 less语法详解 
[教程地址：第2章 less语法详解 ](http://www.imooc.com/video/4829)

---
### 2.1 Less中的注释
- less有两种注释`/* */`和`//`第一种的注释会在css中编译出来，第二种不会

```css
/* 编译后出现在.CSS文件中*/

// less新增的注释，编译后不会出现在css中
```

---
### 2.2 变量
- less中声明变量用@开头，例：@变量名：值；

```css
@test_width:300px;

.box {
   width:@test_width;
}
```

---
### 2.3 混合
```css
.box {
   width:@test_width;
   height:@test_width;
   .test_1;   //混合
   .test_2(red); //混合带参数
   .test_3();    //混合带默认值
}
.test_1 {
   border:1px solid pink;
}

.test_2(@color){
   color:@color;
   font-size:16px;
}

.test_03(@height:20px){
   height:@height;
}

```

---
###  2.4 匹配模式
```css
//匹配模式可以写一个必须带上的参数：
 .trangle(bottom,@w:5px.@c:#ccc){
      border-width: @w;
      border-color: @c transparent transparent transparent;
      border-style: solid dashed dashed  dashed ;
}
//里面的参数必带
 .trangle(@_,@w:5px.@c:#ccc){
width:0; height: 0; overflow: hidden;}
```

---
### 2-5  运算 
```css
// 运算：
 @test_01：300px；
.box_02{width：@test_01 + 20；//如果变量或其它是带单位的，后面相加的数字可以不用加单位}
.box_02{width：（@test_01 - 20）* 5；}//如果要先减在乘，就用个括号包起来)
```

---
### 2-6 嵌套规则
```
// html代码
<div class="father">
   <div class="child">
      <a href="#">this ia a test</a>
   <div>
   <div class="child2"></div>
</div>

//less代码
.father {
    width:600px;
    height:600px;
    .child {
       background-color:red;
       a {
         color:green;
         &:hover {
           color:yellow;
         }
       }
    }
}

//以上less代码相当于以下css代码
.father {
    width:600px;
    height:600px;
}
.father .child {
    background-color:red;
}
.father .child a {
    color:green;
}
.father .child a:hover{
    color:yellow;
}

```
>&代表上一层选择器

---
### 2-7 @arguments变量
- `@arguments` 包含了所有传递进来的参数

```
@arguments包含了所有传递进来的参数。
如果你不想单独处理每一个参数的话就可以像这样写：
 @border（@w：30px，@c：red，@s：solid）{
   border：@w @c @s
}
.border_arg(@w:30px,@c:red,@ww:solid){
border:@arguments;//包含所有参数
}
.test_arguments{
.border_arg(40px);
}
```

---
### 2-8 避免编译、!important以及总结
```css
用波浪号加双引号~"内容"避免编译，会输出原代码

.test{
width:~'calc(300px-30px)';//~''避免编译
}
```
