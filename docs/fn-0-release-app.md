---
id: fn-release-app
title: 构建 Release 应用
---

当完成 MPFlutter 开发，需要构建最终交付给用户的 ipa 或 apk 包时，使用以下方法构建。

在 MPFlutter 工程目录下，使用命令行执行以下命令。

```shell
dart scripts/build_flutter_native.dart
```

如果构建成功，则会生成 build 目录，在 build 目录下是一个完整的 Flutter 普通工程。

接下来，只需要按照常规的 [Flutter 发布应用指南](https://flutter.cn/docs/deployment/ios) 在 build 目录下操作就可以了。