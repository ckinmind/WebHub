### 第3章 Sass的函数功能-列表函数 
[教程地址：第3章 Sass的函数功能-列表函数 ](http://www.imooc.com/code/8441)

---
### 3-1 列表函数简介
- 列表函数主要包括一些对列表参数的函数使用，主要包括以下几种：
  - `length($list)`：返回一个列表的长度值；
  - `nth($list, $n)`：返回一个列表中指定的某个标签值
  - `join($list1, $list2, [$separator])`：将两个列给连接在一起，变成一个列表；
  - `append($list1, $val, [$separator])`：将某个值放在列表的最后；
  - `zip($lists…)`：将几个列表结合成一个多维的列表；
  - `index($list, $value)`：返回一个值在列表中的位置值。

---
### 3-2 至 3-7 
>略

---
### 3-8 Introspection函数
  - `Introspection` 函数包括了几个判断型函数
  - `type-of($value)`：返回一个值的类型
  - `unit($number)`：返回一个值的单位
  - `unitless($number)`：判断一个值是否带有单位
  - `comparable($number-1, $number-2)`：判断两个值是否可以做加、减和合并

---
### 3-9 至 3-12 
>略

---
### 3-13 Miscellaneous函数
- 在这里把 Miscellaneous 函数称为三元条件函数，主要因为他和 JavaScript 中的三元判断非常的相似。他有两个值，当条件成立返回一种值，当条件不成立时返回另一种值 `if($condition,$if-true,$if-false)`

---
### 3-14 Map
- Sass 的 map 常常被称为数据地图，也有人称其为数组，因为他总是以 key:value 成对的出现，但其更像是一个 JSON 数据

```
$theme-color: (
    default: (
        bgcolor: #fff,
        text-color: #444,
        link-color: #39f
    ),
    primary:(
        bgcolor: #000,
        text-color:#fff,
        link-color: #93f
    ),
    negative: (
        bgcolor: #f36,
        text-color: #fefefe,
        link-color: #d4e
    )
);
```

---
### 3-15 Sass Maps的函数
- 前面介绍了使用 map 来管理变量，但要在 Sass 中获取变量，或者对 map 做更多有意义的操作，我们必须借助于 map 的函数功能。在 Sass 中 map 自身带了七个函数
  - map-get($map,$key)：根据给定的 key 值，返回 map 中相关的值。
  - map-merge($map1,$map2)：将两个 map 合并成一个新的 map。
  - map-remove($map,$key)：从 map 中删除一个 key，返回一个新 map。
  - map-keys($map)：返回 map 中所有的 key。
  - map-values($map)：返回 map 中所有的 value。
  - map-has-key($map,$key)：根据给定的 key 值判断 map 是否有对应的   - - value 值，如果有返回 true，否则返回 false。
  - keywords($args)：返回一个函数的参数，这个参数可以动态的设置 key 和 value
  
---
### 3-16 至 3-20
>略
