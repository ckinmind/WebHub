### 第4章 Sass的函数功能-颜色函数 
[教程地址：第4章 Sass的函数功能-颜色函数 ](http://www.imooc.com/code/8415)

---
### 4-1 RGB颜色函数-RGB()颜色函数
- 在 Sass 中为 RGB 颜色提供六种函数
  - rgb($red,$green,$blue)：根据红、绿、蓝三个值创建一个颜色；
  - rgba($red,$green,$blue,$alpha)：根据红、绿、蓝和透明度值创建一个颜色；
  - red($color)：从一个颜色中获取其中红色值；
  - green($color)：从一个颜色中获取其中绿色值；
  - blue($color)：从一个颜色中获取其中蓝色值；
  - mix($color-1,$color-2,[$weight])：把两种颜色混合在一起。

---
### 4-2 至 4-4
>略

---
### 4-5 HSL函数简介
- 在 Sass 中提供了一系列有关于 HSL 的颜色函数
  - hsl($hue,$saturation,$lightness)：通过色相（hue）、饱和度(saturation)和亮度（lightness）的值创建一个颜色；
  - hsla($hue,$saturation,$lightness,$alpha)：通过色相（hue）、饱和度(saturation)、亮度（lightness）和透明（alpha）的值创建一个颜色；
  - hue($color)：从一个颜色中获取色相（hue）值；
  - saturation($color)：从一个颜色中获取饱和度（saturation）值；
  - lightness($color)：从一个颜色中获取亮度（lightness）值；
  - adjust-hue($color,$degrees)：通过改变一个颜色的色相值，创建一个新的颜色；
  - lighten($color,$amount)：通过改变颜色的亮度值，让颜色变亮，创建一个新的颜色；
  - darken($color,$amount)：通过改变颜色的亮度值，让颜色变暗，创建一个新的颜色；
  - saturate($color,$amount)：通过改变颜色的饱和度值，让颜色更饱和，从而创建一个新的颜色
  - desaturate($color,$amount)：通过改变颜色的饱和度值，让颜色更少的饱和，从而创建出一个新的颜色；
  - grayscale($color)：将一个颜色变成灰色，相当于desaturate($color,100%);
  - complement($color)：返回一个补充色，相当于adjust-hue($color,180deg);
  - invert($color)：反回一个反相色，红、绿、蓝色值倒过来，而透明度不变。

---
### 4-6 至 4-9
>略

---
### 4-10 Opacity函数简介
- 在 CSS 中除了可以使用 rgba、hsla 和 transform 来控制颜色透明度之外，还可以使用 opacity 来控制，只不过前两者只是针对颜色上的透明通道做处理，而后者是控制整个元素的透明度
- 在 Sass 中，也提供了系列透明函数，只不过这系列的透明函数主要用来处理颜色透明度
  - alpha($color) /opacity($color)：获取颜色透明度值；
  - rgba($color, $alpha)：改变颜色的透明度值；
  - opacify($color, $amount) / fade-in($color, $amount)：使颜色更不透明；
  - transparentize($color, $amount) / fade-out($color, $amount)：使颜色更加透明

---
### 4-11 至 4-14 
>略

---
### 4-15 颜色函数实战——七色卡
>略
