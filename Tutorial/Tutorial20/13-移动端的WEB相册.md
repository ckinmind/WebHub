### 移动端的WEB相册
[教程地址：移动端的WEB相册](http://www.imooc.com/learn/140)

---
### 第1章 移动端的WEB相册简介
#### 1-1 背景介绍
- 略
#### 1-2 案例介绍
- 制作一个web相册（类似手机相册的体验）

---
### 第2章 WEB相册技术介绍
#### 2-1 移动端的调试工具
- chrome emluation 移动端模拟器

#### 2-2 移动端开发tips
- 兼容性问题，webkit内核（android/ios）、greasemonkey(firefox os)
- 手势操作代替鼠标输入输出事件
- 响应式布局
- CSS3动画代替js动画

#### 2-3 移动端框架
- jQuery Mobile
- Augular Mobile
- zepto.js

#### 2-4 touch事件
- touchstart:按下屏幕一瞬间
- touchmove：在屏幕滑动
- touchend：手指离开屏幕瞬间
- touchcancel: 比如突然来电话就会触发touchacancel
- 除引入zepto.js还要引入touch模块
  - tap事件：singleTap,doubleTap
- 为什么用touch事件
  - click事件有3毫秒延迟
  - touch事件支持多点触摸
  - 手势操作

#### 2-5 Canvas
- 使用canvas代替img标签
- canvas的api`drawImage(image,x,y,width,height)`width和height可以控制图片缩放

#### 2-6 Image对象介绍
- 预加载图片
- 图片的按比例缩放

#### 2-7 CSS3动画
- Animate.css

```
@keyframes //关键帧
animation-name 动画名称
animation-duration 动画持续时间
animation-delay 延迟执行时间
animation-timing-function 动画形变函数指定
animation-play-state 播放状态指定
```

---
### 第3章 移动端的WEB相册实现
#### 3-1 图片列表的HTML结构
- `<meta name="viewport" content="width=device-width,initial-scale=1.0">`

#### 3-2 图片列表JS渲染
#### 3-3 图片列表canvas显示
#### 3-4 图片列表CSS3动画
#### 3-5 查看大图的HTML
#### 3-6 查看大图功能实现
#### 3-7 查看大图交互实现
#### 3-8 查看大图CSS3动画
#### 3-9 CSS3动画事件
