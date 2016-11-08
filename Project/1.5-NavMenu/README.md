# 教程：Nav Menu （导航栏）


### 一. 教程信息

教程地址：
>[慕课网：CSS3背景 制作导航菜单综合练习题](http://www.imooc.com/code/1881)

在线预览：
>[CodePen.io: Nav Menu](http://codepen.io/ckinmind/pen/ObVByZ)

说明：
>慕课网上的教程[十天精通CSS3](http://www.imooc.com/learn/33)中的一个练习题

评价：
>很好，重点学习了伪元素::before和::after的用法

---
### 二. 学习笔记
---
#### 1. `font:bold 10px/50px Arial;` 
```
font:bold 10px/50px Arial;
分别是：font-weight font-size/line-height font-family
```
>关于font的更多写法参考[这里](http://www.dreamdu.com/css/property_font/)

---
#### 2. margin的2个属性和3个属性的简写
```
margin:40px auto;
等价于：
上下：40px
左右：自适应

margin:40px auto 0;
等价于：
上：40px
左右：自适应
下：0px
```

---
#### 3. `box-shadow: 0 7px 0 #ba4a45;`
```
box-shadow 向框添加一个或多个阴影

box-shadow: 0 7px 0 #ba4a45;
分别指：水平位移 垂直位移 模糊半径
```
>1. 可以参考这里 [Box Shadow(阴影)-Css3演示](http://www.css88.com/tool/css3Preview/Box-Shadow.html)
>2. 下了一个chrome扩展用于在线取色

---
#### 4. `list-style:none outside none;`
```
list-style 简写属性在一个声明中设置所有的列表属性

list-style:none outside none;
分别代表：list-style-type, list-style-position, list-style-image.

list-style-type（设置列表项标记的类型）:none,disc(实心圆),circle(空心圆)等

list-style-position（设置在何处放置列表项标记）：
inside（列表项目标记放置在文本以内，且环绕文本根据标记对齐）
outside（默认值，保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐）
inherit（规定应该从父元素继承 list-style-position 属性的值）

list-style-image（使用图像来替换列表项的标记）：
none（默认。无图形被显示）
inherit（规定应该从父元素继承 list-style-image 属性的值）
```
>如果设置了li元素`display:inline-block`或者`display:block`则列表的标记项目默认就会消失，不需要设置`list-type:none`

---
#### 5. ` text-decoration: none;`
``` 
text-decoration 属性规定添加到文本的修饰

text-decoration: none;
可能的值：
none： 默认。定义标准的文本。
underline： 定义文本下的一条线。
overline： 定义文本上的一条线。
line-through：定义穿过文本下的一条线
blink： 定义闪烁的文本
inherit： 规定应该从父元素继承 text-decoration 属性的值
```
>任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit"

---
#### 6. `text-shadow: 1px 2px 4px rgba(0,0,0,.5);`
```
text-shadow: 1px 2px 4px rgba(0,0,0,.5);
分别代表：
h-shadow(必需。水平阴影的位置。允许负值)
v-shadow(必需。垂直阴影的位置。允许负值)
blur(可选。模糊的距离)
color(可选。阴影的颜色)

rgba: 此色彩模式与RGB相同，只是在RGB模式上新增了Alpha透明度
Alpha透明度。取值0~1之间
```
>1. IE到9以后才支持rgba表示法
>2. rgb(0,0,0)表示黑色

----
#### 7. ` transform:rotate(10deg);`
```
transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜
语法: transform: none|transform-functions;
transform-functions函数有很多，这里的rotate()定义 2D 旋转，在参数中规定角度
“deg”是“度”的意思，如“10deg”表示“10度”

浏览器兼容设置：
-webkit-transform:rotate(10deg);
-moz-transform:rotate(10deg);
-o-transform:rotate(10deg);
-ms-transform:rotate(10deg);
transform:rotate(10deg);
```
>1. 对`li a`在hover状态设置transform时需要将a设置成`display:inline-block`,即使此时的li已经设置了`display:inline-block`
>2. 发现的chrome和firfox已经支持了直接transform属性

---
#### 8. `transition: all 0.2s ease-in;`
```
transition 属性是一个简写属性，用于设置四个过渡属性
语法：transition: property duration timing-function delay;
属性值：
transition-property 规定设置过渡效果的 CSS 属性的名称。
transition-duration 规定完成过渡效果需要多少秒或毫秒。
transition-timing-function 规定速度效果的速度曲线。
transition-delay 定义过渡效果何时开始

transition-property: none|all|property;
属性值：
none: 没有属性会获得过渡效果。
all: 所有属性都将获得过渡效果。
property: 定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔

transition-duration: time;
属性值：
time: 规定完成过渡效果需要花费的时间（以秒或毫秒计）。
默认值是 0，意味着不会有效果。

transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
属性值：
linear: 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）。
ease: 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）。
ease-in: 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）。
ease-out: 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）。
ease-in-out: 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）。
cubic-bezier(n,n,n,n): 在 cubic-bezier 函数中定义自己的值。可能的值是 0 至 1 之间的数值

transition-delay: time;
属性值：
time： 规定在过渡效果开始之前需要等待的时间，以秒或毫秒计（不写就是0，立即动画）
```

---
#### 9. `.nav li::before`和 `.nav li::after`
```
::before 伪元素，用于在被选元素的内容前面插入内容
 特有的属性 content ，用于在 CSS 渲染中向元素逻辑上的头部添加内容。注意这些添加不会改变文档内容，不会出现在 DOM 中，不可复制，仅仅是在 CSS 渲染层加入
例如：
1. 在a元素后面显示一个斜箭头
a:after { content: "↗"; } 

2. attr() – 调用当前元素的属性，可以方便的比如将图片的 Alt 提示文字或者链接的 Href 地址显示出来
a:after { content:"(" attr(href) ")"; }  

3. 可以清除浮动
清除浮动是一个时常会遇到的问题，不少人的解决办法是添加一个空的 div 应用 clear:both; 属性。现在，无需增加没有意义的元素，仅需要以下样式即可在元素尾部自动清除浮动
.clear-fix { *overflow: hidden; *zoom: 1; }  
.clear-fix:after { display: table; content: ""; width: 0; clear: both; } 

注意：如果不需要内容仅配合样式属性做出效果，内容属性content也不能省略，即 可以设置：content:"" 否则，其他的样式属性一概不会生效

====================================================
 .nav li::before,
 .nav li::after{
     content:"";
     position:absolute;
     top:14px;
     height: 25px;
     width: 1px;
   }
这里显示分割线的做法是在li上设置position:relative
然后伪元素 .nav li::before 的position:absolute,进行绝对定位
然后设置高度，并将宽度设置为1px，这样显示成一条竖线
最后通过backgrond的渐变得到一个颜色渐变的分割线
```
>更多参考[这里](http://justcoding.iteye.com/blog/2032627)


---
#### 10.  `background:linear-gradient()`
```
linear-gradient 为线性渐变
background: linear-gradient(top, #ff625a, #9e3e3a 50%, #ff625a);
参数含义：
第一个参数表示线性渐变的方向，top 是从上到下
第二个和第三个参数分别是起点颜色和终点颜色
百分比表示重复的线性渐变
```
>更多参考[这里](http://www.cnblogs.com/lhb25/archive/2013/01/30/css3-linear-gradient.html)， [这里](http://www.runoob.com/css3/css3-gradients.html)，还有[这里](http://www.cnblogs.com/rainman/p/5113242.html)

---
#### 11. 浏览器给ul元素默认加上左padding 40px的效果
```
-webkit-padding-start: 40px;  //chrome
-moz-padding-start: 40px;   //firfox

解决办法：
ul{margin:0;padding:0}

因为有浏览器默认样式问题，所以经常能看到以下设置
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code,
form, fieldset, legend, input, button, textarea, p, blockquote, table,
th, td {margin:0; padding:0;}  

```
>资料参考[这里](http://blog.csdn.net/wxlkeepmoving/article/details/7526345)


---
#### 12. 关于font-size影响：：before和：：after间距的奇怪问题
```
.nav{
   font:bold 0/50px Arial;  //0是指font-size
}

.nav li{
   font-size：13px; //因为这里会覆盖，所以上面覆盖上面设置的font-size为0
}

 .nav li::before,
    .nav li::after{
        content:"";
        position:absolute;
        top:14px;
        height: 25px;
        width: 1px;
        background:red;
    }
 .nav li::after{
        right: 0;
    }
    .nav li::before{
        left: 0;
    }

导航栏的分割线其实是通过before和after伪元素设置宽度为1，然后before到最左，after到最右，两个紧挨合并，但是当.nav元素中的font-size设置不是0的时候，两个伪元素间就会有一个间隙，不知道为什么
```
