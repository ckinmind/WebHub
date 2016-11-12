# Box Shadow

## 一. 教程信息

教程地址：
>[慕课网：CSS3实现“图片阴影”效果](http://www.imooc.com/learn/240)

在线预览：
>[CodePen.io:Shadow](http://codepen.io/ckinmind/pen/aBNvMV)

说明：
>慕课网上一个用box-shadow实现图片酷炫阴影的小教程

评价：
>对box-shadow，transform等有了更好的了解



---
## 二. 问题
1. box-shadow的用法

2. transform的用法

3. `overflow:hidden`的问题

4. ` border-radius: 100px/10px;`的这种表示发的含义

5. ` background:transparent;`全透明


---
## 三. 笔记

### 3.1 box-shadow

#### （1）语法
```
box-shadow 属性向框添加一个或多个阴影
语法：
box-shadow: h-shadow v-shadow blur spread color inset;
解释：
h-shadow    必需。水平阴影的位置。允许负值
v-shadow    必需。垂直阴影的位置。允许负值
blur        可选。模糊距离。	测试
spread      可选。阴影的尺寸。	测试
color       可选。阴影的颜色。请参阅 CSS 颜色值
inset       可选。将外部阴影 (outset) 改为内部阴影
```

#### （2）测试
> 查看[这里](http://www.css88.com/tool/css3Preview/Box-Shadow.html)

#### (3) 写法
```
box-shadow: 60px -16px red;
右边60px阴影； 上面16px阴影； 阴影颜色红色

box-shadow: 10px 6px 5px black;
5px的模糊距离

box-shadow: 4px 3px 2px 1px rgba(0, 0, 0, 0.2);
1px的阴影尺寸；0.2透明度

box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 60px rgba(0, 0, 0, 0.1) inset;
表示一个外阴影：1px垂直阴影；4px模糊距离；0.27透明度
另一个内阴影，四边都有内阴影，60px的模糊距离，0.1透明度
```
>inset表示设置内阴影

---
### 3.2 transform 

#### （1） 语法
```
transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜
语法：
transform: none|transform-functions;
转换的函数有：
skew：定义沿着 X 和 Y 轴的 2D 倾斜转换，会改改变形状,一个参数时表示沿x轴倾斜，两个参数时时是x轴y轴（比如长方形倾斜会变成平行四边形）

rotate：定义 2D 旋转，不会改变形状，会沿着某个原点旋转，注意原点位置是可以设置的
```

#### （2） 测试
>查看[这里](http://www.css88.com/tool/css3Preview/Transform.html)

#### (3) 写法
```
transform: skew(12deg) rotate(4deg);
沿着x轴倾斜12deg,在沿着原点旋转4deg
```

---
### 3.3 `overflow:hidden`的问题
>参见[issues#45](https://github.com/ckinmind/WebHub/issues/45)，跟踪这个问题

---

### 3.4 `border-radius: 100px/10px;`

```
border-radius可以同时设置1到4个值
1. 设置一个值
border-radius:2em;
表示：四个值都一样
border-top-left-radius:2em;
border-top-right-radius:2em;
border-bottom-right-radius:2em;
border-bottom-left-radius:2em;

2. 设置两个值
border-radius:50px 25px;
表示:左上+右下相通，右上+左下相通
border-top-left-radius:50px;
border-top-right-radius:25px;
border-bottom-right-radius:50px;
border-bottom-left-radius:25px;

3. 设置三个值
表示：
第一个值：左上
第二个值：右上+左下
第三个值：右下

4. 设置四个值，略

========================
border-radius还可以用斜杠设置第二组值
这时，第一组值表示水平半径，第二组值表示垂直半径。第二组值也可以同时设置1到4个值，应用规则与第一组值相同

border-radius:50px/25px;
表示水平半径50px ,垂直半径25px
border-top-left-radius:50px 25px;
border-top-right-radius:50px 25px;
border-bottom-right-radius:50px 25px;
border-bottom-left-radius:50px 25px;
```
>参考资料，查看[MDN:box-radius](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-radius)

---
### 3.5 `background:transparent;`全透明
- 想法：将一个div设置成全透明，然后加上阴影边框，看上去就像从透明玻璃往外看的效果，也许能实现一个放大镜的效果
