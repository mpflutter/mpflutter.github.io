---
id: change-log
title: 更新日志
---

## 0.15.3

### fix

- 全量迁移资源文件至 dist.mpflutter.com，[原因](https://github.com/mpflutter/mpflutter/issues/177)。
- 修正两个样式问题
    - https://github.com/mpflutter/mpflutter/issues/174
    - https://github.com/mpflutter/mpflutter/issues/179
    - https://github.com/mpflutter/mpflutter/issues/186
- 修正构建问题
    - https://github.com/mpflutter/mpflutter/issues/180
    - https://github.com/mpflutter/mpflutter/issues/178

## 0.14.2

### fix

- 修正 MPEditableText 的 onSubmit 和 onEditingComplete 不回调的问题。
- 修正 MPReachBottomListener 在 ListView 为 false 时不回调的问题。
- 当页面没有 primary 为 true 的 ScrollView 时，禁止页面滚动。
- 修正 0.14.1 中 PageView 失效的问题。
- 修正 MPMainTabView 底部安全区域丢失的问题。
- 修正 MPScaffold 刷新后状态丢失的问题。

## 0.14.1

### feature

- Image.memory 新增 imageType 参数，可以显式指定数据中的图片类型。
- MPPageView 新增 autoplay 参数。
- 新增 ScrollController 支持，支持监听 position 变化，支持 jumpTo 等方法。
- MPPlatformView 新增 children 参数，允许包裹多个 child。