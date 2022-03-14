---
id: mpkit-intro
title: MPKit 介绍
---

MPKit 是 MPFlutter 专为微信小程序、Web 开发的跨端组件库。

### MPEnv

该类提供一些工具方法，帮助你确定当前程序运行的宿主环境，包括 userAgent 也可以在这里获得。

### MPScaffold

页面脚手架组件，提供标题栏、底栏、正文、浮动元素等页面脚手架能力。

同时，MPScaffold 可响应页面的下拉刷新、加载更多、页面滚动、分享信息配置等回调。

### MPMainTabView

提供一个脚手架，用于搭建一个拥有底部 TabBar 的页面，该 TabView 将帮助你实现最基本的 Tab 图标渲染，Tab 页切换等能力。

最常用的情况是一个应用的主屏幕，主屏幕的最下方拥有一个不多于 5 个图标的 TabBar，点击每一个图标均可切换到相应的页面。

### MPAppBar

预定义的 AppBar 组件，可用于在需要定制化微信小程序导航栏时使用。

### MPWebDialog

WebDialog API 提供与 Platform 相关的 Alert / Confirm / Prompt / ActionSheet / Toast 等模态对框话能力。

### MPDialog

Dialog API 提供可完全自定义的模态对框架弹出能力。

### MPEditableText

提供一个无任何样式的文本输入框。

### MPIcon

预定义的图标组件，内置完整的 MaterialIcon 图标，可用于快速填充设计和开发需要的图标样式。

### MPPageView

支持左右、上下切换的分页滑动组件。

### MPWebView

提供可嵌入的 WebView 能力，在 Web 上是 iframe，在微信小程序上是 WebView（铺满全屏）。

### MPVideoView

提供可嵌入的视频播放器，并提供 VideoController。

### MPSwitch

提供一个 weui 风格的开关选择器。

### MPSlider

提供一个 weui 风格的滑杆控制器。

### MPPicker / MPDatePicker

提供一个 weui 风格的单列、多列、日期选项选择器。

### MPWaterfall

MPFlutter 通过 WaterfallView 和 SliderWaterfall 提供瀑布流布局支持，你可以通过以下方式使用该布局。

### MPCircularProgressIndicator

预定义的 Loading 指示器，其样式在 Web / 小程序 / Android 中为 Material 样式，在 iOS 中则为菊花样式。

### MPRefreshIndicator

可用于替换 Flutter 中的 RefreshIndicator，可为 ListView / GridView / CustomScrollView 添加一个下拉刷新指示器。

### MPReachBottomListener

可用于监听 ListView GridView WaterfallView CustomScrollView 等组件滚动到底部时的事件，可用于『加载更多』的场景。