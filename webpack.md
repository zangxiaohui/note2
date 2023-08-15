# 执行 npx webpack

Node 8.2/npm 5.2.0 以上版本提供的 npx 命令，可以运行在初次安装的 webpack package 中的 webpack 二进制文件（即 ./node_modules/.bin/webpack）
The npx command, which ships with Node 8.2/npm 5.2.0 or higher, runs the webpack binary (./node_modules/.bin/webpack) of the webpack package we installed in the beginning:

```
// webpack4
/**
 * @param {string} packageName name of the package
 * @returns {boolean} is the package installed?
 */
const isInstalled = packageName => {
	try {
		require.resolve(packageName);

		return true;
	} catch (err) {
		return false;
	}
};
// require.resolve('webpack') :>>  /Users/zangxiaohui/mme/demo/webpack-demo/node_modules/webpack/lib/webpack.js



// webpack 5
/**
 * @param {string} packageName name of the package
 * @returns {boolean} is the package installed?
 */
const isInstalled = packageName => {
	if (process.versions.pnp) {
		return true;
	}

	const path = require("path");
	const fs = require("graceful-fs");

	let dir = __dirname;

	do {
		try {
			if (
				fs.statSync(path.join(dir, "node_modules", packageName)).isDirectory()
			) {
				return true;
			}
		} catch (_error) {
			// Nothing
		}
	} while (dir !== (dir = path.dirname(dir)));

	return false;
};
```

```
const isYarn = fs.existsSync(path.resolve(process.cwd(), "yarn.lock"));
```

$ npm i webpack-cli -D
使用 npm 的 scripts，我们可以像使用 npx 那样通过模块名引用本地安装的 npm 包

npm run build 命令和你的参数之间添加两个中横线，可以将自定义参数传递给 webpack

注意，因为这个插件直接执行文本替换，给定的值必须包含字符串本身内的实际引号。通常，有两种方式来达到这个效果，使用 '"production"', 或者使用 JSON.stringify('production')。

[https://v3.umijs.org/zh-CN/config#define]

注意：define 对象的属性值会经过一次 JSON.stringify 转换

这里的 define 其实是用的 webpackdefinePlugin,就是在执行时将定义的变量替换成这个字符串，、、他就是把你的 process.env.SCHEME 替换成了'http'

我不是十分理解。为啥在前端代码里 可以通过 process.env.SCHEME 去拿？ 是经过了插件的转换？
对
有插件做处理
只是没暴露是什么，只暴露可配置的东西
那只是你写的，其实打包的代码你应该搜不到 process.env.SCHEME

webpack5 如果不是 node 环境这样写直接报错

前端是拿不到 file system 的
