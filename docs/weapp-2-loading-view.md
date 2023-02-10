---
id: weapp-loading-view
title: LoadingView
---

从 1.1.0 版本开始，支持自定义 LoadingView 加载视图。

由于小程序以及 MPFlutter 框架性能限制，页面加载会存在 0.5 ~ 2 秒耗时，在加载过程中如果展示一个白屏页面，会使用户感到困惑。

现在，你可以使用 LoadingView 解决这一问题。

在 `mpflutter_template` 工程中，修改 `weapp/pages/loading-view/index.wxml` 即可。

它是一个纯小程序页面，只支持 HTML / CSS，不可以使用 Flutter / Dart 技术编写。