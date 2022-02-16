---
id: android-intro
title: 介绍
---

开发者可以使用 MPFlutter 开发小程序，并以动态化的方式运行在 Android 原生应用中。

使用 MPFlutter 开发 Android 原生小程序仍然可以复用 MPFlutter 工具链，仍然使用 Dart 语言进行开发，与 Web / 微信小程序的区别在于其最终产物为 mpk 格式，其最终运行 Runtime 为 `MPAndroidRuntime`。

MPFlutter 小程序是运行在 `MPAndroidRuntime` 上的，该 Runtime 并不要求 Android 应用集成 `Flutter SDK` 以及 `Flutter Framework`，`MPAndroidRuntime` 是一个 Pure Java 库，集成该 Runtime 只会增加约 500K 包大小。

MPFlutter 可以在原生 Android 上以 Applet 或者 Cardlet 的形式呈现。

## Applet

Applet 即小程序，其呈现方式是一个单独的小应用，类似微信小程序。

Applet 拥有独立的 Navigator 控制器，可自由控制多个 Page 路由切换。

## Cardlet

Cardlet 即小卡片，其呈现方式是一个单独的视图，类似瀑布流中的一个小卡片，而该卡片可使用 MPFlutter 进行渲染。