---
id: web-plugin-mpjs
title: JS 模板调用
---

从 0.19.0 版本开始，MPFlutter 开始提供 JS 模板调用能力，对于简单的 JS 调用不再需要编写 MethodChannel 插件。

JS 模板调用有以下限制：

- 不支持引用外部库
- 不支持使用 TypeScript
- 不支持复杂类型的数据传递

你只能在 Dart 和 JS 之间传递以下类型的值：

- Map
- List
- String / Int / Double / Bool
- Uint8List(Dart) <-> ArrayBuffer(JS)

我们已经在 [mpflutter_template](https://github.com/mpflutter/mpflutter_template) 模板工程中提供 MPJS 的简单调用示例。

在 lib 目录下存在 `mpjs.config.dart` 文件：

```dart
import 'dart:convert';

const isMiniProgram = bool.fromEnvironment(
  'isMiniProgram',
  defaultValue: false,
);

const isWeb = bool.fromEnvironment(
  'isWeb',
  defaultValue: false,
);

final templates = {
  'foo': isMiniProgram
      ? '''function(arg0) {
    wx.showModal({title: 'alert', content: (new Date()).toString()});
    return 'foo result: ' + arg0;
  }
  '''
      : '''function(arg0) {
    alert(new Date().toString());
    return 'foo result: ' + arg0;
  }''',
};

void main(List<String> args) {
  print(json.encode(templates));
}
```

开发者需要在 `templates` 中定义好对应的 JS 模板，Key 必须是 String 类型，Value 必须是 `JSFunction`。

然后在需要调用这段 JS 代码的地方，使用以下方式调用就可以了。

```dart
import 'package:mpcore/mpcore.dart';

// ......
onTap: () async {
    final result = await MPJS.evalTemplate('foo', ['MPFlutter']);
    print(result);
},

```

在 `MPJS.evalTemplate` 中，第一个参数是 `templates` 中的 Key，第二个参数则是 `arguments` 数组，`await` 得到的结果是 JS 的返回值。

你也可以在 JSFunction 中返回一个 `Promise` 对象，在 Dart 侧可以获取到 `Promise` 返回的结果。

特别注意：当你修改完 `mpjs.config.dart` 文件后，必须执行 Reload 才能使 JS 代码生效。