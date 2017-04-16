### Generator 函数的语法
[参考资料：Generator 函数的语法](http://es6.ruanyifeng.com/#docs/generator)

---
### 目录
```
1. 简介
2. next方法的参数
3. for...of循环
4. Generator.prototype.throw()
5. Generator.prototype.return()
6. yield* 语句
7. 作为对象属性的Generator函数
8. Generator函数的this
9. 含义
10. 应用
```

---
### 1. 简介
- Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。本章详细介绍Generator 函数的语法和 API，它的异步编程应用请看《Generator 函数的异步应用》一章
- Generator 函数有多种理解角度。从语法上，首先可以把它理解成，Generator 函数是一个状态机，封装了多个内部状态
- 执行 Generator 函数会返回一个遍历器对象，也就是说，Generator 函数除了状态机，还是一个遍历器对象生成函数。返回的遍历器对象，可以依次遍历 Generator 函数内部的每一个状态
- 形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用`yield`语句，定义不同的内部状态（yield在英语里的意思就是“产出”）
- Generator函数的调用方法与普通函数一样，也是在函数名后面加上一对圆括号。不同的是，调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象
- 下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield语句（或return语句）为止。换言之，Generator函数是分段执行的，yield语句是暂停执行的标记，而next方法可以恢复执行
- 总结一下，调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield语句后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束
- 由于Generator函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield语句就是暂停标志
- yield语句与return语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield语句。正常函数只能返回一个值，因为只能执行一次return；Generator函数可以返回一系列的值，因为可以有任意多个yield。从另一个角度看，也可以说Generator生成了一系列的值，这也就是它的名称的来历（在英语中，generator这个词是“生成器”的意思）
- Generator函数可以不用yield语句，这时就变成了一个单纯的暂缓执行函数
- 另外需要注意，yield语句只能用在 Generator 函数里面，用在其他地方都会报错
- 另外，yield语句如果用在一个表达式之中，必须放在圆括号里面
- yield语句用作函数参数或放在赋值表达式的右边，可以不加括号
- 由于Generator函数就是遍历器生成函数，因此可以把Generator赋值给对象的Symbol.iterator属性，从而使得该对象具有Iterator接口

---
### 2. next方法的参数
- yield句本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield语句的返回值
- 这个功能有很重要的语法意义。Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为
- 注意，由于next方法的参数表示上一个yield语句的返回值，所以第一次使用next方法时，不能带有参数。V8引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数

---
### 3. for...of循环
- for...of循环可以自动遍历Generator函数时生成的Iterator对象，且此时不再需要调用next方法

---
### 4. Generator.prototype.throw() 
- Generator函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在Generator函数体内捕获

---
### 5. Generator.prototype.return() 
- Generator函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator函数
- 如果return方法调用时，不提供参数，则返回值的value属性为undefined
- 如果Generator函数内部有try...finally代码块，那么return方法会推迟到finally代码块执行完再执行

---
### 6. yield* 语句 
- 如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的
- 用到yield*语句，用来在一个 Generator 函数里面执行另一个 Generator 函数

---
### 7. 作为对象属性的Generator函数
- 如果一个对象的属性是Generator函数，可以简写


---
### 8. Generator函数的this
- Generator函数总是返回一个遍历器，ES6规定这个遍历器是Generator函数的实例，也继承了Generator函数的prototype对象上的方法

---
### 9. 含义
- Generator与状态机
- Generator是实现状态机的最佳结构

---
### 10. 应用
- 异步操作的同步化表达
- 控制流管理 
- 部署Iterator接口
- 作为数据结构















