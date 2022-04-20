---
id: lib-simplehtmlcss
title: HTML 渲染库
---

开发者可使用 `simple_html_css` 库，该库可以解析简单的 HTML 字符串，转化为 RichText 进行渲染。

只需要添加 `simple_html_css` 到 `pubspec.yaml`，然后执行 `./mpflutter packages get` 即可。

```yaml
# pubspec.yaml
dependencies:
  simple_html_css: ^3.0.1+1
```

具体的使用文档可以到 GitHub 查阅 https://github.com/ali-thowfeek/simple_html_css_flutter

## 使用 img 标签

simple_html_css 官方版本并不支持渲染 img 标签，我们的分支版本添加了这个支持，有以下方式可以支持渲染 Image：

### 指定 img 的宽和高

```
<img style="width:44px;height:44px;" src="the.image.url" />
```

### 在 Dart 中使用 HTMLImageSizeProcesser 

当存在 HTMLImageSizeProcesser 时，img 标签中的图片会在加载完成后，再次布局。

* 你需要显式指定 maxWidth。

```dart
  Widget build(BuildContext context) {
    return MPScaffold(
      name: 'Text',
      backgroundColor: Color.fromARGB(255, 236, 236, 236),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(24),
        child: HTMLImageSizeProcesser(
          maxWidth: MediaQuery.of(context).size.width - 48,
          builder: (context) => RichText(text: HTML.toTextSpan(context, '''
<body>
    <h1 style='color: white; font-size:50px; font-style:italic; 
    background-color: rgb(0,122,255); font-weight:100;)'> Hello word! </h1>
    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091307%2Fntplrtyw2bvntplrtyw2bv.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653061594&t=585510887893d145fd39e66ac3db7937" />
    <p>Lorem ipsum dolor sit, consectetur adipiscing elit. Pellentesque in leo 
    id dui bibendum fringilla in et arcu. In vehicula vel est sed mattis.</p>
</body>
''')),
        ),
      ),
    );
  }
```