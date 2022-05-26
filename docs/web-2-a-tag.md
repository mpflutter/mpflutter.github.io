---
id: web-a-tag
title: A 标签
---

在某些场景下，我们需要用到浏览器自带 A 标签，而不是 GestureDetector。

例如在点击某元素后，请求打开新的页面，如果使用 GestureDetetor 会受到浏览器的拦截。

你可以通过以下方式使用 A 标签。

```dart
MPPlatformView(
  viewType: 'mp_platform_view',
  viewAttributes: {
    'tag': 'a',
    'href': 'https://www.qq.com/',
  },
  child: Text(
    'Hello, World!\n你好，中国！',
    style: TextStyle(
      fontSize: 24,
      color: Colors.white,
      fontWeight: FontWeight.bold,
      fontStyle: FontStyle.italic,
    ),
  ),
)
```