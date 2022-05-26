---
id: web-safe-area
title: 安全区域适配指南
---

使用 MPFlutter 开发的 Web 应用可以通过以下方式适配安全区域。

使用 MediaQuery 获取 padding 中的值。

```dart
MediaQuery.of(context).padding.top; // 顶部安全区域
MediaQuery.of(context).padding.bottom; // 底部安全区域
```

使用 MPScaffold bottomBar 时，配合 bottomBarWithSafeArea 和 bottomBarSafeAreaColor 属性适配。

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      name: 'Template',
      bottomBar: Container(height: 44, color: Colors.yellow),
      bottomBarWithSafeArea: true,
      bottomBarSafeAreaColor: Colors.yellow,
      // body: ...,
    );
  }
}

```