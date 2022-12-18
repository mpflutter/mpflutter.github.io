---
id: fn-intro
title: 介绍
---

本指南主要目的是向开发者说明，如何使用 MPFlutter 开发 Flutter Native 应用，如果你需要使用 MPFlutter 开发其它类型应用，可以在上方 NaviBar 切换。

## Flutter Native 应用的定义

基于 MPFlutter 框架开发，在可以运行在 Web 和微信小程序的基础上，附加地可同时运行在 Flutter 上。

可以简单地认为，我们在 Flutter 上构建了一套小程序引擎，使得 MPFlutter 可以在 Flutter 上运行。

这也是 Flutter 动态化的一种实现。

Flutter Native 要求 MPFlutter 版本大于等于 0.20.0。

## Flutter Native 的运行原理

MPFlutter 仍然会将应用代码编译为 JavaScript，除 JavaScript 外还会连同资源文件打包成 `mpk`。

在 Flutter 上，使用 JavaScriptCore(iOS) 或 V8(Android) 作为 JSRuntime 执行应用代码。

Flutter 承担的是宿主角色，Flutter 接收来自 MPFlutter(JS) 的样式和布局信息，使用 Flutter Widget 进行渲染。

## 性能

由于使用 JSRuntime 执行逻辑代码，性能会存在一定损耗。

具体表现在：

- 逻辑代码运算性能，当存在大规模 CPU 运算时，会卡顿。
- Layout 性能，当页面结构过于复杂时，会卡顿。

渲染、滑动性能不受影响，与 Flutter 一致。

## 功能

MPFlutter 的内置功能在 Flutter Native 上表现完全一致，如果有未对齐的地方可以提出 Issue 修正。

Flutter Native 本身并没有提供如微信小程序丰富的 API 封装，因此，大部分能力都需要开发者自行封装。大部分 Flutter 社区插件可以在简单修改后运行在 Flutter Native 上，修改方法可以参考文档。

## 合规

可以上架到 AppStore 吗？

可以，MPFlutter 并没有超出 Apple 的合规限制，JSRuntime 使用的是 Apple 允许使用的 JavaScriptCore。