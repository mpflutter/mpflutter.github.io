---
id: lib-mp-file
title: 文件读写（mp-file）
---

dart:io 库并不能运行在 JS 环境中，因此，dart:io 配套的 File API 均不能直接使用。

我们封装了 mp-file 库，可以用于替代 dart:io 中的 File API，目前只能在微信小程序中使用。

并且有以下限制：
- 文件清除规则跟随微信小程序规则
- 所有的 Sync API 都不能使用，例如 `readAsStringSync`。

要使用 mp-file 库，可以添加以下依赖到 pubspec.yaml 中。

```yaml
dependencies: 
  mp_file: ">=0.0.3"
```

然后执行 `./mpflutter packages get` 安装依赖。

## 读写文件

要读写文件，你需要能使用 `FileManager` 获取沙箱目录，拼接文件路径。

```dart
import 'package:mp_file/mp_file.dart';

final sandboxDir = await FileManager.getFileManager().appSandboxDirectory();
final fooFile = File('${sandboxDir.path}/foo.txt');
```

然后你就可以像往常一样使用 File API 读写文件了。

```dart
await fooFile.writeAsString('Hello, World!');
final content = await fooFile.readAsString();
```