---
id: install-windows
title: 在 Windows 中配置环境
---

> 即使你本已安装好 Flutter 环境，也必须按照以下教程重新检查一遍，因为 MPFlutter 要求 dart-sdk 也必须导出至 PATH 中。

要使用 MPFlutter 开发应用，必须在本机安装好 Flutter 环境，请按照以下指引安装 Flutter 环境。

## 系统配置要求

要想安装和运行 Flutter，你的开发环境至少应该满足如下的需求：

* 操作系统：Windows 7 SP1 或更高的版本（基于 x86-64 的 64 位操作系统）。

* 磁盘空间：除安装 IDE 和一些工具之外还应有至少 1.64 GB 的空间。

* 工具：要让 Flutter 在你的开发环境中正常使用，依赖于以下的工具：

    * [Windows PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/windows-powershell/install/installing-windows-powershell?view=powershell-7.2) 5.0 或者更高的版本（Windows 10 中已经预装了）

    * [Git for Windows](https://git-scm.com/download/win) 2.x，并且勾选从 Windows 命令提示符使用 Git 选项。

    * 如果 Windows 版的 Git 已经安装过了，那么请确保能从命令提示符或者 PowerShell 中直接执行 git 命令。

* 安装 NodeJS 10.0+ 版本，并确保 `node` 和 `npm` 可在命令行中正确执行。

## 获取 Flutter SDK

1. 点击下方的安装包，获取 stable 发行通道的 Flutter SDK 最新版本：

   [flutter_windows_2.5.3-stable.zip](https://storage.flutter-io.cn/flutter_infra_release/releases/stable/windows/flutter_windows_2.5.3-stable.zip)

2. 将压缩包解压，然后把其中的 flutter 目录整个放在你想放置 Flutter SDK 的路径中（例如 C:\src\flutter）。

> 请勿将 Flutter 安装在需要高权限的文件夹内，例如 C:\Program Files\。

## 更新 path 环境变量

如果你想在 Windows 控制台中运行 Flutter 命令，需要按照下面的步骤来将 Flutter 的运行文件路径加入到 PATH 环境变量。

* 在开始菜单的搜索功能键入「env」，然后选择 编辑系统环境变量。

* 在 用户变量 一栏中，检查是否有 Path 这个条目：

    * 如果存在这个条目，以 ; 分隔已有的内容，加入 `flutter\bin` 目录的完整路径。

    * 如果不存在的话，在用户环境变量中创建一个新的 Path 变量，然后将 `flutter\bin` 所在的完整路径作为新变量的值。

    * 划重点，除了 `flutter\bin` 以外，你还需要将 `flutter\bin\cache\dart-sdk\bin` 加入 Path 用户变量中。

你需要重新打开已经打开的命令行提示符窗口，这样下次启动命令提示符时，才能访问到刚才修改的变量。

## 在 PowerShell 中检查相应命令是否可执行

在 Windows PowerShell 命令行中依次执行以下命令，如果存在任一命令报错，请重新检查 Flutter 是否正确安装。

`flutter --version`

`dart --version`

`dart2js --version`

## 安装 VSCode / Android Studio 插件

选择你喜爱的 IDE，VSCode 或 Android Studio，在其中安装 Flutter 和 Dart 插件。

## 下一步

至此，开发环境配置完成，下一步尝试[编写第一个 MPFlutter 应用](./first-app)吧。