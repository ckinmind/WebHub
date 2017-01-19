### webpack
[如何使用webpack—webpack-howto](http://www.tuicool.com/articles/rQFZFvU)
[阮一峰：webpack demos(英文)](https://github.com/ruanyf/webpack-demos)
[阮一峰webpakc教程的翻译](http://www.cnblogs.com/worldly1013/p/5989863.html)
[WebPack 简明学习教程](http://www.jianshu.com/p/b95bbcfc590d)
[webpack-dev-server说明](http://www.jianshu.com/p/941bfaf13be1)
[WebPack常用功能介绍](http://www.tuicool.com/articles/vAbYruq)
[(三)webpack入门——webpack功能集合的demo](http://www.cnblogs.com/erduyang/p/5617917.html)
[WebPack 常用功能介绍](https://segmentfault.com/a/1190000004172052)


---
### 1. webpack-dev-server
- webpack-dev-server是一个小型的node.js Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务
- 简单来说，webpack-dev-server就是一个小型的静态文件服务器。使用它，可以为webpack打包生成的资源文件提供Web服务
- webpack-dev-server有两种模式支持自动刷新——iframe模式和inline模式。在iframe模式下：页面是嵌套在一个iframe下的，在代码发生改动的时候，这个iframe会重新加载；在inline模式下：一个小型的webpack-dev-server客户端会作为入口文件打包，这个客户端会在后端代码改变的时候刷新页面

```
webpack-dev-server
webpack-dev-server就是一个小型的静态文件服务器。使用它，可以为webpack打包生成的资源文件提供Web服务
```


---
### 2. 一个 webpack.config.js案例
```
```
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
    //插件项
    plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        index : './src/js/page/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/js/page',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
        root: 'E:/github/flux-example/src', //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            AppStore : 'js/stores/AppStores.js',
            ActionType : 'js/actions/ActionType.js',
            AppAction : 'js/actions/AppAction.js'
        }
    }
};
```
```
