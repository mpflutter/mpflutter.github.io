---
id: weapp-dark-mode
title: 深色模式适配指南
---

MPFlutter 已在 0.16.0 版本开始支持深色模式。

在适配深色模式前，你需要确认 weapp/app.json 中的 darkmode 字段是否已经设置正确。

```json
{
  "pages": ["pages/index/index", "pages/index/share"],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "",
    "navigationBarTextStyle": "black"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json",
  "darkmode": true // 这个字段必须为 true
}

```

你可以通过以下方式获知当前用户是否处于深色模式下。

```dart
import 'package:flutter/services.dart';

class MyHomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    final isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;
  }
  
}
```

> MPFlutter 暂时不支持监听深色模式的变化。