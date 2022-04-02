---
id: mp-page-view
title: MPPageView
---

import {MPFlutterPlayground} from './0-playground.mdx';
import {API} from './0-api.mdx';

支持左右、上下切换的分页滑动组件，同时提供 MPPageController 用于监听页面变更，控制页面切换。

## 基本用法

<MPFlutterPlayground source="/zh/samples/page_view.txt" height="500px" />

## API 文档

### MPPageView

<API name="children" 
     type="List<Widget>" 
     desc="各分页内容" 
     more="必填" />

<API name="scrollDirection" 
     type="Axis" 
     desc="滚动的方向，横向或竖向" 
     more="非必填,默认值为 Axis.horizontal" />

<API name="loop" 
     type="bool" 
     desc="是否循环滚动，即滑动到最后一页时，继续滑动可到达第一页。" 
     more="非必填,默认值为 false" />

<API name="autoplay" 
     type="bool" 
     desc="是否自动播放。" 
     more="非必填,默认值为 false" />

<API name="controller" 
     type="MPPageController?" 
     desc="控制器" 
     more="非必填" />

### MPPageController

<API name="MPPageController({this.initialPage = 0})" 
     type="constructor" 
     desc="可使用 initialPage 指定初始页码" 
     more="构造函数" />

<API name="page" 
     type="int" 
     desc="当前页码，从 0 开始。" 
     more="只读" />

<API name="void animateToPage(int page, {Duration? duration,Curve? curve})" 
     type="method" 
     desc="以动画方式切换到指定页码" 
     more="" />

<API name="void jumpToPage(int page)" 
     type="method" 
     desc="以无动画方式切换到指定页码" 
     more="" />

<API name="void nextPage({Duration? duration, Curve? curve})" 
     type="method" 
     desc="切换到下一页" 
     more="" />

<API name="void previousPage({Duration? duration, Curve? curve})" 
     type="method" 
     desc="切换到上一页" 
     more="" />