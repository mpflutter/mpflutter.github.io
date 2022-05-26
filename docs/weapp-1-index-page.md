---
id: weapp-index-page
title: index.js 详解
---

index.js 的模板代码如下，它的作用主要是创建一个 mpdom.min.js 的 WXPage 对象，附着到小程序 Page 上。

小程序 Page 上的各个事件都会转发给 MPFlutter。

如果你是 JS 新手，不建议你修改该文件。

```js
// index.js
// 获取应用实例
const WXPage = require('../../mpdom.min').WXPage;

const thePage = new WXPage;
thePage.kboneRender = require('../../kbone/miniprogram-render/index')
Page(thePage);
```
