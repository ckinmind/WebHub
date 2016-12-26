### zepto设计和源码分析
[教程地址：zepto设计和源码分析](http://www.imooc.com/learn/745)
[在线课件](http://www.kancloud.cn/wangfupeng/zepto-design-srouce/173680)
[zepto core模块代码注释解读](http://www.kancloud.cn/wangfupeng/zepto-design-srouce/173692)

---
### 第1章 设计

---
#### 1-1 开始
本课程内容主要有两个
- 分析zepto的设计思想，并思考如何才能实现这种设计
- 打开zepto源码，看它是如何实现的

---
#### 1-2 解读zepto设计
- 知识点 `__proto__和prototype的关系`

---
#### 1-3 javascript原型基础知识
- **javascript 三座大山**
  - 原型和原型链
  - 上下文环境和作用域
  - 单线程和异步

- 每一个函数，都有一个prototype属性
- constructor属性，指向该函数自身
- 所有通过函数new出来的东西，这个东西都有一个__proto__指向这个函数的prototype
- `prototype`:（显示）原型，`__proto__` :隐式原型
- 当你想要使用一个对象（或者一个数组）的某个功能时：如果该对象本身具有这个功能，则直接使用；如果该对象本身没有这个功能，则去__proto__中找
- `__proto__`是可修改的

---
### 第2章 源码分析 

---
#### 2-1 解读zepto设计2
>略

---
####  2-2 分析 zepto 源码-结构
- 自执行函数

```js
var Zepto = (function(){
     var $

    // ...省略N行代码...

    $ = function(selector, context){
        return zepto.init(selector, context)
    }

    // ...省略N行代码...

    return $
})();
window.Zepto = Zepto;
window.$ === undefined && (window.$ = Zepto);
```
>在这里我们还可以看到，平常我们$('p')使用zepto的时候，最终顺藤摸瓜会执行到$ = function(selector, context){这个函数中（其中的内容可不深究），而p这个选择器也会传递给selector参数

---
####  2-3 分析zepto源码-init函数

```js
zepto.init = function(selector, context) {
    var dom

    // 分情况对dom赋值：
    // 1. selector 为空
    // 2. selector 是字符串，其中又分好几种情况
    // 3. selector 是函数
    // 4. 其他情况，例如 selector 是数组、对象等

    // create a new Zepto collection from the nodes found
    return zepto.Z(dom, selector)
  }
```
>中间省略的代码，都是根据不同条件下对dom变量进行赋值。dom从名字也可以猜测出来，它将会赋值一个或多个DOM节点。最终，它将通过selector一起传递给zepto.Z函数并返回值

---
####  2-4 分析zepto源码-Z函数-上
- `dom.__proto__ = $.fn` dom是一个数组，并且把它的隐式原型赋值$.fn

---
#### 2-5 分析zepto源码-Z函数-下 
- 对象数组——即可以模拟进行数组操作的对象

---
#### 2-6 总结
- 产品化思考的意思
- 设计和源码的关系
- js原型的基础知识点，理解了prototype和__proto__
- 可以自己模拟一个zepto设计的代码
