/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

"use strict";

const siteConfig = {
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "../docs",
          editUrl:
            "https://github.com/mpflutter/mpflutter.github.io/edit/master/website",
          sidebarPath: require.resolve("./sidebars.json"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  title: "MPFlutter",
  tagline: "跨平台 Flutter 开发框架",
  organizationName: "mpflutter",
  projectName: "mpflutter.github.io",
  url: "https://mpflutter.github.io",
  baseUrl: "/zh/",
  favicon: "img/favicon.png",
  themeConfig: {
    prism: {
      additionalLanguages: ["dart"],
    },
    navbar: {
      title: "MPFlutter",
      logo: {
        alt: "MPFlutter Logo",
        src: "img/logo.png",
      },
      items: [
        { label: "教程", to: "docs/concepts" },
        {
          label: "指南",
          items: [
            { label: "Web 应用开发指南", to: "docs/web-intro" },
            { label: "小程序开发指南", to: "docs/weapp-intro" },
            { label: "Flutter Native 开发指南", to: "docs/fn-intro" },
          ],
        },
        { label: "支持我们", to: "docs/support-us" },
        { label: "技术咨询", to: "docs/tech-support" },
        { label: "MPFlutter 2.0", to: "https://weypl4zsnv.feishu.cn/wiki/TayPw6pxKiZGdxkNe4bcmSnNnSg" },
        {
          label: "GitHub（点个 Star 支持一下呗）",
          href: "https://github.com/mpflutter/mpflutter",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            { label: "介绍", to: "docs/concepts" },
            { label: "Web 应用开发指南", to: "docs/web-intro" },
            { label: "微信小程序开发指南", to: "docs/weapp-intro" },
          ],
        },
        {
          title: "交流",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/mpflutter",
            },
          ],
        },
        {
          title: "更多",
          items: [
            { label: "Blog", to: "blog" },
            { label: "GitHub", href: "https://github.com/mpflutter/mpflutter" },
          ],
        },
      ],
      logo: {
        alt: "MPFlutter Logo",
        src: "img/oss_logo.png",
        href: "https://github.com/mpflutter/mpflutter",
      },
      copyright: `Copyright © ${new Date().getFullYear()} MPFlutter Team. Built with Docusaurus. <br /><a href="https://beian.miit.gov.cn/" style="color:white" target="_blank">粤ICP备2021121985号</a><br /><span style="color: white">本项目不接受任何违反中国法律行为项目资助，我们也不对任何使用 MPFlutter 开源代码构建的任何应用承担任何法律责任。</span>`,
    },
    image: "img/logo.png",
    gtag: {
      trackingID: "G-K88LGEJD46",
    },
  },
  scripts: [],
};

module.exports = siteConfig;
