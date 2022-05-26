---
id: weapp-debug-and-release
title: 调试模式及生产模式
---

在 MPFlutter 中开发微信小程序分两种模式。

## 调试模式

在调试模式下，你可以在 VSCode 中编写应用逻辑，在 VSCode 中调试应用，在微信开发者工具中预览应用。

MPFlutter 是怎么做到的呢？

具体方法是，当开发者导入 weapp 目录至微信小程序时，MPFlutter 会通过在小程序创建 websocket 连接的方式，与 VSCode 中的 Debugger 通信。

而 VSCode 中的 Debugger 又是一个独立的 Dart Debugger，它本身就可以做到完全独立的调试。

你也可以在真机上调试应用，只需要将 app.js 中的 IP 替换成电脑局域网 IP 就可以了，原理也是一样的走 websocket。

值得注意的是，在调试模式下的表现并不能完全代表最终构建后的表现，如果你需要做上线前的测试，你应该在生产模式下进行测试。

## 生产模式

要切换到生产模式，你需要使用以下命令编译应用。

```sh
dart scripts/build_weapp.dart
```

应用编译完成后，你需要把 build 目录导入到微信开发者工具中预览，上传，测试。

在生产模式下，Dart 代码会被混淆，你无法看到出错堆栈信息。