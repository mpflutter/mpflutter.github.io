---
id: weapp-view
title: 调用微信小程序内置组件
---

我们提供 `MPMiniProgramView` 用于在页面中嵌入微信小程序内置组件，该 `Widget` 可以调用所有的微信内置组件，并为其设置属性，监听事件。

下面以嵌入 [open-data](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html) 为例，讲解如何在 MPFlutter 中调用。

> 在开始该教程前，请先完成[《开发微信小程序》](./weapp-first-app)中的教程，搭建可用于微信小程序开发的工程。

## 基本用法

```dart
    // ......
    return MPScaffold(
      body: Center(
        child: Container(
          width: 88,
          height: 88,
          child: MPMiniProgramView(
            tag: 'open-data',
            attributes: {'type': 'userAvatarUrl'},
            style: {'width': '100%', 'height': '100%'},
            // child: ...
            // children: ...
          ),
        ),
      ),
    );
```

* `tag` 就是内置组件的名称
* `attributes` 就是需要设置到组件的属性值
* `style` 就是内置组件的 css style 属性值

## Button 组件

由于 [`button`](https://developers.weixin.qq.com/miniprogram/dev/component/button.html) 组件比较常用，我们封装了 `WechatMiniProgramButton` Widget，用于在页面中嵌入 `button` 组件。

```dart
WechatMiniProgramButton(
  openType: 'getPhoneNumber',
  onGetPhoneNumber: (value) {
    print(value);
  },
  child: Container(
    height: 48,
    padding: EdgeInsets.only(left: 12),
    child: Align(
      alignment: Alignment.centerLeft,
      child: Text(
        'Get Phone Number',
        style: TextStyle(fontSize: 15, color: Colors.black87),
      ),
    ),
  ),
),
```

你可以参考微信文档，设置 `openType` 值，并监听对应的回调。