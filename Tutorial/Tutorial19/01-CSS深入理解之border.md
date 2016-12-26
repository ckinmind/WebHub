### CSS深入理解之border
[教程地址：CSS深入理解之border](http://www.imooc.com/learn/755)

---
### 第1章 border-width不支持百分比 
#### 1-1 1. border-width为何不支持百分比值
- **为何boder-width不支持百分比值**
  - 语义和使用场景决定，边框不会因为设备变大就按比例变大
  - 类似属性的还有：outline,box-shadow,text-shadow
- border-width还支持关键字：thin（细的1px）,medium(默认值3px),thick(厚的，5px)

---
### 第2章 深入了解各种border-style类型 
#### 2-1 2. 了解各种border-style类型 
- `border-style:solid;` 实线
- `border-style:dashed;` 虚线
- `border-style:dotted;` 点线
- `border-style:double;` 双线
- `border-style:inset;` 内凹（基本不用）
- ...

---
### 第3章 border与color 
####  3-1 3. border-color与color 
- border-color默认颜色就是color颜色值
- hover的时候文字和边框的颜色可以一起变

---
### 第4章 border与background定位 
####  4-1 4. border与background定位 
>background-position默认相对左上方定位，如果要默认右方50px定位呢
>这时候可以加一个`border-right:50px solid transparent;background-position:100% 40px;`

---
###  第5章 border与三角等图形构建 
####  5-1 5. border与三角等图形构建 

```css
.trangle {
  width:0;
  height:0;
  border:100px solid;
  border-color:red transparent transparent transparent;
}
```
>以上显示一个向下三角形，遵循上右下左，将其他三个设为透明就行了
>还可以做圆角，就是拼接上下边框，上下边框其实就是个梯形

---
###  第6章 border与透明边框 
####  6-1 6. border与透明边框 
- transparent关键字从IE7开始兼容
- 增加复选框相应区域的大小
- 增加可视渲染区域

---
###  第7章 border在布局中的应用 
####  7-1 7. border在布局中的应用
- 两栏等高布局（`border-left:300px solid`跪了...）
