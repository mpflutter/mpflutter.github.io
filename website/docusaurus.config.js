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
  tagline: "Flutter 小程序开发框架",
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
        {
          label: "起步",
          to: "https://mpflutter.feishu.cn/wiki/Wh0OwQF0oiUKrIkyLHrcgwMfn6d",
        },
        {
          label: "平台特性指南",
          to: "https://mpflutter.feishu.cn/wiki/FASdwpqeKi2ej8kpALOcsECbnuM",
        },
        {
          label: "商用授权购买",
          to: "https://mpflutter.feishu.cn/wiki/KEL9wIQ7ji4ChmkFnTfcIvJPnzb",
        },
        {
          label: "GitHub（点个 Star 支持一下呗）",
          href: "https://github.com/mpflutter/mpflutter",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      logo: {
        alt: "MPFlutter Logo",
        src: "img/oss_logo.png",
        href: "https://github.com/mpflutter/mpflutter",
      },
      copyright: `Copyright © ${new Date().getFullYear()} MPFlutter Team. Built with Docusaurus. <br /><a href="https://beian.miit.gov.cn/" style="color:white" target="_blank">粤ICP备2021121985号</a>`,
    },
    image: "img/logo.png",
    gtag: {
      trackingID: "G-K88LGEJD46",
    },
  },
  scripts: [],
};

module.exports = siteConfig;
