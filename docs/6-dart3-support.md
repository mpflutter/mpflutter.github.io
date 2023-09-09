---
id: dart3-support
title: Dart 3.0 支持
---

MPFlutter 从 1.3.0 版本开始支持 Dart 3.0，你可以使用 Flutter 3.13 版本开发应用了。

## 升级方法

1. 按照[升级核心库](./6-upgrade-core.md)直接升级
2. 在工程目录下新增 `bin` 文件夹，新增 `bin/main.dart` 文件，文件内容如下：
```dart
import '../lib/main.dart' as lib;

void main(List<String> args) {
  lib.main();
}

```
3. 修改 .vscode/launch.json 文件内容如下：
```json
{
  "version": "0.2.0",
  "configurations": [

    {
      "name": "MPFlutter",
      "request": "launch",
      "type": "dart",
      "program": "bin/main.dart",
      "preLaunchTask": "Pre-compile MPFlutter Plugins"
    }
  ]
}
```

升级完成，你可以使用新的 Dart 3.0 特性开发了。