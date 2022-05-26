---
id: weapp-plugin-event-channel
title: 编写 EventChannel 扩展
---

EventChannel 与 MethodChannel 最大的区别是，EventChannel 是一个可持续发送值到 Dart 的实例。

举个例子，当 Dart 希望持续获得用户的实时地理位置时，可以使用 EventChannel，因为地理位置是会持续变化的。

EventChannel 的实现同样基于 MPFlutter 插件，所以你需要先照着[教程](./weapp-5-plugin-method-channel.md)尝试创建一个插件。

在插件模板中，我们已经提供一个 EventChannel 的模板。

```typescript
// main.ts

export class TemplateEventChannel extends MPEventChannel {
  private intervalHandler: any;

  onListen(params: any, eventSink: (data: string) => void) {
    this.intervalHandler = setInterval(() => {
      eventSink(new Date().toISOString());
    }, 1000);
  }

  onCancel(params: any) {
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
      this.intervalHandler = undefined;
    }
  }
}

pluginRegisterer.registerChannel(
  "com.mpflutter.templateEventChannel",
  TemplateEventChannel
);
```

对应的 Dart 代码如下：

```dart
class TemplatePlugin {
  static EventChannel eventChannel = EventChannel(
    'com.mpflutter.template_plugin_event',
  );
}
```

可以看到，在 Dart 中的 ID 与 TypeScript 中的 ID 是完全对应的。

当 Dart 侧的 eventChannel 发起监听请求时，TS 中的 onListen 会收到调用信息。

此时，开发者应保存好 eventSink，并在适当时候回调 eventSink(result)，Dart 会收到这个 result。

> 对于 EventChannel 的使用，与 Flutter 本身的 EventChannel 是完全一致的，你可以参考 Flutter 相关文档。