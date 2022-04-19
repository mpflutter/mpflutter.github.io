---
id: data-network
title: 网络请求
---

## 使用 http 包请求网络数据

### 添加依赖

MPFlutter 官方维护的 http 包，会保证其在所有输出平台上完全兼容，请在 `pubspec.yaml` 中添加以下依赖。

```yml
dependencies:
  http: ^0.13.1
```

然后在工程根目录下，通过命令行执行 `./mpflutter packages get`。

### 发起请求

使用以下方式，发起 HTTP 请求，并解析 JSON 数据。

注意:

* 应用构建为 Web 后，请求有跨域限制，需要保证 CORS header 有效性。
* 应用构建为微信小程序后，请求有业务域名限制。

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

class XXX {
  void doLoad() async {
    setState(() {
      loading = true;
    });
    try {
      final response =
          await http.get(Uri.parse('https://api.github.com/users/mpflutter'));
      final result = json.decode(response.body);
      setState(() {
        mpflutterLogo = result['avatar_url'];
      });
    } catch (e) {} finally {
      setState(() {
        loading = false;
      });
    }
  }
}
```

## 使用 dio 包请求网络

### 添加依赖

MPFlutter 官方维护的 dio 包，会保证其在所有输出平台上完全兼容，请在 `pubspec.yaml` 中添加以下依赖。

```yml
dependencies:
  # ...
  dio: ^4.0.1+1
```

然后在工程根目录下，通过命令行执行 `./mpflutter packages get`。

### 发起请求

```dart
import 'dart:convert';
import 'package:dio/dio.dart' as dio;

class XXX {
  void doLoad() async {
    setState(() {
      loading = true;
    });
    try {
      final response = await dio.Dio().get(
        'https://api.github.com/users/mpflutter',
        options: dio.Options(
          responseType: dio.ResponseType.json,
        ),
      );
      final result = response as Map;
      setState(() {
        mpflutterLogo = result['avatar_url'];
      });
    } catch (e) {} finally {
      setState(() {
        loading = false;
      });
    }
  }
}
```