---
id: web-template-code
title: 模板工程代码详解
---

本教程将向你详细解析 mpflutter_template 工程的结构，开发者可以基于此，进一步扩展 Web 应用功能。

## 目录结构

```
|- pubspec.yaml       // Dart 工程依赖描述文件
|- web                // Web 应用的模板目录
    |-- index.html    // 这是 Web 应用的入口 html 代码
    |-- plugin.min.js // 这是 MPFlutter 工具链自动生成的插件 JS 代码（你不需要手动修改这一文件）
```

整个 Web 应用的基本要素就是以上几个文件。

开发者也可以往 web 文件夹中添加额外的文件，这些文件会在构建后一同 copy 至 build 目录下。

## index.html

这个文件是 Web 应用的入口文件，当浏览器加载 index.html 时，会按以下顺序加载样式、脚本：

1. 加载 mp_web_features.css 基础能力样式
2. 加载 mpdom.min.js 核心能力脚本
3. 加载 mp_web_features.min.js 基础能力脚本
4. 加载 plugins.min.js 扩展能力脚本
5. 加载 App 应用逻辑脚本

你可以照着上述步骤阅读 index.html 源码：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>template</title>
    <link rel="stylesheet" href="https://dist.mpflutter.com/dist/0.16.0/dist_web/mp_web_features.css" />
</head>

<body>
    <div id="root"></div>
    <script src="https://dist.mpflutter.com/dist/0.16.0/dist_web/mpdom.min.js"></script>
    <script src="https://dist.mpflutter.com/dist/0.16.0/dist_web/mp_web_features.min.js"></script>
    <script src="plugins.min.js"></script>
    <script>
        var { Engine, Page, BrowserApp } = MPDOM;
        var engine = new Engine();
        var dev = true;
        if (dev) {
            engine.initWithDebuggerServerAddr(new URL(window.location.href).hostname + ':9898');
            engine.start();
        }
        else {
            Engine.codeBlockWithCodePath('main.dart.js').then(function (codeBlock) {
                engine.initWithCodeBlock(codeBlock);
                engine.start();
            });
        }
        var app = new BrowserApp(document.getElementById('root'), engine);
        app.setupFirstPage();
    </script>
</body>

</html>
```

这个文件是可以修改的，当你需要添加其它扩展能力时，你可以直接在 index.html 中添加对应的 stylesheet 和 script。

## 开发模式

在开发模式下（也就是在 VSCode 启动 Debugger 时），Dart 会启动一个 9898 端的本地 HTTP 服务，当浏览器访问 http://127.0.0.1:9898/index.html 时，会直接加载上面的 index.html。

也就是说，你对 index.html 的任何修改，在刷新页面后可以马上生效。

## 生产模式

在生产模式下（也就是在 dart script/build_web.dart 执行后），Dart 会创建一个 build 的文件夹，并将所有的最终产物放置到此文件夹下。

你可以在 build 目录下，启动一个本地 HTTP 服务，做发布前的测试和预览。