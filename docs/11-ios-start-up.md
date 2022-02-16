---
id: ios-start-up
title: 起步
---

> 在开始 iOS 起步教程前，建议你先完成[《编写第一个 MPFlutter 应用》](./3-first-app.md)，学习 MPFlutter 的环境搭建以及简单开发步骤。

## 环境要求 

- macOS
- CocoaPods
- Xcode
- [MPFlutter 开发所需的工具链](./2-install-env.md)

## 创建 iOS 工程并添加 MPIOSRuntime 依赖

首先，开发者需要使用 Xcode 创建一个空白的工程，并将 `MPIOSRuntime` 添加到 `Podfile` 中，并执行 `pod install`。你可以指定 Runtime 的版本号，版本号可以到 https://cocoapods.org/ 查询。

```ruby
pod 'MPIOSRuntime'
```

## 创建 Applet 并开始调试

在示例中，我们尝试在 App 启动后，创建一个 `window` 并使 `UINavigationController` 成为其 `rootViewController`。

然后，我们会创建一个 Applet 并附着到 `rootViewController` 上。

在该例子中，我们指定 Debugger 为 `127.0.0.1:9898`，这代表连接本机的调试器，如果你是在真机上开发，务必修改 `127.0.0.1` 为你电脑的内网 IP。

```objc
#import "AppDelegate.h"
#import <MPIOSRuntime/MPIOSRuntime.h>

@interface AppDelegate ()

@property (nonatomic, strong) MPIOSApplet *applet;

@end

@implementation AppDelegate


- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    UINavigationController *rootViewController = [[UINavigationController alloc] init];
    [rootViewController.navigationBar setTranslucent:NO];
    rootViewController.view.backgroundColor = [UIColor whiteColor];
    self.window.rootViewController = rootViewController;
    [self.window makeKeyAndVisible];
    
    // setup applet
    MPIOSEngine *engine = [[MPIOSEngine alloc] initWithDebuggerServerAddr:@"127.0.0.1:9898"];
    self.applet = [MPIOSApplet createAppletWithEngine:engine
                                         initialRoute:@"/"
                                        initialParams:@{}];
    [self.applet attachToNavigationController:rootViewController
                         asRootViewController:YES];
    [engine start];
    
    return YES;
}


@end

```

使用 Xcode 构建将 Run 到模拟器上。

## 创建 Dart 工程并开始开发

### 克隆模板工程

在另一个目录克隆 mpflutter 模板工程。

```
git clone https://github.com/mpflutter/mpflutter_template.git awesome_project
```

> 我们提供 gitee 镜像，当遇到网络问题时，可以将 github.com 替换成 gitee.com 即可。

### 安装依赖

使用 VSCode 打开刚刚克隆得到的工程根目录，在命令行中执行以下命令。

```
./mpflutter packages get
```

> 注意，这里用的是 ./mpflutter 而不是 flutter！

## 运行应用

保持在 VSCode 窗口中，按下键盘【F5】键（也可以使用鼠标点开调试栏启动调试），开始调试。

![](assets/ide-debug-guide-0.png)

稍等片刻，调试控制台中会出现以下信息（如果没有出现该信息，请重新启动调试）。

![](assets/ide-debug-guide-1.png)

此时，切换界面到刚刚使用 Xcode Run 起来的模拟器应用，一个蓝色 Hello World 界面应该出现在应用中了。

## 尝试热重载

MPFlutter 通过 热重载 提供快速开发周期，该功能支持应用程序在运行状态下重载代码而无需重新启动应用程序或者丢失程序运行状态。修改一下代码，然后告诉IDE或者命令行工具你需要热重载，然后看一下模拟器或者设备上应用的变化

1. 打开 `lib/main.dart`。

2. 修改字符串

`
'Hello, MPFlutter!'
`
改为

`
'Hello, World!'
`

3. 不要 停止应用。保持应用处于运行状态。

保存修改

你会发现修改后的字符串几乎马上出现在正在运行的模拟器上。

## 尝试断点

1. 打开 `lib/main.dart`。

2. 在第 33 行处，添加断点，如下图。

![](assets/ide-debug-guide-4.png)

3. 在 Chrome 中，点击『蓝色区域』，此时，VSCode 会收到断点信息，并停留在断点处，你可以尝试在此进行断点调试。

## 初始化应用信息

停止调试，并切换到终端命令行，执行以下命令。

`
dart scripts/help.dart
`

这将出现以下信息，`help.dart` 是 MPFlutter 的帮助中心，可帮助你完成应用的初始化和构建工作。

![](assets/ide-debug-guide-3.png)

我们选择`初始化 MPFlutter 模板工程`，并根据提示输入工程名称、输出目标。

* 是否移除模板工程自带的 Git 源？ (y/N)

    * 对于新克隆的模板工程，选 y 即可，移除自带的 Git 源，后续可以添加自己的 Git 源。

* 请输入工程名称，合法字符为全小写英文和下划线：

    * 输入一个合法的工程名称，如 `awesome_project`，这将会同步修改 `pubspec.yaml` 中的 `name` 值。

* 该工程需要输出到 Web 吗？(如果选择否，将删除 Web 目录。) (y/N)

    * 如果你不需要输出到 Web (HTML5) 可以选择否，一般情况下，我们会选 y 保留该目标。

* 该工程需要输出到微信小程序吗？(如果选择否，将删除 weapp 目录。) (y/N) 

    * 如果你不需要输出到微信小程序可以选择否。

......

在命令行执行 `./mpflutter packages get`。

## 构建产物

当开发完成后，你可以通过以下命令构建 iOS 小程序产物。

`
dart scripts/build_mpk.dart
`

构建完成后，产物位于 `build` 目录下。

## 使用产物

在 iOS 端初始化 `MPIOSEngine` 时，使用加载 MPK 方法即可。

```objc
MPIOSEngine *engine = [[MPIOSEngine alloc] initWithMpkData:<#(nonnull NSData *)#>];
```