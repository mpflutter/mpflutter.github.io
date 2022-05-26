---
id: weapp-template-code
title: 模板工程代码详解
---

本教程将向你详细解析 mpflutter_template 工程的结构，开发者可以基于此，进一步扩展微信小程序应用功能。

## 目录结构

```
|- pubspec.yaml       // Dart 工程依赖描述文件
|- weapp              // 微信小程序应用的模板目录，在执行 dart scripts/build_weapp.dart 时，会使用该文件夹作为母版进行构建。
    |-- app.js        // 微信小程序的应用入口文件（你可以自行修改）
    |-- app.json      // 微信小程序的应用配置文件（你可以自行修改）
    |-- app.wxss      // 微信小程序的全局样式表（你可以自行修改）
    |-- main.dart.js  // 在未 build 时默认是空文件（你不需要手动修改这一文件）
    |-- package.json  // 依赖配置
    |-- plugins.wxml   // 这是 MPFlutter 工具链自动生成的插件 wxml 代码（你不需要手动修改这一文件）
    |-- plugins.min.js // 这是 MPFlutter 工具链自动生成的插件 JS 代码（你不需要手动修改这一文件）
    |-- project.config.json // 这是微信小程序项目配置文件（你可以自行修改）
    |-- sitemap.json  // 微信小程序的搜索引擎索引配置文件（你可以自行修改）
    |-- kbone         // MPFlutter 必须依赖的 kbone 库，不要删除。
    |-- pages
        |-- index
            |-- index.js,json,wxml // 这是微信小程序的入口页面（你可以自行修改，但一般情况下不建议修改）。
            |-- share.js,json,wxml // 这是微信小程序的外部分享入口页面（你可以自行修改，但一般情况下不建议修改）。
```

整个微信小程序应用的基本要素就是以上几个文件。

开发者也可以往 weapp 文件夹中添加额外的文件，这些文件会在构建后一同 copy 至 build 目录下。

## 修改文件

当你需要修改上述文件时，请参考微信官方文件进行。

## 生产模式

在生产模式下（也就是在 dart script/build_weapp.dart 执行后），Dart 会创建一个 build 的文件夹，并将所有的最终产物放置到此文件夹下。

你可以把 build 目录导入到微信开发者工具预览应用。