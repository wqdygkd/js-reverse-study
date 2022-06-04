webpack自动扣代码脚本

项目地址: [渔滒/webpack_ast](https://gitcode.net/zjq592767809/webpack_ast)

使用命令行的方式

node webpack_mixer.js -l runtime.62249a5.js -m app.597640f.js -o webout.js

参数说明：

-l 加载器的js路径

加载器的js特征：

1.以自执行函数开头

2.定义导出函数，类似 return e[n].call(r.exports, r, r.exports, d), r.l = !0, r.exports

3.为导出函数添加多个方法，类似d.e，d.m，d.n等等

-m 函数模块的js路径

函数模块的js特征：

1.一般以(window.webpackJsonp开头

-o 输入结果的js路径

备注：如果js本身有检测等，需要自行补头或者其他处理
