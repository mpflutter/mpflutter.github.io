/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

"use strict";

import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import classnames from "classnames";
import React from "react";

const contents = [
  {
    content: "自适应的构建脚本，构建小程序就像构建原生应用一般简单。",
    image: "img/content/high-speed-train.png",
    title: "无缝迁移",
  },
  {
    content:
      "快速预览，在 Desktop 上使用 Hot Reload / Hot Restart 快速预览界面及应用逻辑。",
    image: "img/content/scales.png",
    title: "实时预览能力",
  },
  {
    content:
      "无须裁剪 Flutter Framework，你可以使用 Material / Cupertino 这些官方组件搭建 UI。",
    image: "img/content/atom.png",
    title: "纯正的 Flutter ",
  },
];

const Button = ({ children, href }) => {
  return (
    <div className="col col--2 margin-horiz--sm">
      <Link
        className="button button--outline button--primary button--lg"
        to={href}
      >
        {children}
      </Link>
    </div>
  );
};

const HomeSplash = () => {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <div className={classnames("hero hero-dark", styles.heroBanner)}>
      <div className="container">
        <img
          className={classnames(styles.heroBannerLogo, "margin-vert--md")}
          src={"img/logo.png"}
          alt="MPFlutter"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={classnames(styles.heroButtons, "name", "margin-vert--md")}
        >
          <Button href="https://weypl4zsnv.feishu.cn/wiki/TayPw6pxKiZGdxkNe4bcmSnNnSg">
            快速开始
          </Button>
        </div>
      </div>
    </div>
  );
};

const Index = () => {
  return (
    <Layout>
      <HomeSplash />
      <div className="container">
        <div class="row">
          {contents.map(({ content, title, image }) => {
            return (
              <div className="col col--4 margin-vert--md">
                <div
                  className={classnames(
                    styles.blockContainer,
                    "padding-horiz--md"
                  )}
                >
                  <img src={image} className={classnames(styles.blockImage)} />
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
