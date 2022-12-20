---
id: install-macos
title: 在 macOS 中配置环境
---

> 即使你本已安装好 Flutter 环境，也必须按照以下教程重新检查一遍，因为 MPFlutter 要求 dart-sdk 也必须导出至 PATH 中。

要使用 MPFlutter 开发应用，必须在本机安装好 Flutter 环境，请按照以下指引安装 Flutter 环境。

## 系统配置要求

想要安装并运行 Flutter，你的开发环境需要最低满足以下要求：

* 操作系统：macOS

* 磁盘空间：2.8 GB（不包含 IDE 或其余工具所需要的磁盘空间）

* 工具：Flutter 使用 git 进行安装和升级，我们建议您安装包含了 git 的 Xcode，或者您也可以 单独安装 git。

* 安装 NodeJS 10.0+ 版本，并确保 `node` 和 `npm` 可在命令行中正确执行。

## 获取 Flutter SDK

1. 点击下方的安装包，获取 stable 发行通道的 Flutter SDK 最新版本：

   [flutter_macos_3.0.0-stable.zip](https://storage.flutter-io.cn/flutter_infra_release/releases/stable/macos/flutter_macos_3.0.0-stable.zip)

2. 将文件解压到目标路径, 比如:

```
cd ~/development
unzip ~/Downloads/flutter_macos_2.5.3-stable.zip
```

## 更新 path 环境变量

配置 flutter 的 PATH 环境变量：

```
export PATH="$PATH:`pwd`/flutter/bin"
```

这个命令配置了 PATH 环境变量，且只会在你 当前 命令行窗口中生效。如果想让它永久生效，请查看 [更新 PATH 环境变量](https://flutter.cn/docs/get-started/install/macos#update-your-path)。

现在你可以愉快地运行 Flutter 的命令行啦！

## 在终端中检查相应命令是否可执行

在终端命令行中依次执行以下命令，如果存在任一命令报错，请重新检查 Flutter 是否正确安装。

`flutter --version`

`dart --version`

## 安装 VSCode / Android Studio 插件

选择你喜爱的 IDE，VSCode 或 Android Studio，在其中安装 Flutter 和 Dart 插件。

## 下一步

至此，开发环境配置完成，下一步尝试[编写第一个 MPFlutter 应用](./first-app)吧。