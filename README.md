# 一款简洁美观的web版知乎日报

## 效果图
首页
![index](./demo/index.gif)
查看文章
![story](./demo/story.gif)
主题日报
![subject](./demo/subject.gif)
收藏文章
![favorite](./demo/favorite.gif)
热门文章
![hot](./demo/hot.gif)
首页切换日期
![switchDate](./demo/date.gif)   

## 简介

一个应用(Vuejs)[https://cn.vuejs.org/]的纯前端项目, (vue-router)[https://router.vuejs.org/]做前端路由跳转, 结合(vuex)[https://vuex.vuejs.org/]和localStroage开发了收藏功能, 使用(axios)[https://github.com/mzabriskie/axios]进行资源请求.

## 开发流程

首先使用vue-cli按提示创建好项目, 然后依自己需要安装依赖, 我选择了我觉得挺好

看的[Materialize](http://materializecss.com/)作为UI框架, 还有[toastr](https://github.com/CodeSeven/toastr),

 一个弹出toast的库, 然后参考了[Gallery](https://themes.materializecss.com/pages/demo)和

 [colorhurt](http://colorhunt.co/), 这两个网站的风格, 设计了页面.

```bash
npm install materialize-css toastr --save
```

安装完全部依赖, 删除不需要的文件.

因为跨域的原因, 对config/index.js里面的proxyTable进行设置,是的开发的时候方便获取数据, 详细内容参考[文档](https://vuejs-templates.github.io/webpack/proxy.html).
```javascript
proxyTable: {
  '/api': {
    target: 'http://news-at.zhihu.com',
    changeOrigin: true
  }
},
```
接下来分析需要的几个组件, 顶部导航栏compoments/navbar.vue, 主要功能是导航, 和显示路由的位置
 页脚, 首页, 显示文章页面, 显示主题日报页面和显示已收藏文章的页面,

在src/compoments文件夹里面创建.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 知乎日报API

感谢[知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)提供的接口

written by [xrr2016](https://github.com/xrr2016),欢迎issue,fork,star.
