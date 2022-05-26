---
id: weapp-plugin-platformview
title: 编写平台视图扩展
---

对于 MPPlatformView，我们使用的是微信小程序自定义组件。

组件位于 `local_plugins/xxx/lib/weapp/components` 目录下，参照模板代码即可完成开发。

要特别留意的是，每一个组件的配置文件 `local_plugins/xxx/lib/weapp/components/foo.json` 。

```json
{
  "component": true,
  "usingComponents": {},
  "props": ["text"],
  "propsVal": [""],
  "events": ["mockclick"]
}
```

`props` `propsVal` `events` 都是必填项，它们分别代表，需要传递到自定义组件的属性列表、属性默认值、需要回调的事件名称。