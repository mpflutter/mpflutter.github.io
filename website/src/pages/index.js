/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import classnames from 'classnames';
import React from 'react';

const contents = [
  {
    content:
      '保留 Flutter 秒级、有状态的热重载能力，真正做到所写即所得。',
    image: 'img/content/high-speed-train.png',
    title: '快速',
  },
  {
    content: '裁去不必要的 Flutter 渲染层，产物更轻量，运行更流畅。',
    image: 'img/content/scales.png',
    title: '轻量',
  },
  {
    content: '保留 Flutter 工具链，无需变更编码工具、习惯，一行命令即可开始使用。',
    image: 'img/content/atom.png',
    title: '易用',
  },
];

const Button = ({children, href}) => {
  return (
    <div className="col col--2 margin-horiz--sm">
      <Link
        className="button button--outline button--primary button--lg"
        to={href}>
        {children}
      </Link>
    </div>
  );
};

const HomeSplash = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <div className={classnames('hero hero-dark', styles.heroBanner)}>
      <div className="container">
        <img
          className={classnames(styles.heroBannerLogo, 'margin-vert--md')}
          src={'img/logo.png'}
          alt="MPFlutter"
        />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div
          className={classnames(styles.heroButtons, 'name', 'margin-vert--md')}>
          <Button href={useBaseUrl('docs/concepts')}>快速开始</Button>
        </div>
        <a target="_blank" href="https://weypl4zsnv.feishu.cn/wiki/TayPw6pxKiZGdxkNe4bcmSnNnSg"><p style={{fontSize: 14, color: 'grey'}}>MPFlutter 2.0 Alpha 版本正式发布，欢迎体验。</p></a>
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
          {contents.map(({content, title, image}) => {
            return (
              <div className="col col--4 margin-vert--md">
                <div
                  className={classnames(
                    styles.blockContainer,
                    'padding-horiz--md',
                  )}>
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
