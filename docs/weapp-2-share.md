---
id: weapp-share
title: 分享小程序页面至微信
---

使用 MPFlutter 开发微信小程序，当开发者需要配置页面分享信息时，可以使用以下方式配置。

如果 title 和 imageUrl 都不配置时，会默认使用当前页面标题（MPScaffold.name）或截图进行配置。

```dart
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      name: 'Template',
      onWechatMiniProgramShareAppMessage: (request) async {
        return MPWechatMiniProgramShareInfo(
          title: '分享标题',
          imageUrl: 'http://abc.com/123.png', // 封面图
        );
      },
      //body: ...
    );
  }
}

```

## 旧版本配置分享

如果你是从 0.16.0 版本以前创建的 MPFlutter 工程，你需要完成以下步骤才能开启分享能力。

1. 从 mpflutter_template 工程中拷贝，pages/index 下所有文件至工程 pages/index 目录下。
2. 更新 app.json 文件，添加 `"pages/index/share"` 至 `pages` 项。