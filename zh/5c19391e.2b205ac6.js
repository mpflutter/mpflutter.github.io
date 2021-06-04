(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(98)),i={id:"ui-animation",title:"\u52a8\u753b"},l={unversionedId:"ui-animation",id:"ui-animation",isDocsHomePage:!1,title:"\u52a8\u753b",description:"MPFlutter \u4e0e Flutter \u7684\u52a8\u753b\u5b9e\u73b0\u65b9\u6cd5\u5b8c\u5168\u4e00\u81f4\uff0c\u4f46\u662f\u8bf7\u6ce8\u610f\uff0c\u5728 Debug \u6a21\u5f0f\u4e0b\u52a8\u753b\u6267\u884c\u53ef\u80fd\u5b58\u5728\u5361\u987f\u3002",source:"@site/../docs/UIAnimation.md",slug:"/ui-animation",permalink:"/zh/docs/ui-animation",editUrl:"https://github.com/mpflutter/mpflutter/edit/master/website/../docs/UIAnimation.md",version:"current",sidebar:"docs",previous:{title:"\u8def\u7531\u548c\u5bfc\u822a",permalink:"/zh/docs/ui-router"},next:{title:"\u6838\u5fc3 Widget \u76ee\u5f55",permalink:"/zh/docs/ui-widgets-index"}},c=[{value:"\u9690\u5f0f\u52a8\u753b",id:"\u9690\u5f0f\u52a8\u753b",children:[]},{value:"\u81ea\u5b9a\u4e49\u52a8\u753b",id:"\u81ea\u5b9a\u4e49\u52a8\u753b",children:[]}],u={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"MPFlutter \u4e0e Flutter \u7684\u52a8\u753b\u5b9e\u73b0\u65b9\u6cd5\u5b8c\u5168\u4e00\u81f4\uff0c\u4f46\u662f\u8bf7\u6ce8\u610f\uff0c\u5728 Debug \u6a21\u5f0f\u4e0b\u52a8\u753b\u6267\u884c\u53ef\u80fd\u5b58\u5728\u5361\u987f\u3002")),Object(o.b)("h2",{id:"\u9690\u5f0f\u52a8\u753b"},"\u9690\u5f0f\u52a8\u753b"),Object(o.b)("p",null,"\u6700\u5e38\u7528\u7684 Flutter \u52a8\u753b\u662f\u9690\u5f0f\u52a8\u753b\uff0c\u4ee5\u4e0b\u7ec4\u4ef6\u662f\u652f\u6301\u9690\u5f0f\u52a8\u753b\u7684\u3002"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AnimatedAlign"),Object(o.b)("li",{parentName:"ul"},"AnimatedContainer"),Object(o.b)("li",{parentName:"ul"},"AnimatedOpacity"),Object(o.b)("li",{parentName:"ul"},"AnimatedPadding"),Object(o.b)("li",{parentName:"ul"},"AnimatedPositioned"),Object(o.b)("li",{parentName:"ul"},"AnimatedSize"),Object(o.b)("li",{parentName:"ul"},"AnimatedCrossFade")),Object(o.b)("p",null,"\u9690\u5f0f\u52a8\u753b\u539f\u7406\u662f\u901a\u8fc7 ",Object(o.b)("inlineCode",{parentName:"p"},"StatefulWidget")," \u4e2d\u7684\u72b6\u6001\u53d8\u5316\uff0c\u91cd\u5efa\u7ec4\u4ef6\u5c5e\u6027\uff0c\u5e76\u6839\u636e\u5c5e\u6027\u7684\u524d\u503c\u3001\u65b0\u503c\u6784\u5efa\u63d2\u503c\u52a8\u753b\uff0c\u8fd9\u91cc\u4ee5 ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedContainer")," \u4f5c\u4f8b\u5b50\u6f14\u793a\u9690\u5f0f\u52a8\u753b\u7684\u4f7f\u7528\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dart"},"class MyHomePage extends StatefulWidget {\n  @override\n  _MyHomePageState createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage> {\n  bool rotated = false;\n\n  @override\n  Widget build(BuildContext context) {\n    return MPScaffold(\n      body: Center(\n        child: GestureDetector(\n          onTap: () {\n            setState(() {\n              rotated = !rotated;\n            });\n          },\n          child: AnimatedContainer(\n            decoration: BoxDecoration(\n              color: rotated ? Colors.orange : Colors.blue,\n            ),\n            transform: Matrix4.identity()\n              ..rotateZ(rotated ? 45.0 * pi / 180.0 : 0.0),\n            curve: Curves.ease,\n            duration: Duration(milliseconds: 750),\n            child: Container(\n              width: 200,\n              height: 200,\n              child: Center(\n                child: Text(\n                  'R',\n                  style: TextStyle(\n                    fontSize: 18,\n                    fontWeight: FontWeight.bold,\n                    color: Colors.white,\n                  ),\n                ),\n              ),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://gitpod.io/#github.com/mpflutter/mpflutter_sample/tree/sample_animated_container"},Object(o.b)("img",{parentName:"a",src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),Object(o.b)("p",null,"\u70b9\u51fb\u84dd\u8272\u533a\u5757\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"rotated")," \u5c5e\u6027\u53d8\u66f4\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"build")," \u65b9\u6cd5\u4f1a\u91cd\u65b0\u6784\u5efa\uff0ctransform \u5c5e\u6027\u548c\u80cc\u666f\u8272\u5c5e\u6027\u53d1\u751f\u53d8\u5316\u3002"),Object(o.b)("p",null,"\u6b64\u65f6\uff0c\u84dd\u8272\u533a\u5757\u4e0d\u4f1a\u7acb\u5373\u53d8\u66f4\u4e3a\u6a59\u8272\u548c 45 \u5ea6\u89d2\u65cb\u8f6c\uff0c\u5b83\u4f1a\u4ee5 750ms \u7684\u65f6\u957f\uff0c\u4ee5\u52a8\u753b\u65b9\u5f0f\u53d8\u66f4\u81f3\u76ee\u6807\u503c\u3002"),Object(o.b)("h2",{id:"\u81ea\u5b9a\u4e49\u52a8\u753b"},"\u81ea\u5b9a\u4e49\u52a8\u753b"),Object(o.b)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528 ",Object(o.b)("inlineCode",{parentName:"p"},"AnimationController")," \u7684\u65b9\u5f0f\uff0c\u5b9e\u73b0\u81ea\u5b9a\u4e49\u52a8\u753b\uff0c\u53ef\u63a7\u6027\u66f4\u9ad8\uff0c\u5177\u4f53\u7684 ",Object(o.b)("inlineCode",{parentName:"p"},"AnimationController")," \u4f7f\u7528\u65b9\u6cd5\u53ef\u4ee5\u53c2\u8003 Flutter \u5b98\u7f51\u6559\u7a0b\uff0c\u8fd9\u91cc\u53ea\u4f5c\u4ee3\u7801\u6f14\u793a\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dart"},"class MyHomePage extends StatefulWidget {\n  @override\n  _MyHomePageState createState() => _MyHomePageState();\n}\n\nclass _MyHomePageState extends State<MyHomePage>\n    with SingleTickerProviderStateMixin {\n  bool rotated = false;\n  late AnimationController _animationController;\n\n  @override\n  void initState() {\n    super.initState();\n    _animationController = AnimationController(vsync: this);\n    _animationController.addListener(() {\n      setState(() {});\n    });\n  }\n\n  @override\n  Widget build(BuildContext context) {\n    return MPScaffold(\n      body: Center(\n        child: GestureDetector(\n          onTap: () {\n            rotated = !rotated;\n            if (rotated) {\n              _animationController.animateTo(1.0,\n                  duration: Duration(milliseconds: 750), curve: Curves.ease);\n            } else {\n              _animationController.animateTo(0.0,\n                  duration: Duration(milliseconds: 750), curve: Curves.ease);\n            }\n          },\n          child: Transform.rotate(\n            angle: (45.0 * _animationController.value) * pi / 180.0,\n            child: Container(\n              width: 200,\n              height: 200,\n              color: Colors.blue,\n              child: Center(\n                child: Text(\n                  'R',\n                  style: TextStyle(\n                    fontSize: 18,\n                    fontWeight: FontWeight.bold,\n                    color: Colors.white,\n                  ),\n                ),\n              ),\n            ),\n          ),\n        ),\n      ),\n    );\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://gitpod.io/#github.com/mpflutter/mpflutter_sample/tree/sample_animation_controller"},Object(o.b)("img",{parentName:"a",src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),Object(o.b)("p",null,"\u53ef\u89c1\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"AnimationController")," \u5b58\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"value"),"\uff0c",Object(o.b)("inlineCode",{parentName:"p"},"value")," \u503c\u4f1a\u968f\u63d2\u4ef6\u5668\u66f4\u65b0\uff0c\u5e76\u901a\u8fc7\u8be5 ",Object(o.b)("inlineCode",{parentName:"p"},"value")," \u9a71\u52a8\u754c\u9762\u53d8\u5316\u3002"))}d.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,s=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(s,l(l({ref:t},u),{},{components:n})):a.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);