---
id: weapp-safe-network
title: 通讯域名
---

在微信小程序中调用 HTTP 接口时，需要特别注意，你需要配置通讯域名才能在生产模式下发起网络请求。

具体可以阅读[微信教程](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)。

需要特别注意的是，在调试模式下不受此限制，因为请求是从 DartVM 中发出的。