### Proxy
[参考资料：Proxy](http://es6.ruanyifeng.com/#docs/proxy


---
### 目录
```
1. 概述
2. Proxy 实例的方法
3. Proxy.revocable()
4. this 问题
5. 实例：Web 服务的客户端
```

---
### 1. 概述
- Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程
- Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”
- ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例 `var proxy = new Proxy(target, handler);`
- Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法。其中，new Proxy()表示生成一个Proxy实例，target参数表示所要拦截的目标对象，handler参数也是一个对象，用来定制拦截行为
- 注意，要使得Proxy起作用，必须针对Proxy实例（上例是proxy对象）进行操作，而不是针对目标对象（上例是空对象）进行操作
- 如果handler没有设置任何拦截，那就等同于直接通向原对象
- 一个技巧是将 Proxy 对象，设置到`object.proxy`属性，从而可以在object对象上调用,Proxy 实例也可以作为其他对象的原型对象
- 同一个拦截器函数，可以设置拦截多个操作

---
### 2. Proxy 实例的方法
- Proxy 实例的方法
- set方法用来拦截某个属性的赋值操作
- apply方法拦截函数的调用、call和apply操作
- has方法用来拦截HasProperty操作，即判断对象是否具有某个属性时，这个方法会生效。典型的操作就是in运算符
- construct方法用于拦截new命令，下面是拦截对象的写法
- deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除
- defineProperty方法拦截了Object.defineProperty操作
- getOwnPropertyDescriptor方法拦截Object.getOwnPropertyDescriptor，返回一个属性描述对象或者undefined
- getPrototypeOf方法主要用来拦截Object.getPrototypeOf()运算符，以及其他一些操作
- isExtensible方法拦截Object.isExtensible操作
- ownKeys方法用来拦截以下操作
- preventExtensions方法拦截Object.preventExtensions()。该方法必须返回一个布尔值，否则会被自动转为布尔值
- setPrototypeOf方法主要用来拦截Object.setPrototypeOf方法


---
### 3. Proxy.revocable()
- Proxy.revocable方法返回一个对象，该对象的proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例
- Proxy.revocable的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问

---
### 4. this 问题
- 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，目标对象内部的this关键字会指向 Proxy 代理
- 此外，有些原生对象的内部属性，只有通过正确的this才能拿到，所以 Proxy 也无法代理这些原生对象的属性

---
### 5. 实例：Web 服务的客户端
- Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端
- 同理，Proxy 也可以用来实现数据库的 ORM 层
