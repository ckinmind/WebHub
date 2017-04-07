### Symbol
[参考资料：Symbol](http://es6.ruanyifeng.com/#docs/symbol)

---
### 目录
```
1. 概述
2. 作为属性名的Symbol
3. 实例：消除魔术字符串
4. 属性名的遍历
5. Symbol.for()，Symbol.keyFor()
6. 实例：模块的 Singleton 模式
7. 内置的Symbol值
```

---
### 1. 概述
- ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
- Symbol值通过`Symbol`函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的Symbol类型。凡是属性名属于Symbol类型，就都是独一无二的，可以保证不会与其他属性名产生冲突
- 注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的Symbol是一个原始类型的值，不是对象。也就是说，由于Symbol值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型
- Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分
- 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
- 注意，Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
- Symbol值不能与其他类型的值进行运算，会报错

---
### 2. 作为属性名的Symbol
- 由于每一个Symbol值都是不相等的，这意味着Symbol值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖
- 注意，Symbol值作为对象属性名时，不能用点运算符
- 同理，在对象的内部，使用Symbol值定义属性时，Symbol值必须放在方括号之中
- Symbol类型还可以用于定义一组常量，保证这组常量的值都是不相等的

---
### 3. 实例：消除魔术字符串

---
### 4. 属性名的遍历
- Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名
- Object.getOwnPropertySymbols方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值
- 另一个新的API，Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名
- 由于以 Symbol 值作为名称的属性，不会被常规方法遍历得到。我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法

---
### 5. Symbol.for()，Symbol.keyFor()
- 有时，我们希望重新使用同一个Symbol值，Symbol.for方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值
- Symbol.for()与Symbol()这两种写法，都会生成新的Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会

---
### 6. 实例：模块的 Singleton 模式
- Singleton模式指的是调用一个类，任何时候返回的都是同一个实例

---
### 7. 内置的Symbol值
- 除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法
- 略






















