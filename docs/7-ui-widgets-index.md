---
id: ui-widgets-index
title: 核心 Widget 目录
---

MPFlutter 允许开发者复用大部分 Flutter Widget，以下是 MPFlutter 的核心可用 Widget，以及不可用的 Widget。

所有 `Material` 和 `Cupertino` 均不可用。

## Accessibility

所有 Accessibility 组件均不可用

- ExcludeSemantics
- MergeSemantics
- Semantics

## Animation and Motion

### 可用

- [AnimatedAlign](https://api.flutter.dev/flutter/widgets/AnimatedAlign-class.html)
- [AnimatedBuilder](https://api.flutter.dev/flutter/widgets/AnimatedBuilder-class.html)
- [AnimatedContainer](https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html)
- [AnimatedCrossFade](https://api.flutter.dev/flutter/widgets/AnimatedCrossFade-class.html)
- [AnimatedOpacity](https://api.flutter.dev/flutter/widgets/AnimatedOpacity-class.html)
- [AnimatedPositioned](https://api.flutter.dev/flutter/widgets/AnimatedPositioned-class.html)
- [AnimatedSize](https://api.flutter.dev/flutter/widgets/AnimatedSize-class.html)
- [AnimatedWidget](https://api.flutter.dev/flutter/widgets/AnimatedWidget-class.html)
- [DecoratedBoxTransition](https://api.flutter.dev/flutter/widgets/DecoratedBoxTransition-class.html)
- [FadeTransition](https://api.flutter.dev/flutter/widgets/FadeTransition-class.html)
- [PositionedTransition](https://api.flutter.dev/flutter/widgets/PositionedTransition-class.html)
- [RotationTransition](https://api.flutter.dev/flutter/widgets/RotationTransition-class.html)
- [ScaleTransition](https://api.flutter.dev/flutter/widgets/ScaleTransition-class.html)
- [SizeTransition](https://api.flutter.dev/flutter/widgets/SizeTransition-class.html)
- [SlideTransition](https://api.flutter.dev/flutter/widgets/SlideTransition-class.html)

### 不可用
- [Hero](https://api.flutter.dev/flutter/widgets/Hero-class.html)
- [AnimatedModalBarrier](https://api.flutter.dev/flutter/widgets/AnimatedModalBarrier-class.html)
- [AnimatedListState](https://api.flutter.dev/flutter/widgets/AnimatedListState-class.html)
- [AnimatedDefaultTextStyle](https://api.flutter.dev/flutter/widgets/AnimatedDefaultTextStyle-class.html)

## Assets, images, and icon

### 可用

- [Image](https://api.flutter.dev/flutter/widgets/Image-class.html)

### 不可用

- [AssetBundle](https://api.flutter.dev/flutter/services/AssetBundle-class.html)
- [Icon](https://api.flutter.dev/flutter/widgets/Icon-class.html)
- [RawImage](https://api.flutter.dev/flutter/widgets/RawImage-class.html)

## Async

### 可用

- [FutureBuilder](htps://api.flutter.dev/flutter/widgets/FutureBuilder-class.html)
- [StreamBuilder](htttps://api.flutter.dev/flutter/widgets/StreamBuilder-class.html)

## Basic

### 可用

- [Column](https://api.flutter.dev/flutter/widgets/Column-class.html)
- [Container](https://api.flutter.dev/flutter/widgets/Container-class.html)
- [Row](https://api.flutter.dev/flutter/widgets/Row-class.html)
- [Text](https://api.flutter.dev/flutter/widgets/Text-class.html)

### 不可用

- [Appbar](https://api.flutter.dev/flutter/material/AppBar-class.html) 可以使用 MPAppBar 替代
- [ElevatedButton](https://api.flutter.dev/flutter/material/ElevatedButton-class.html)
- [FlutterLogo](https://api.flutter.dev/flutter/material/FlutterLogo-class.html)
- [Placeholder](https://api.flutter.dev/flutter/widgets/Placeholder-class.html)
- [Scaffold](https://api.flutter.dev/flutter/material/Scaffold-class.html) 可以使用 MPScaffold 替代

## Input

全部 Input 组件均不可用，请使用 `EditableText` 组件创建输入框。

## Interaction model

### 可用

- [AbsorbPointer](https://api.flutter.dev/flutter/widgets/AbsorbPointer-class.html)
- [GestureDetector](https://api.flutter.dev/flutter/widgets/GestureDetector-class.html)
- [IgnorePointer](https://api.flutter.dev/flutter/widgets/IgnorePointer-class.html)
- [Navigator](https://api.flutter.dev/flutter/widgets/Navigator-class.html)

### 不可用

- [Dismissible](https://api.flutter.dev/flutter/widgets/Dismissible-class.html)
- [DragTarget](https://api.flutter.dev/flutter/widgets/DragTarget-class.html)
- [Draggable](https://api.flutter.dev/flutter/widgets/Draggable-class.html)
- [DraggableScrollableSheet](https://api.flutter.dev/flutter/widgets/DraggableScrollableSheet-class.html)
- [LongPressDraggable](https://api.flutter.dev/flutter/widgets/LongPressDraggable-class.html)
- [Scrollable](https://api.flutter.dev/flutter/widgets/Scrollable-class.html)

## Layout

### 可用

- [Align](https://api.flutter.dev/flutter/widgets/Align-class.html)
- [AspectRatio](https://api.flutter.dev/flutter/widgets/AspectRatio-class.html)
- [Center](https://api.flutter.dev/flutter/widgets/Center-class.html)
- [ConstrainedBox](https://api.flutter.dev/flutter/widgets/ConstrainedBox-class.html)
- [Container](https://api.flutter.dev/flutter/widgets/Container-class.html)
- [Expanded](https://api.flutter.dev/flutter/widgets/Expanded-class.html)
- [Offstage](https://api.flutter.dev/flutter/widgets/Offstage-class.html)
- [Padding](https://api.flutter.dev/flutter/widgets/Padding-class.html)
- [SizedBox](https://api.flutter.dev/flutter/widgets/SizedBox-class.html)
- [Transform](https://api.flutter.dev/flutter/widgets/Transform-class.html)
- [Column](https://api.flutter.dev/flutter/widgets/Column-class.html)
- [Flow](https://api.flutter.dev/flutter/widgets/Flow-class.html)
- [GridView](https://api.flutter.dev/flutter/widgets/GridView-class.html)
- [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)
- [Row](https://api.flutter.dev/flutter/widgets/Row-class.html)
- [Stack](https://api.flutter.dev/flutter/widgets/Stack-class.html)
- [Table](https://api.flutter.dev/flutter/widgets/Table-class.html)
- [Wrap](https://api.flutter.dev/flutter/widgets/Wrap-class.html)
- [CustomScrollView](https://api.flutter.dev/flutter/widgets/CustomScrollView-class.html)
- [SliverGrid](https://api.flutter.dev/flutter/widgets/SliverGrid-class.html)
- [SliverList](https://api.flutter.dev/flutter/widgets/SliverList-class.html)
- [SliverPadding](https://api.flutter.dev/flutter/widgets/SliverPadding-class.html)
- [SliverPersistentHeader](https://api.flutter.dev/flutter/widgets/SliverPersistentHeader-class.html)
- [SliverToBoxAdapter](https://api.flutter.dev/flutter/widgets/SliverToBoxAdapter-class.html)
- [FittedBox](https://api.flutter.dev/flutter/widgets/FittedBox-class.html)
- [FractionallySizedBox](https://api.flutter.dev/flutter/widgets/FractionallySizedBox-class.html)
- [IntrinsicHeight](https://api.flutter.dev/flutter/widgets/IntrinsicHeight-class.html)
- [IntrinsicWidth](https://api.flutter.dev/flutter/widgets/IntrinsicWidth-class.html)
- [LimitedBox](https://api.flutter.dev/flutter/widgets/LimitedBox-class.html)
- [OverflowBox](https://api.flutter.dev/flutter/widgets/OverflowBox-class.html)
- [SizedOverflowBox](https://api.flutter.dev/flutter/widgets/SizedOverflowBox-class.html)
- [IndexedStack](https://api.flutter.dev/flutter/widgets/IndexedStack-class.html)

### 不可用

- [Baseline](https://api.flutter.dev/flutter/widgets/Baseline-class.html)
- [CustomSingleChildLayout](https://api.flutter.dev/flutter/widgets/CustomSingleChildLayout-class.html)
- [CustomMultiChildLayout](https://api.flutter.dev/flutter/widgets/CustomMultiChildLayout-class.html)
- [LayoutBuilder](https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html)
- [ListBody](https://api.flutter.dev/flutter/widgets/ListBody-class.html)

## Painting and effect

### 可用 
- [ClipOval](https://api.flutter.dev/flutter/widgets/ClipOval-class.html)
- [ClipRect](https://api.flutter.dev/flutter/widgets/ClipRect-class.html)
- [CustomPaint](https://api.flutter.dev/flutter/widgets/CustomPaint-class.html)
- [DecoratedBox](https://api.flutter.dev/flutter/widgets/DecoratedBox-class.html)
- [Opacity](https://api.flutter.dev/flutter/widgets/Opacity-class.html)
- [Transform](https://api.flutter.dev/flutter/widgets/Transform-class.html)
- [RotatedBox](https://api.flutter.dev/flutter/widgets/RotatedBox-class.html)

### 不可用

- [BackdropFilter](https://api.flutter.dev/flutter/widgets/BackdropFilter-class.html)
- [ClipPath](https://api.flutter.dev/flutter/widgets/ClipPath-class.html)
- [FractionalTranslation](https://api.flutter.dev/flutter/widgets/FractionalTranslation-class.html)

## Scrolling

### 可用
- [CustomScrollView](https://api.flutter.dev/flutter/widgets/CustomScrollView-class.html)
- [GridView](https://api.flutter.dev/flutter/widgets/GridView-class.html)
- [ListView](https://api.flutter.dev/flutter/widgets/ListView-class.html)
- [SingleChildScrollView](https://api.flutter.dev/flutter/widgets/SingleChildScrollView-class.html)
- [NotificationListener](https://api.flutter.dev/flutter/widgets/NotificationListener-class.html)

### 不可用
- [DraggableScrollableSheet](https://api.flutter.dev/flutter/widgets/DraggableScrollableSheet-class.html)
- [NestedScrollView](https://api.flutter.dev/flutter/widgets/NestedScrollView-class.html)
- [PageView](https://api.flutter.dev/flutter/widgets/PageView-class.html) 可以使用 MPPageView 替代
- [RefreshIndicator](https://api.flutter.dev/flutter/material/RefreshIndicator-class.html)
- [ReorderableListView](https://api.flutter.dev/flutter/material/ReorderableListView-class.html)
- [ScrollConfiguration](https://api.flutter.dev/flutter/widgets/ScrollConfiguration-class.html)
- [Scrollable](https://api.flutter.dev/flutter/widgets/Scrollable-class.html)
- [Scrollbar](https://api.flutter.dev/flutter/material/Scrollbar-class.html)

## Styling

### 可用

- [MediaQuery](https://api.flutter.dev/flutter/widgets/MediaQuery-class.html)
- [Padding](https://api.flutter.dev/flutter/widgets/Padding-class.html)

### 不可用
- [Theme](https://api.flutter.dev/flutter/material/Theme-class.html)

## Text

### 可用

- [DefaultTextStyle](https://api.flutter.dev/flutter/widgets/DefaultTextStyle-class.html)
- [RichText](https://api.flutter.dev/flutter/widgets/RichText-class.html)
- [Text](https://api.flutter.dev/flutter/widgets/Text-class.html)
