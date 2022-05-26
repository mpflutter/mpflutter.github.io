---
id: weapp-route-page2
title: 根据路由生成和配置页面
---

> 要求 MPFlutter 内核版本 >= 0.10.0

MPFlutter 默认使用 `pages/index/index` 页面承载所有路由页面，它会使用 `route` 参数区分不同的 Flutter 页面。

## 默认路由

举个例子，当你需要跳转至 `/second` 页时，执行以下代码。

```dart
Navigator.of(context).pushNamed('/second');
```

则小程序会打开路径为 `pages/index/index?route=/second` 的页面。

## 带参数路由

如果 `Navigator.push` 带有参数，则参数也会携带到路径上。

```dart
Navigator.of(context).pushNamed('/second', arguments: {'title': 'cake'});
```

则小程序会打开路径为 `pages/index/index?route=/second&title=cake` 的页面。

## 生成小程序实体 Page

如果希望使用实体 Page 路径，而不是 `pages/index/index`，可以通过创建 `lib/weapp.config.dart` 文件，在该文件下定义指定路由的页面配置。

举个例子，我们定义 `/second` 页面。

```dart
import 'dart:convert';

import 'package:mpcore/mpcore.dart';

void main(List<String> args) {
  final appConfig = WechatMiniProgramAppConfig();
  appConfig.pages = {
    '/second': WechatMiniProgramPageConfig(),
  };
  print(json.encode(appConfig));
}
```

这样，构建脚本便会生成对应的小程序 Page，并优先导航至该页面，例如。

```dart
Navigator.of(context).pushNamed('/second', arguments: {'title': 'cake'});
```

小程序会打开路径为 `/second?title=cake` 的页面。

你也可以赋予 `WechatMiniProgramPageConfig` 更多参数，这些参数的定义可参照微信文档。