### HTML5存储
[教程地址：HTML5存储](http://www.imooc.com/learn/104)

---
### 第1章 关于浏览器端存储
#### 1-1 HTML5存储之课程简介
- HTML时代的
  - localstorage
  - application cache 离线缓存
  - indexedDb  离线数据库
- 解决的问题
  - 如何将图片存储在客户端
  - 如何实现跨域共享客户端缓存
  - 如何做到真正的离线访问web应用
  - 如何实现一个客户端的数据库

#### 1-2 关于存储
- 介绍了cookie存储

#### 1-3 cookies在浏览器端的存储形态
- key-value形式

- H5存储解决了cookie的问题
  - 1. 解决cookie总数和单个大小的限制(4k 4095B)
  - 2. 解决请求头常带存储信息的问题
  - 3. 解决关系型存储的问题
  - 4. 跨浏览器

---
### 第2章 H5的三种存储方式
#### 2-1 Html5的几种存储形式
- localstorage API
  - getItem
  - setItem
  - removeItem
  - key
  - clean

- H5本地存储的使用限制
  - 1. 需要添加存储更新策略和过期控制
  - 2. 子域名之间不能共享存储数据
  - 3. 超出存储后如何存储(LRU,FIFO)  -->  LRU (Least Recently Used) FIFO (先入先出)
  - 4. server端如何取到

#### 2-2 HTML5存储之indexeddb的概念
- indexedDB：
  - 一种能在浏览器中持久存储结构化数据的DB，并且为web应用提供了丰富的查询能力
  - 浏览器支持：Opera不支持，IE10+，移动端支持弱

#### 2-3 HTML5存储之indexedDB的实际操作
#### 2-4 html5离线缓存（上）
#### 2-5 html5离线缓存（下）

---
### 第3章 一些非主流的存储实现
#### 3-1 HTML5非主流存储

---
### 第4章 总结
#### 4-1 总结
