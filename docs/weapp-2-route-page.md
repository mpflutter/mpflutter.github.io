---
id: weapp-route-page
title: 路由
---

本教程将向你详解 MPFlutter 开发微信小程序时，路由的用法。

## 路由的内置实现

MPFlutter 微信小程序的路由能力是与 Flutter Navigator API 深度绑定的。

MPFlutter 的路由实现是 QueryString，例如页面路径为 `/article`，参数 `id` 为 `123` 的页面，会使用以下 path 表示。

`/pages/index/index?route=/article&id=123`

> 目前我们暂未提供自定义路由 URL 格式的能力

## 定义路由

开发者可以在 `MPApp` 中定义路由以及路由的具体实现 Widget。

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPApp(
      title: 'MPFlutter Demo',
      color: Colors.blue,
      routes: {
        '/': (context) => MyHomePage(),
        '/second': (context) => MySecondPage(),
      },
      navigatorObservers: [MPCore.getNavigationObserver()],
    );
  }
}
```

在这个例子中，我们定义了两个路由，`/` 和 `/second`，其中 `/` 是必须的，它是首页。

`(context) => MySecondPage()` 表示，`MySecondPage` 这个 `Widget` 会响应 `/second`，

## 跳转页面

开发者可以使用 Navigator API 跳转至指定路由页面。

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      name: 'Template',
      body: Center(
        child: GestureDetector(
          onTap: () {
            Navigator.of(context).pushNamed('/second');
          },
          // child: ...
        ),
      ),
    );
  }
}
```

## 带参跳转以及获取参数

开发者也可以使用 Navigator API 带参的方式跳转至指定路由页面，其中 arguments 只接受可序列化的 JSON 打平对象。

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      name: 'Template',
      body: Center(
        child: GestureDetector(
          onTap: () {
            Navigator.of(context).pushNamed(
              '/second',
              arguments: {'id': '123'},
            );
          },
          // child: ...
        ),
      ),
    );
  }
}
```

在下一页使用以下方式获取从上一页传过来的参数。

```dart
class MySecondPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final settings = ModalRoute.of(context)?.settings.arguments;
    String? id;
    if (settings is Map) {
      id = settings["id"] is String ? settings["id"] : null;
    }
    //return ...;
  }
}

```

## 反向传参

MPFlutter 支持从下一页反向传参至上一页，你可以通过 `await` 的方式等候下一页的回传参数。

```dart
await Navigator.of(context).pushNamed(
    '/second',
    arguments: {'id': '123'},
);
```

回传

```dart
Navigator.of(context).pop('321');
```

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