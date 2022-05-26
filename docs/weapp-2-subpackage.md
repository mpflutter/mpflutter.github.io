---
id: weapp-subpackage
title: 分包指南
---

微信小程序限制主包大小，最大不能超过 2M，MPFlutter 可以通过 Dart 编译器的『延迟加载』帮助你智能地完成分包切割。

当需要分包时，可以使用 `deferred as` 的方式，异步加载页面，被异步加载的页面会自动切割成到分包中。

举个例子，当我们需要把 `second_page.dart` 当中的内容切割到分包时，可以这么做。

```dart
import 'package:flutter/widgets.dart';
import 'package:mpcore/mpcore.dart';
import 'package:mpflutter_template/second_page.dart' deferred as secondPage;

void main() {
  runApp(MyApp());
  MPCore().connectToHostChannel();
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPApp(
      title: 'MPFlutter Demo',
      color: Colors.blue,
      routes: {
        '/': (context) => MyHomePage(),
        '/second': (context) {
          return FutureBuilder(
            future: secondPage.loadLibrary(),
            builder: (context, snapshot) {
              if (snapshot.connectionState != ConnectionState.done) {
                return Container(); // 可以在这里返回一个 Loading Widget.
              }
              return secondPage.MySecondPage();
            },
          );
        }
      },
      navigatorObservers: [MPCore.getNavigationObserver()],
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MPScaffold(
      name: 'Template',
      body: Center(
        child: GestureDetector(
          onTap: () {
            Navigator.of(context).pushNamed('/second', arguments: {'a': 'b'});
          },
          child: Container(
            width: 200,
            height: 200,
            color: Colors.blue,
            child: Center(
              child: Text(
                'Hello, MPFlutter!',
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

```