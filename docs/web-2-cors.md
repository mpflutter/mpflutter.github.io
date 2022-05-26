---
id: web-cors
title: 跨域请求
---

使用 MPFlutter 开发 Web 应用时，会受到浏览器的跨域限制，具体表现为：

- 在 VSCode 调试模式下，访问任意域名的 HTTP 请求都不受影响，因为此时 HTTP 的发送方是 DartVM。
- 在 Build 构建完成后，并使用 HTTP 服务访问构建生成的 Web 应用时，跨域的请求访问失败，因为此时 HTTP 的发送方是浏览器。

为什么浏览器会限制跨域请求？你可能需要阅读这篇文章，[《浏览器同源政策及其规避方法》](https://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)。

要解决这个问题，你需要设置 CORS，你可以阅读这篇文章，[《跨域资源共享 CORS 详解》](https://www.ruanyifeng.com/blog/2016/04/cors.html)。