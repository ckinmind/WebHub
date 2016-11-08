# 代码学习：Tangram(七巧板)

### 一. 教程信息

教程地址：
>无

在线预览：
>[CodePen.io: Tangram](http://codepen.io/ckinmind/pen/zoGJbO)

说明：
>在github看到的一个用convas实现的七巧板

评价：
>初步学会了用js操作canvas


---
### 二. 学习笔记

```
1. context是一个封装了很多绘图功能的对象，获取这个对象的方法是
var context =canvas.getContext("2d"); 
2d表示提供绘制2d的图形，3d暂时还不支持

2. canvas元素绘制图像的时候有两种方法，分别是
context.fill()//填充
context.stroke()//绘制边框

3. style:在进行图形绘制前，要设置好绘图的样式
context.fillStyle//填充的样式
context.strokeStyle//边框样式

4. 几个函数：
beginPath：系统默认在绘制第一个路径的开始点
closePath：停止绘制
moveTo：开始绘制点
lineTo：结束绘制的点
每次画线都从moveTo的点到lineTo的点
```
>参考资料: [MDN: Canvas教程](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial)
