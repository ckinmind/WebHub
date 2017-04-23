### async 函数
[教程地址：async 函数](http://es6.ruanyifeng.com/#docs/async)

---
### 目录
```
1. 含义
2. 用法
3. 语法
4. async 函数的实现原理
5. 与其他异步处理方法的比较
6. 实例：按顺序完成异步操作
7. 异步遍历器
```

---
### 1. 含义
- async 函数是什么？一句话，它就是 Generator 函数的语法糖
- 一比较就会发现，async函数就是将 Generator 函数的星号（*）替换成async，将yield替换成await，仅此而已
- async函数对 Generator 函数的改进，体现在以下四点
   - 内置执行器:Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行
   - 更好的语义:async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果
   - 更广的适用性:co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作
   - 返回值是 Promise:async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作

---
### 2. 用法
- async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句

---
### 3. 语法 
- async函数的语法规则总体上比较简单，难点是错误处理机制
- 返回 Promise 对象: async函数返回一个 Promise 对象,async函数内部return语句返回的值，会成为then方法回调函数的参数
- async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到
- Promise 对象的状态变化: async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数   
- await 命令: 正常情况下，await命令后面是一个 Promise 对象。如果不是，会被转成一个立即resolve的 Promise 对象
- 如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject
- 第一点，前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中
- 第二点，多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发
- 第三点，await命令只能用在async函数之中，如果用在普通函数，就会报错
- 如果确实希望多个请求并发执行，可以使用Promise.all方法

---
### 4. async 函数的实现原理
- async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里

---
### 5. 与其他异步处理方法的比较
- Async函数的实现最简洁，最符合语义，几乎没有语义不相关的代码。它将Generator写法中的自动执行器，改在语言层面提供，不暴露给用户，因此代码量最少

---
### 6. 实例：按顺序完成异步操作

---
### 7. 异步遍历器
- 异步遍历器的最大的语法特点，就是调用遍历器的next方法，返回的是一个 Promise 对象
- 前面介绍过，for...of循环用于遍历同步的 Iterator 接口。新引入的for await...of循环，则是用于遍历异步的 Iterator 接口
