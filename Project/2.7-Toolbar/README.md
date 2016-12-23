# Toolbar

## 一. 知识点

### 1. Sass
1. 嵌套
2. $变量
3. `@mixin` 函数名（参数）
4. `@import` 引入别的sass文件
5. `@extend` 继承

----

### 2. RequireJS
#### 2.1 为什么要用RequireJS
- 有效防止**命名冲突**
- 声明不同js文件之间的依赖
- 可以让我们的代码以**模块化**的组织方式

#### 2.2 要点
1. requirejs.config 配置别名
2. requirejs 引入别的模块
3. define 定义新的模块

----

### 3. CSS3实现简单动画效果
1. 过渡效果transtion: 从一种状态平滑过渡到另一种状态
2. 2D变幻 transform : scale / transform-origin

---

### 4. CSS精灵（雪碧图）、图标字体、伪类
1. 多张图合并，减少HTTP请求，提高速度
2. 代替简单图片，方便修改
3. 减少标签的书写，降低HTML结构的复杂性（会是css变得复杂）
（4. 其实还有可以将图片转成date url）

---
### 5. jQuery

### 5.1 on
```
1. on() 方法在被选元素及子元素上添加一个或多个事件处理程序。
2. 自 jQuery 版本 1.7 起，on() 方法是 bind()、live() 和 delegate() 方法的新的替代品
3. 语法：
$(_selector_).on(_event,childSelector,data,function,map_)
```


### 5.2 animate
```
1. animate() 方法执行 CSS 属性集的自定义动画
2. 该方法通过 CSS 样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果
3. 语法：
(_selector_).animate(_{styles},speed,easing,callback_)
```

#### 5.3 scroll() / sctollTop()
```
1. 都是jquery中的事件，js中没有
2. scroll() 方法触发 scroll 事件，或规定当发生 scroll 事件时运行的函数
3. scrollTop() 方法返回或设置匹配元素的滚动条的垂直位置
```

#### 5.4 height()
```
$(window).height()
返回窗口的视口高度(一屏的高度)
```

### 5.5 js面向对象编程
```
详情参考：阮一峰的《javascrit标准参考教程》第四章 面向对象编程
```


#### 5.6 `$.extend`
```
详情参考下面的参考资料
```
>参考资料：[jquery中extend的实现](https://segmentfault.com/a/1190000002811691)

#### 5.7 `$.proxy()`
```
1. $.proxy 方法接受一个已有的函数，并返回一个带特定上下文的新的函数
2. 通用用来修改this指针的指向
```
>参考资料：[jquery $.proxy使用](http://www.cnblogs.com/hongchenok/p/3919497.html)

#### 5.8 `jQuery is()`
```
1. is() 方法用于查看选择的元素是否匹配选择器。
2. :animated 选择器选取当前的所有动画元素
```

#### 5.9 `$.fn.extend`
```
1. $.fn.extend()是jQuery的一个方法，用于拓展jQuery实例的方法，也就是说可以将方法写入参数（object）中，每个jQuery实例都将拥有方法，可以通过$(selector).yourMethod()调用
```
