# 教程： 基于bootstrap的网页开发

---
### 一. 教程信息

教程地址：
>[教程地址： 基于bootstrap的网页开发](http://www.imooc.com/learn/182)，制作一个页面：现代浏览器博物馆

在线预览:
>无

评价：
>使用了一些bootstrap的组件，实践了一些网页自适应

---
### 二. 疑问和解答

#### 疑问
1. 响应式布局的媒体查询用法


#### 解释

#####  1. 响应式布局的媒体查询用法
```
  @media (max-width: 769px){
            .summary {
                padding-right: 3px;
                padding-left: 3px;
            }
 }
 
  @media (min-width: 992px) {
            .feature-heading {
                margin-top: 120px;
            }
   }
   
============================
使用 @media 查询，你可以针对不同的媒体类型定义不同的样式。
@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。
当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面

CSS 语法:
@media mediatype and|not|only (media feature) {
    CSS-Code;
}

也可以针对不同的媒体使用不同 stylesheets :
<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">

媒体类型:
all	用于所有设备
print	用于打印机和打印预览
screen	用于电脑屏幕，平板电脑，智能手机等。
speech	应用于屏幕阅读器等发声设备
```
