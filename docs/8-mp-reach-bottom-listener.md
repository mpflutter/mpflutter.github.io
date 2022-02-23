---
id: mp-reach-bottom-listener
title: MPReachBottomListener
---

import {API} from './0-api.mdx';

可用于监听 ListView GridView WaterfallView CustomScrollView 等组件滚动到底部时的事件，可用于『加载更多』的场景。

## 用法

```dart
@override
MPScaffold(
    name: 'ListView + LoadMore',
    body: MPReachBottomListener(
    onReachBottom: (_) {
        // do things.
    },
    child: CustomScrollView(
        primary: false,
        slivers: [
        // ...
        ],
    ),
    ),
);
```

## API

<API name="child" 
     type="Widget" 
     desc="子视图" 
     more="必填" />

<API name="onRefresh" 
     type="Future Function(Key? scrollViewKey)?" 
     desc="当下拉刷新被触发时回调" 
     more="非必填" />

<API name="enableChecker" 
     type="bool Function(Key? scrollViewKey)?" 
     desc="通过此回调可定义某一个 SrollView 需要或不需要下拉刷新能力" 
     more="非必填" />