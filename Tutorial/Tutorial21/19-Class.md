### Class
[教程地址：Class](http://es6.ruanyifeng.com/?search=new&x=0&y=0#docs/class)

---
### 目录
```
1. Class基本语法
2. Class的继承
3. 原生构造函数的继承
4. Class的取值函数（getter）和存值函数（setter）
5. Class 的 Generator 方法
6. Class 的静态方法
7. Class的静态属性和实例属性
8. 类的私有属性
9. new.target属性
10. Mixin模式的实现
```

---
### 1. Class基本语法
- ES6提供了更接近传统语言的写法，引入了Class（类）这个概念，作为对象的模板。通过`class`关键字，可以定义类
- 基本上，ES6的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已

```js

//ES5写法
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

/***********************************************************/

//ES6写法
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

var p = new Point(1, 2);
```
>1. 上面代码定义了一个“类”，可以看到里面有一个`constructor`方法，这就是构造方法，而`this`关键字则代表实例对象
>2. 也就是说，ES5的构造函数`Point`，对应ES6的`Point`类的构造方法
>3. `Point`类除了构造方法，还定义了一个`toString`方法。注意，定义“类”的方法的时候，前面不需要加上`function`这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错
>4. ES6的类，完全可以看作构造函数的另一种写法
>5. 构造函数的`prototype`属性，在ES6的“类”上面继续存在。事实上，类的所有方法都定义在类的`prototype`属性上面
>6. 在类的实例上面调用方法，其实就是调用原型上的方法
>7. `prototype`对象的`constructor`属性，直接指向“类”的本身，这与ES5的行为是一致的
>8. 另外，类的内部所有定义的方法，都是不可枚举的（non-enumerable）,这一点与ES5的行为不一致
>9. 类的属性名，可以采用表达式

**constructor方法**
- `constructor`方法是类的默认方法，通过`new`命令生成对象实例时，自动调用该方法。一个类必须有`constructor`方法，如果没有显式定义，一个空的`constructor`方法会被默认添加
- `constructor`方法默认返回实例对象（即`this`,即当new的时候会默认调用constructor，然后默认返回一个当前的实例）
- 类的构造函数，不使用`new`是没法调用的，会报错。这是它跟普通构造函数的一个主要区别，后者不用`new`也可以执行


**类的实例对象**
- 生成类的实例对象的写法，与ES5完全一样，也是使用`new`命令。如果忘记加上`new`，像函数那样调用`Class`，将会报错
- 与ES5一样，类的所有实例共享一个原型对象
- 与ES5一样，实例的属性除非显式定义在其本身（即定义在`this`对象上），否则都是定义在原型上（即定义在`class`上）

```js
//定义类
class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }

}

var point = new Point(2, 3);

point.toString() // (2, 3)

point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
```
>上面代码中，`x`和`y`都是实例对象`point`自身的属性（因为定义在`this`变量上），所以`hasOwnProperty`方法返回`true`，而`toString`是原型对象的属性（因为定义在`Point`类上），所以`hasOwnProperty`方法返回`false`。这些都与ES5的行为保持一致

**不存在变量提升**
- Class不存在变量提升（hoist），这一点与ES5完全不同

**Class表达式**
- 与函数一样，类也可以使用表达式的形式定义

**私有方法**
- 私有方法是常见需求，但 ES6 不提供，只能通过变通方法模拟实现
- 一种做法是在命名上加以区别
- 另一种方法就是索性将私有方法移出模块，因为模块内部的所有方法都是对外可见的
- 还有一种方法是利用`Symbol`值的唯一性，将私有方法的名字命名为一个`Symbol`值

**this的指向**
- 类的方法内部如果含有`this`，它默认指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错

```js
class Logger {
  printName(name = 'there') {
    this.print(`Hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();
const { printName } = logger;
printName(); // TypeError: Cannot read property 'print' of undefined
```
>1. 上面代码中，`printName`方法中的`this`，默认指向`Logger`类的实例。但是，如果将这个方法提取出来单独使用，`this`会指向该方法运行时所在的环境，因为找不到`print`方法而导致报错
>2. 一个比较简单的解决方法是，在构造方法中绑定`this`，这样就不会找不到`print`方法了
>3. 另一种解决方法是使用箭头函数
>4. 还有一种解决方法是使用`Proxy`，获取方法的时候，自动绑定`this`(这种方式看不懂)

**严格模式**
- 类和模块的内部，默认就是严格模式，所以不需要使用`use strict`指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用
- 考虑到未来所有的代码，其实都是运行在模块之中，所以ES6实际上把整个语言升级到了严格模式

**name属性**
- 由于本质上，ES6的类只是ES5的构造函数的一层包装，所以函数的许多特性都被`Class`继承，包括`name`属性
- `name`属性总是返回紧跟在`class`关键字后面的类名

---
### 2. Class的继承

**基本用法**
- Class之间可以通过`extends`关键字实现继承，这比ES5的通过修改原型链实现继承，要清晰和方便很多
- 子类必须在`constructor`方法中调用`super`方法，否则新建实例时会报错。这是因为子类没有自己的`this`对象，而是继承父类的`this`对象，然后对其进行加工。如果不调用`super`方法，子类就得不到`this`对象
- ES5的继承，实质是先创造子类的实例对象`this`，然后再将父类的方法添加到`this`上面（`Parent.apply(this)`）。ES6的继承机制完全不同，实质是先创造父类的实例对象`this`（所以必须先调用`super`方法），然后再用子类的构造函数修改`this`
- 另一个需要注意的地方是，在子类的构造函数中，只有调用`super`之后，才可以使用`this`关键字，否则会报错。这是因为子类实例的构建，是基于对父类实例加工，只有`super`方法才能返回父类实例
- 子类的`constructor`方法没有调用`super`之前，就使用`this`关键字，结果报错，而放在`super`方法之后就是正确的

**类的prototype属性和__proto__属性**
- 大多数浏览器的ES5实现之中，每一个对象都有`__proto__`属性，指向对应的构造函数的prototype属性。Class作为构造函数的语法糖，同时有prototype属性和`__proto__`属性，因此同时存在两条继承链
  - 子类的`__proto__`属性，表示构造函数的继承，总是指向父类
  - 子类`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性


**Extends 的继承目标**
- `extends`关键字后面可以跟多种类型的值
- 只要是一个有`prototype`属性的函数，就能被继承

**Object.getPrototypeOf()**
- `Object.getPrototypeOf`方法可以用来从子类上获取父类
- 因此，可以使用这个方法判断，一个类是否继承了另一个类

**super 关键字**
- `super`这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同
- 第一种情况，`super`作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次`super`函数
- 第二种情况，`super`作为对象时，指向父类的原型对象
- 这里需要注意，由于`super`指向父类的原型对象，所以定义在父类实例上的方法或属性，是无法通过`super`调用的
- 如果属性定义在父类的原型对象上，`super`就可以取到

**实例的__proto__属性**
- 子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型

---
### 3. 原生构造函数的继承
- 原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript的原生构造函数大致有下面这些
  *   Boolean()
  *   Number()
  *   String()
  *   Array()
  *   Date()
  *   Function()
  *   RegExp()
  *   Error()
  *   Object()
- 以前，这些原生构造函数是无法继承的，比如，不能自己定义一个`Array`的子类
- 之所以会发生这种情况，是因为子类无法获得原生构造函数的内部属性，通过`Array.apply()`或者分配给原型对象都不行。原生构造函数会忽略`apply`方法传入的`this`，也就是说，原生构造函数的`this`无法绑定，导致拿不到内部属性
- ES6允许继承原生构造函数定义子类，因为ES6是先新建父类的实例对象`this`，然后再用子类的构造函数修饰`this`，使得父类的所有行为都可以继承

---
### 4. Class的取值函数（getter）和存值函数（setter）
- 与ES5一样，在Class内部可以使用`get`和`set`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为

---
### 5. Class 的 Generator 方法
- 如果某个方法之前加上星号（`*`），就表示该方法是一个 Generator 函数（不懂）

---
### 6. Class 的静态方法
- 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上`static`关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”
- 父类的静态方法，可以被子类继承
- 静态方法也是可以从`super`对象上调用的

---
### 7. Class的静态属性和实例属性
- 静态属性指的是Class本身的属性，即`Class.propname`，而不是定义在实例对象（`this`）上的属性
- ES6明确规定，Class内部只有静态方法，没有静态属性（可以在外边定义)
- ES7有一个静态属性的[提案](https://github.com/jeffmo/es-class-properties)，目前Babel转码器支持
- 这个提案对实例属性和静态属性，都规定了新的写法。
- （2）类的实例属性
  - 类的实例属性可以用等式，写入类的定义之中，可以在的实例上，可以读取这个属性
  - 以前，我们定义实例属性，只能写在类的`constructor`方法里面，有了新的写法以后，可以不在`constructor`方法里面定义
  - 为了可读性的目的，对于那些在`constructor`里面已经定义的实例属性，新写法允许直接列出

- （2）类的静态属性
  - 类的静态属性只要在上面的实例属性写法前面，加上`static`关键字就可以了

---
### 8. 类的私有属性
- 目前，有一个[提案](https://github.com/tc39/proposal-private-fields)，为`class`加了私有属性。方法是在属性名之前，使用`#`表示
- 另外，Ruby 语言使用`@`表示私有属性，ES6 没有用这个符号而使用`#`，是因为`@`已经被留给了 Decorator
- 该提案只规定了私有属性的写法。但是，很自然地，它也可以用来写私有方法

---
### 9. new.target属性
- `new`是从构造函数生成实例的命令。ES6为`new`命令引入了一个`new.target`属性，（在构造函数中）返回`new`命令作用于的那个构造函数
- 如果构造函数不是通过`new`命令调用的，`new.target`会返回`undefined`，因此这个属性可以用来确定构造函数是怎么调用的
- Class内部调用`new.target`，返回当前Class
- 需要注意的是，子类继承父类时，`new.target`会返回子类

---
### 10. Mixin模式的实现
- Mixin模式指的是，将多个类的接口“混入”（mix in）另一个类
