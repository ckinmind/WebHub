# Transform

### 一. 教程信息

教程地址：
>[制作3D旋转视频展示区](http://www.imooc.com/code/1963)

在线预览：
>无

说明：
>是教程十天精通CSS3的最后一个练习

评价：
>不是很推荐，CSS3中的transform相关的3D变幻还是比较复杂的，很多新的概念，这个练习没有很好的收获

---
### 二. 笔记

#### 1. `background-size: cover;`
```
background-size 属性规定背景图像的尺寸
语法
background-size: length|percentage|cover|contain;

cover:
把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
背景图像的某些部分也许无法显示在背景定位区域中
```

#### 2. ` vertical-align:top;`
```
vertical-align 属性设置元素的垂直对齐方式

可能的值
top:把元素的顶端与行中最高元素的顶端对齐
```

#### 3. `cursor:pointer;`
```
cursor 属性规定要显示的光标的类型（形状）
pointer:光标呈现为指示链接的指针（一只手）
```

#### 4. `perspective: 4000px;`
```
perspective 属性指定了观察者与z=0平面的距离，使具有三维位置变换的元素产生透视效果

```

#### 5. ` text-shadow: 1px 1px 1px rgba(255,255,255,0.5);`
```
rgba(255,255,255,0.5)
0.5 透明度的白色，文字使用了这个之后发现更加柔和清晰了
一般box-shadow中加的是rgba(0,0,0,0.5)阴影的颜色用黑色，但是文字如果用黑色就不好看了，用白色0.5透明度反而会显得柔和清晰
```

#### 6. `transform-style: preserve-3d;`
```
transform-style 属性规定如何在 3D 空间中呈现被嵌套的元素
语法: transform-style: flat|preserve-3d;
flat: 子元素将不保留其 3D 位置。
preserve-3d: 子元素将保留其 3D 位置
```

#### 7. `transition: transform .6s;`
```
transition 属性是一个简写属性，用于设置四个过渡属性：
transition-property
transition-duration
transition-timing-function
transition-delay
```

#### 8. `transform: translateZ(-50px) rotateX(95deg);`
```
transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜
语法: transform: none|transform-functions;

translateZ(z): 定义 3D 转换，只是用 Z 轴的值
rotateX(angle):定义沿着 X 轴的 3D 旋转。
```

#### 9. `transition: all 0.6s;`
```
transition 属性是一个简写属性，用于设置四个过渡属性：
transition-property
transition-duration
transition-timing-function
transition-delay

这里的all是 transition-property 的值，意思是所有属性都将获得过渡效果

0.6s 是 transition-duration 属性规定完成过渡效果需要花费的时间（以秒或毫秒计）
```
