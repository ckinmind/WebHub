### Promise 对象
[参考资料：Promise 对象](http://es6.ruanyifeng.com/#docs/promise)

---
### 目录
```
1. Promise 的含义
2. 基本用法
3. Promise.prototype.then()
4. Promise.prototype.catch()
5. Promise.all()
6. Promise.race()
7. Promise.resolve()
8. Promise.reject()
9. 两个有用的附加方法
10. 应用
11. Promise.try()
```

---
### 1. Promise 的含义
- Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6将其写进了语言标准，统一了用法，原生提供了Promise对象
- 所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理
- Promise对象有以下两个特点
   - 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变
   - 一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending变为Resolved和从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的
   
- 有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易
- Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于Pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

---
### 2. 基本用法
- ES6规定，Promise对象是一个构造函数，用来生成Promise实例
- Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供，不用自己部署
- resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去
- Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数
- then方法可以接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为Resolved时调用，第二个回调函数是Promise对象的状态变为Reject时调用。其中，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数

---
### 3. Promise.prototype.then()   
- Promise实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的
- 采用链式的then，可以指定一组按照次序调用的回调函数

---
### 4. Promise.prototype.catch()
- Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数
- Promise 的状态一旦改变，就永久保持该状态，不会再变了
- Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个catch语句捕获
- 一般来说，不要在then方法里面定义Reject状态的回调函数（即then的第二个参数），总是使用catch方法
- 建议总是使用catch方法，而不使用then方法的第二个参数
- 跟传统的try/catch代码块不同的是，如果没有使用catch方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应

---
### 5. Promise.all()
- Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例

---
### 6. Promise.race()
- Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例

---
### 7. Promise.resolve()
- 有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用
- Promise.resolve方法的参数分成四种情况
   - 参数是一个Promise实例
   - 参数是一个thenable对象
   - 参数不是具有then方法的对象，或根本就不是对象
   - 不带有任何参数
   
---
### 8. Promise.reject()
- Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected  
- 注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致

---
### 9. 两个有用的附加方法
- ES6的Promise API提供的方法不是很多，有些有用的方法可以自己部署。下面介绍如何部署两个不在ES6之中、但很有用的方法 
- done(): Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到（因为Promise内部的错误不会冒泡到全局）。因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误
- finally(): finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。它与done方法的最大区别，它接受一个普通的回调函数作为参数，该函数不管怎样都必须执行

---
### 10. 应用
- 加载图片: 我们可以将图片的加载写成一个Promise，一旦加载完成，Promise的状态就发生变化
- Generator函数与Promise的结合

---
### 11. Promise.try() 
- 由于Promise.try为所有操作提供了统一的处理机制，所以如果想用then方法管理流程，最好都用Promise.try包装一下。这样有许多好处，其中一点就是可以更好地管理异常
- 事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块
   
   






















