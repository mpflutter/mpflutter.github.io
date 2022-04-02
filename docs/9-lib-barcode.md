---
id: lib-barcode
title: barcode
---

barcode 是一个非常强大的条形码、二维码生成库，借助 barcode 开发者可以快速生成超过 10 种二维码。

MPFlutter 现已兼容 barcode 库，你可以使用以下方式添加依赖使用。

```yaml
dependencies:
  barcode_widget:
    git:
      url: https://github.com/mpflutter-plugins/dart_barcode
      path: flutter
dependency_overrides:
  meta: "1.7.0" # 必须添加这个依赖
```

## 基本用法

我们以生成 QRCode 为例展示用法。

```dart
import 'package:barcode_widget/barcode_widget.dart';

Widget renderQRCode() {
    return BarcodeWidget(
             data: 'Hello, Flutter.',
             width: 200,
             height: 200,
             barcode: Barcode.qrCode()
           );
}

```
