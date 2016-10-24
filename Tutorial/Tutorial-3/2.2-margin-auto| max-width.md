###  margin: auto / max-width
[教程地址： margin: auto](http://zh.learnlayout.com/margin-auto.html)
[教程地址：  max-width](http://zh.learnlayout.com/max-width.html)

--- 
```
#main  {  width:  600px;  margin:  0  auto;  }
```
>设置块级元素的 `width` 可以阻止它从左到右撑满容器。然后你就可以设置左右外边距为 `auto` 来使其水平居中。元素会占据你所指定的宽度，然后剩余的宽度会一分为二成为左右外边距。

唯一的问题是，当浏览器窗口比元素的宽度还要窄时，浏览器会显示一个水平滚动条来容纳页面

```
#main  {  max-width:  600px;  margin:  0  auto;  }
```
>在这种情况下使用 `max-width` 替代 `width` 可以使浏览器更好地处理小窗口的情况。这点在移动设备上显得尤为重要
>顺便提下， [所有的主流浏览器](http://caniuse.com/#search=max-width)包括IE7+在内都支持 `max-width` ，所以放心大胆的用吧

**备注：**这个 [网站](http://caniuse.com/)可以查看css属性在各个浏览器的支持情况
