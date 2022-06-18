---
id: weapp-api
title: 调用微信小程序 API
---

我们已为开发者封装好微信 API 调用库 `universal_miniprogram_api`，开发者只需将该库添加到 `pubspec.yaml` 中即可使用。

下面以调用 [`wx.scanCode`](https://developers.weixin.qq.com/miniprogram/dev/api/device/scan/wx.scanCode.html) 为例，讲解如何在 MPFlutter 中调用。

> 在开始该教程前，请先完成[《开发微信小程序》](./weapp-first-app)中的教程，搭建可用于微信小程序开发的工程。

## 添加依赖

使用 IDE 打开 `pubspec.yaml`，添加 `universal_miniprogram_api` 依赖，以下是参考例子。

```yaml
name: mpflutter_template
description: A new MPFlutter project.
publish_to: "none"
version: 1.0.0+1
environment:
  sdk: ">=2.12.0 <3.0.0"
dependencies:
  flutter: "0.8.5"
  mpcore: "0.8.5"
  mp_build_tools: "0.8.5"
  universal_miniprogram_api: ^0.0.4
```

使用命令行执行 `./mpflutter packages get` 安装依赖。

## 发起调用

使用 IDE 打开 `lib/main.dart`，在需要调用的地方，发起调用，以下是参考例子。

```dart
import 'package:universal_miniprogram_api/universal_miniprogram_api.dart';

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      name: 'Template',
      body: Center(
        child: GestureDetector(
          onTap: () {
            UniversalMiniProgramApi.uni.scanCode(
              ScanCodeOption(
                scanType: ['barCode', 'qrCode'],
                success: (result) async {
                  print(await result.result);
                },
              ),
            );
          },
          //child: ...,
        ),
      ),
    );
  }
}
```

保存后，开始调试，尝试在『微信开发者工具』中点击蓝色区块，测试调用结果。

## 了解更多

关于 API 的参数说明以及用途，请参阅[微信文档](https://developers.weixin.qq.com/miniprogram/dev/api/)。

`universal_miniprogram_api` 库实现了大部分常用的微信小程序中的 API，如果有额外的 API 需要，或者调用过程中存在疑问，可以到这个[仓库](https://github.com/mpflutter-plugins/universal_miniprogram_api)中提交 issue。

## 高级封装

基于开发者的需要，我们会将特定的组件作高级封装，以方便各位使用，以下是高级封装的组件。

### WechatMiniProgramMapView

专用于微信小程序的地图组件，基于该 `Widget` 以及 `WechatMiniProgramMapViewController`，开发者可以获得定制化程度较高的地图能力。

关于该组件的参数说明，请参阅微信地图[组件文档](https://developers.weixin.qq.com/miniprogram/dev/component/map.html#个性化地图) / [MapContext 文档](https://developers.weixin.qq.com/miniprogram/dev/api/media/map/MapContext.html)。