---
id: web-dark-mode
title: 深色模式适配指南
---

MPFlutter 已在 0.16.0 版本开始支持深色模式，你可以通过以下方式获知当前用户是否处于深色模式下。

```dart
import 'package:flutter/services.dart';

class MyHomePage extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    final isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;
  }
  
}
```