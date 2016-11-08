
# 教程： 打造网页版「大白」

### 一. 教程信息

教程地址：
>[打造网页版「大白](https://www.shiyanlou.com/courses/328/labs/1009/document)

在线预览：
>[RunJs: Baymax](http://runjs.cn/detail/lyqo4w4n)

说明
>实验楼上的一个教程，用css实现一个大白

评价：
>对相对定位有了更好的理解，很好的教程

---
### 二. 疑问和解答

####  疑问
1. 为什么两个眼睛的top偏移不一样？
2. 为什么z-index没有生效
3. 为什么父级元素设置了transform会影响到子元素

#### 解释

##### 1. 为什么两个眼睛的top偏移不一样？
```
#eye,#eye2{
	width:11px;
	height:13px; /* 眼睛的高度*/
	background: #282828;
	border-radius: 50%;
	position:relative;  /* 相对定位 */
	top:30px;   /*第一只眼睛的top偏移*/
	left:27px;

	transform: rotate(8deg);
}

#eye2{
	transform: rotate(-8deg);
	left:69px;
	top:17px;   /*第二只眼睛的偏移*/
}
```
>1. 相对定位relative是相对于自己原来的位置进行偏移
>2.  div是块级元素，块级元素默认是独占一行，所以两只眼睛的原生位置就是一上一下，那么偏移的时候距离顶部的距离肯定也不一样
>3. 第二只眼睛的top偏移量 17px，加上高度13px，刚好是第一只眼睛的top偏移30px

##### 2. 为什么z-index没有生效
```
#head{
	height:64px;
	width:100px;
    /*以百分比定义圆角的形状*/
	border-radius: 50%;
     /*背景*/
	background: #fff;
	/*设置居中*/
 	margin:0 auto;
 	margin-bottom: -20px;
 	border-bottom: 5px solid #e0e0e0;
    
    position: relative;
 	z-index: 100;  /*z-index 生效的前提条件是该元素是定位元素*/
}
```
>1. 将` position: relative;`去掉，就会发现层级变了
>2. 要想给元素设置z-index样式，必须先让它变成定位元素，说的明白一点，就是要给元素设置一个`postion:relative`(定位元素：position属性值设置除默认值static以外的元素，包括relative，absolute，fixed)样式

##### 3. 为什么父级元素设置了transform会影响到子元素
```
/*left-arm 是l-bigfinger的父级 */
#left-arm,#right-arm{
	height:270px;
	width:120px;
	border-radius: 50%;
	background: #fff;
	margin: 0 auto;
	position: relative;
	top:-350px;
	left:-100px;
	transform: rotate(20deg);
	z-index:-1;
}

#l-bigfinger,#r-bigfinger{
	height:50px;
	width:20px;
	border-radius: 50%;
	background: #fff;
	position: relative;
	top:250px;
	left:50px;
	transform: rotate(-50deg); /*即使注释这行，左大拇指也是歪的*/
}
```
>1. 这个属性就是会影响子元素的偏转
>2. 如果想子元素不受影响，查看[这里](https://segmentfault.com/q/1010000002690355)



### 三. 学习笔记

#### 回顾
- 对定宽块状元素，设置`margin:0 auto`即可居中
- 相对定位是对自己原生位置的偏移，不脱离文档流

#### 新学属性

##### 1. border-radius 
- 作用：向 div 元素添加圆角边框
- CSS3新特性
- border-radius 属性是一个简写属性，用于设置四个 border-*-radius 属性
- 支持百分比和长度值设置
- 更多查看[ CSS3 border-radius 属性](http://www.w3school.com.cn/cssref/pr_border-radius.asp)


##### 2. transform
- 作用：transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜
- 有2D和3D转换，不同浏览器支持的有差异
- 更多查看 [CSS3 transform 属性](http://www.w3school.com.cn/cssref/pr_transform.asp)
