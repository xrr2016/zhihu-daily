# 一款简洁美观的web版知乎日报

## 效果图    

## 简介
  结合Vuejs和Materialize框架开发的一个web端知乎日报.

## 开发流程

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

感谢[知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)  

1. 启动界面图像获取: http://news-at.zhihu.com/api/4/start-image/1080\*1776

2. 软件版本查询

   Android: http://news-at.zhihu.com/api/4/version/android/2.3.0

   iOS: http://news-at.zhihu.com/api/4/version/ios/2.3.0

3. 最新消息: http://news-at.zhihu.com/api/4/news/latest      

4. 消息内容获取与离线下载: http://news-at.zhihu.com/api/4/news/3892357

5. 过往消息: http://news-at.zhihu.com/api/4/news/before/20131119

6. 新闻额外信息: http://news-at.zhihu.com/api/4/story-extra/#{id}

7. 新闻对应长评论查看: http://news-at.zhihu.com/api/4/story/8997528/long-comments

8. 新闻对应短评论查看: http://news-at.zhihu.com/api/4/story/4232852/short-comments

9. 主题日报列表查看: http://news-at.zhihu.com/api/4/themes

 10. 主题日报内容查看: http://news-at.zhihu.com/api/4/theme/11

 11. 热门消息: http://news-at.zhihu.com/api/3/news/hot

 12. 栏目总览: http://news-at.zhihu.com/api/3/sections

 13. 栏目具体消息查看: http://news-at.zhihu.com/api/3/section/1

 14. 查看新闻的推荐者: http://news-at.zhihu.com/api/4/story/#{id}/recommenders

 15. 获取某个专栏之前的新闻: http://news-at.zhihu.com/api/4/section/#{section id}/before/#{timestamp}

 16. 查看 Editor 的主页

    Android: http://news-at.zhihu.com/api/4/editor/#{id}/profile-page/android

    iOS: http://news-at.zhihu.com/api/4/editor/#{id}/profile-page/ios

written by [xrr2016](https://github.com/xrr2016),欢迎issue,fork,star.
