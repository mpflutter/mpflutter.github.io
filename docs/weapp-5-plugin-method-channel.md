---
id: weapp-plugin-method-channel
title: 编写 MethodChannel 扩展
---

> 在开始编写扩展前，请先创建好 mpflutter 工程。

## 使用模板创建扩展子工程

1. 使用命令行，定位到工程目录下，执行以下命令：

```sh
dart scripts/help.dart
```

2. 选择『使用模板创建一个扩展』，并完成后续操作。

![](assets/platform-ext-4.png)

3. 使用命令行，`cd local_plugins/xxx/ && npm i` 安装 Node 依赖。

4. 如上图所示，添加依赖到 `pubspec.yaml`，然后执行 `./mpflutter packages get`。

## 修改平台代码

使用 VSCode 打开 `local_plugins/xxx/lib/weapp/main.ts` （我们的扩展名是 xxx，这里应替换为你创建的扩展。）

修改代码，假定我们的 MethodChannel 名字是 xxx，它可以响应 method = yyy 的方法，并在浏览器上弹出一个提示框。

```typescript
/// <reference path="../typing/mpflutter.d.ts" />

export class XXXMethodChannel extends MPMethodChannel {
  async onMethodCall(method: string, params: any): Promise<any> {
    if (method === "yyy") {
      alert('hello yyy');
    } else {
      throw new Error("Method not implemented.");
    }
  }
}

pluginRegisterer.registerChannel(
  "xxx",
  XXXMethodChannel
);

```

## 修改客户端 (Dart) 代码

我们还需要修改客户端代码，以便在 Dart 中调用。

使用 VSCode 打开 `local_plugins/xxx/lib/xxx.dart`，修改为以下代码。

```dart
import 'package:flutter/services.dart';

class XXXPlugin {
  static MethodChannel methodChannel = MethodChannel(
    'xxx',
  );

  static Future yyy() async {
    await methodChannel.invokeMethod('yyy');
  }
}
```

## 发起调用

在需要调用的地方，使用 ```XXXPlugin.yyy()```，即可调起浏览器的 `alert`。

## 获得返回值

当 Dart 端需要得到 Web 端的返回值时，只需要在稍微修改一下代码即可。


```typescript
/// <reference path="../typing/mpflutter.d.ts" />

export class XXXMethodChannel extends MPMethodChannel {
  async onMethodCall(method: string, params: any): Promise<any> {
    if (method === "yyy") {
      return "yyy";
    } else {
      throw new Error("Method not implemented.");
    }
  }
}

pluginRegisterer.registerChannel(
  "xxx",
  XXXMethodChannel
);

```

```dart
import 'package:flutter/services.dart';

class XXXPlugin {
  static MethodChannel methodChannel = MethodChannel(
    'xxx',
  );

  static Future<String> yyy() async {
    return await methodChannel.invokeMethod('yyy');
  }
}
```