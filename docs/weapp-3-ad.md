---
id: weapp-ad
title: 展示微信广告
---

如果你需要在微信小程序中展示微信广告，请先到微信小程序后台申请对应广告的 unit id，然后使用以下方法添加广告。

以 Banner 广告为例。

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
  universal_miniprogram_api: ^0.0.4 # 注意版本号要求 0.0.4 以上
```

## 添加 Banner 代码

以下是 Banner 代码的示例，需要注意的是，目前 MPFlutter 还不能做到动态感知广告的宽高，因此你需要监听广告的 close 和 error 事件，然后手动改变广告父元素高度。

```dart
class _AdSample extends StatefulWidget {
  const _AdSample({
    Key? key,
  }) : super(key: key);

  @override
  State<_AdSample> createState() => _AdSampleState();
}

class _AdSampleState extends State<_AdSample> {
  double adHeight = 130;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: adHeight,
      child: WechatAdView(
        unitId: 'adunit-277a0ead38718147',
        onLoad: (details) {},
        onError: (details) {
          setState(() {
            adHeight = 0;
          });
        },
        onClose: (details) {
          setState(() {
            adHeight = 0;
          });
        },
      ),
    );
  }
}
```

## 插屏广告、视频激励广告

你可以使用 `InterstitialAd` 和 `RewardedVideoAd` 类。