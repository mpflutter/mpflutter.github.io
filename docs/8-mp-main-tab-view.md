---
id: mp-main-tab-view
title: MPMainTabView
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

提供一个脚手架，用于搭建一个拥有底部 TabBar 的页面，该 TabView 将帮助你实现最基本的 Tab 图标渲染，Tab 页切换等能力。

最常用的情况是一个应用的主屏幕，主屏幕的最下方拥有一个不多于 5 个图标的 TabBar，点击每一个图标均可切换到相应的页面。

## 基本用法

<MPFlutterPlayground source="/zh/samples/main_tab_view.txt" height="500px" />

本例子演示了如何为 TabBar 定义两个页面，并为其设置图标。

## API

### MPMainTabView

<API name="tabs" 
     type="List<MPMainTabItem>" 
     desc="页面列表" 
     more="必填" />

<API name="loadingBuilder" 
     type="WidgetBuilder?" 
     desc="页面加载状态下的 Placeholder" 
     more="非必填" />

<API name="tabBarBuilder" 
     type="Widget Function(BuildContext, int)?" 
     desc="可以通过该 builder 自定义 TabBar 渲染内容" 
     more="非必填" />

<API name="controller" 
     type="MPMainTabController?" 
     desc="Tab 控制器，用于控制页面切换。" 
     more="非必填" />

<API name="keepAlive" 
     type="Bool" 
     desc="默认值为 false，当该值为 true 时，Tab 切换后，页面状态会被保留。" 
     more="非必填" />

### MPMainTabItem

<API name="activeTabWidget" 
     type="Widget" 
     desc="激活态的图标组件" 
     more="必填" />

<API name="inactiveTabWidget" 
     type="Widget" 
     desc="非激活态的图标组件" 
     more="必填" />

<API name="builder" 
     type="WidgetBuilder" 
     desc="该 Tab 对应的页面内容，必须包含一个带有 MPScaffold 的 Widget。" 
     more="必填" />

### MPMainTabController

<API name="currentPage" 
     type="int" 
     desc="当前页码，从 0 开始。" 
     more="只读" />

<API name="void jumpToPage(int page)" 
     type="method" 
     desc="以无动画方式切换到指定页码" 
     more="" />