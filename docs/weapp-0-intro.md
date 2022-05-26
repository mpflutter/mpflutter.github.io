---
id: weapp-intro
title: 介绍
---

本指南主要目的是向开发者说明，如何使用 MPFlutter 开发微信小程序应用，如果你需要使用 MPFlutter 开发其它类型应用，可以在上方 NaviBar 切换。

## 微信小程序应用的定义

基于微信小程序框架开发的应用，它只能运行在微信宿主上。

## MPFlutter 擅长做哪一类微信小程序应用

术业有专攻，每一个方案都有其优缺点，也存在局限性。

MPFlutter 比较擅长做以下几类应用：

- 内容类应用（如文章、阅读等）
- 短快平的工具类应用（如停车费支付、记帐等）

MPFlutter 不擅长做以下几类应用：

- 重度依赖 WebUI 的应用（如 weui 等）
- 强交互的工具类应用（如视频剪辑、图片剪辑、股票等）

## MPFlutter 的优势

- 复用 Flutter Framework —— 纯粹的 Flutter 开发体验，不需要学习 CSS 就可以搭建完整的微信小程序应用。
- 复用 Flutter 工具链 —— 充分享受 Flutter Hot Reload 特性，可在 VSCode 中断点调试，是的，微信小程序的开发也能享受这个待遇。

## 你需要学习的知识

- Flutter 的应用开发基本知识
- 微信小程序的 [API](https://developers.weixin.qq.com/miniprogram/dev/api/) 调用方法（大部分能力的实现都需要借助微信小程序 API）