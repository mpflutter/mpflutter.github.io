---
id: ui-widgets
title: Widgets 介绍
---

import {MPFlutterPlayground} from './0-playground.mdx';

> MPFlutter 与 Flutter 共享同一套 Widget 组件库，使用方法基本一致，以下教程来自 flutter.cn 网站，根据 MPFlutter 特性有所修改。

Flutter 从 React 中吸取灵感，通过现代化框架创建出精美的组件。它的核心思想是用 widget 来构建你的 UI 界面。 Widget 描述了在当前的配置和状态下视图所应该呈现的样子。当 widget 的状态改变时，它会重新构建其描述（展示的 UI），框架则会对比前后变化的不同，以确定底层渲染树从一个状态转换到下一个状态所需的最小更改。

## Hello World!

创建一个最小的 MPFlutter 应用，至少需要使用 `runApp` 方法，以及 `MPApp` `MPScaffold` 两个组件：

<MPFlutterPlayground source="/zh/samples/helloworld.txt" height="500px" />

`runApp()` 函数会持有传入的 Widget，并且使它成为 widget 树中的根节点。

`MPApp` 组件负责管理整个应用的路由。

`MPScaffold` 组件负责管理单个页面的布局。

一个应用只能拥有*一个* `MPApp` 组件，一个页面只能拥有*一个* `MPScaffold` 组件。

在 Hello,World! 工程中，`MPScaffold` 默认使其 `body` 铺满整个页面，`Center` 组件会使其 child: `Container` 和 `Text` 组件居中于整个屏幕。

在编写应用的过程中，取决于是否需要管理状态，你通常会创建一个新的组件继承 `StatelessWidget` 或 `StatefulWidget`。 Widget 的主要工作是实现 `build` 方法，该方法根据其它较低级别的 widget 来描述这个 widget。框架会逐一构建这些 widget，直到最底层的描述 widget 几何形状的 `RenderObject`。

## 基础 widgets

Flutter 自带了一套强大的基础 widgets，下面列出了一些常用的：

[Text](https://api.flutter-io.cn/flutter/widgets/Text-class.html)

`Text` widget 可以用来在应用内创建带样式的文本。

[Row](https://api.flutter-io.cn/flutter/widgets/Row-class.html), [Column](https://api.flutter-io.cn/flutter/widgets/Column-class.html)

这两个 flex widgets 可以让你在水平 (`Row`) 和垂直(`Column`) 方向创建灵活的布局。它是基于 web 的 flexbox 布局模型设计的。

[Stack](https://api.flutter-io.cn/flutter/widgets/Stack-class.html)

`Stack` widget 不是线性（水平或垂直）定位的，而是按照绘制顺序将 widget 堆叠在一起。你可以用 `Positioned` widget 作为 `Stack` 的子 widget，以相对于 `Stack` 的上，右，下，左来定位它们。 Stack 是基于 Web 中的绝对位置布局模型设计的。

[Container](https://api.flutter-io.cn/flutter/widgets/Container-class.html)

`Container` widget 可以用来创建一个可见的矩形元素。 `Container` 可以使用 `BoxDecoration` 来进行装饰，如背景，边框，或阴影等。 `Container` 还可以设置外边距、内边距和尺寸的约束条件等。另外，`Container` 可以使用矩阵在三维空间进行转换。

下面是一些简单的 widget，它们结合了上面提到的 widget 和一些其他的 widget：

<MPFlutterPlayground source="/zh/samples/simple_layout.txt" height="500px" />

该例子中，`MPScaffold` 下的 `Column` 组件会使其所有子组件以垂直方式布局，其第一个子组件 `Row` 则会使其所有子组件以水平方式布局，`Expanded` 组件会获取 `Row` 的所有剩余空间。你可以定义多个 `Expanded` 子 widget，并使用 flex 参数确定它们占用可用空间的比例。

## 处理手势、根据用户输入改变 widget 

大多数应用都需要通过系统来处理一些用户交互。 `MPFlutter` 提供 `GestureDetector` 组件满足各类手势需求。

上述例子基于 `StatelessWidget` 构建，但如果在响应手势以后，需要改变 widget 样式，则需要使用 `StatefulWidget` 进行 widget 树构建。

<MPFlutterPlayground source="/zh/samples/tap_gesture.txt" height="500px" />

注意：`GestureDetector` 存在手势冲突问题，`onTap` 与 `onPan` 同时存在时，`onTap` 会被忽略。