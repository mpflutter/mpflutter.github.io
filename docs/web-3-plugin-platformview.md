---
id: web-plugin-platformview
title: 编写平台视图扩展
---

当 MPFlutter 提供的 Widget 不能满足开发者需要时，你可以使用 PlatformView 扩展视图。

PlatformView 的实现同样基于 MPFlutter 插件，所以你需要先照着[教程](./web-3-plugin-method-channel.md)尝试创建一个插件。

我们已经在插件模板中提供了一个 PlatformView 的模板。

```ts
// foo_view.ts
let React = window.React;
let ReactDOM = window.ReactDOM;

interface FooProps {
  text?: string;
  onClick?: (value: string) => void;
}

class Foo extends React.Component<FooProps> {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          this.props.onClick?.("tttt");
        }}
      >
        {this.props.text}
      </div>
    );
  }
}

export class FooView extends MPPlatformView {
  constructor(readonly document: Document, readonly initialAttributes?: any) {
    super(document, initialAttributes);
    ReactDOM.render(<Foo />, this.htmlElement);
  }

  setChildren(children: any): void {}

  setAttributes(attributes: any): void {
    super.setAttributes(attributes);
    ReactDOM.render(
      <Foo
        text={attributes.text}
        onClick={(value) => {
          this.invokeMethod("click", { value: value });
        }}
      />,
      this.htmlElement
    );
  }
}

```


```ts
// main.ts
pluginRegisterer.registerPlatformView("com.mpflutter.templateFooView", FooView);
```


```dart
// xxx.dart
class TemplateFooView extends MPPlatformView {
  final String? text;

  TemplateFooView({
    this.text,
  }) : super(
          viewType: 'com.mpflutter.templateFooView',
          viewAttributes: {'text': text},
          onMethodCall: (method, params) {
            MPWebDialogs.alert(
              message: 'method = $method, params = $params',
            );
          },
        );
}
```

从模板中，我们可知，PlatformView 扩展支持开发者注册一个 React.Component，并通过在 Dart 使用 MPPlatformView 的方法，将该 Component 添加到 Widget Tree。

我们可以通过 MPPlatformView 向 React.Component 传递 props。

也可以在 React.Component 中向 Dart 发送消息。

开发者也可以在插件库中使用 npm 引入更多第三方库，以丰富使用场景。