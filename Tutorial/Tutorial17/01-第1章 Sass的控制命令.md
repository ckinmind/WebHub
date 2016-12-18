### 第1章 Sass的控制命令 
[教程地址：第1章 Sass的控制命令 ](http://www.imooc.com/code/9640)

---
### 1-1 Sass课程简介
>略

---
### 1-2 @if
```
//SCSS
@mixin blockOrHidden($boolean:true) {
  @if $boolean {
      @debug "$boolean is #{$boolean}";
      display: block;
    }
  @else {
      @debug "$boolean is #{$boolean}";
      display: none;
    }
}

.block {
  @include blockOrHidden;
}

.hidden{
  @include blockOrHidden(false);
}

// 编译出来的CSS:
.block {
  display: block;
}

.hidden {
  display: none;
}
```

---
### 1-3 @for循环（上）
```
@for $i from <start> through <end>
@for $i from <start> to <end>
```
>这两个的区别是关键字 through 表示包括 end 这个数，而 to 则不包括 end 这个数

```
//SCSS
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

//CSS
.item-1 {
  width: 2em;
}

.item-2 {
  width: 4em;
}

.item-3 {
  width: 6em;
}
```

---
### 1-4 @for循环 （下）
>略

---
### 1-5 @while循环
```
//SCSS
$types: 4;
$type-width: 20px;

@while $types > 0 {
    .while-#{$types} {
        width: $type-width + $types;
    }
    $types: $types - 1;
}

//CSS
.while-4 {
  width: 24px;
}

.while-3 {
  width: 23px;
}

.while-2 {
  width: 22px;
}

.while-1 {
  width: 21px;
}
```

---
### 1-6 @each循环
- @each 循环就是去遍历一个列表，然后从列表中取出对应的值

```
// @each 循环指令的形式
@each $var in <list>
```
