
### WARN [WARN] update `jsx: "react"` into `jsx: "react-jsx"` to suport the new JSX transform in React 17 in tsconfig.json
[React17升级带来的tsconfig.json中jsx属性更新](https://zhuanlan.zhihu.com/p/313040458)

因此老版本需要在jsx文件中显式的引入React，不然语法检测会通不过
无需手动引入React，由Babel 或 TypeScript 在编译阶段自动引入_jsx依赖


 vs code 配置 typescript 使用工作区版本. react-jsx 最低要求 typescript 版本为 4.1

在tsconfig.json页面调出命令托盘（cmd + shift + p）并键入“ select typescript version”，选择选项，然后选择“使用工作区版本4.2.3”

如果你的项目使用的是typescript, 不更新相关配置，是无法识别到React的这一更新的，这就导致.tsx文件如果不引入React模块，jsx语法会报错

'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.
'React' 指 UMD 全局, 但当前文件是模块. 请考虑改为添加导入

```
{
  "compilerOptions": {
    "jsx": "react-jsx"
  }
}

```

### Sentry CLI Plugin: Command failed: /Users/zangxiaohui/wwork/bancha-webapp/node_modules/@sentry/cli/sentry-cli releases new undefined@development
error: A project slug is required

需要把以下环境变量注释掉
```
	# export CI_ENVIRONMENT_NAME=development
	# export CI_COMMIT_REF_NAME=development
```

### Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.


### ERROR in ./node_modules/ajv-errors/dist/index.js
Module not found: Error: Can't resolve 'ajv/dist/compile/codegen' in '/Users/zangxiaohui/mme/my-demo/node_modules/ajv-errors/dist'

- cjs CommonJS
- esm ECMAScript Module


### BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.

webpack5中移除了nodejs核心模块的polyfill自动引入，所以需要手动引入

npm install --save craco

### Form already set 'initialValues' with path 'content.13.data.status'. Field can not overwrite it.



### Unhandled Rejection (Error): Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.
▼ 5 stack frames were expanded.


当 Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件；这可能发生在 window 下，但也可能发生在 Worker 中。 这对于调试和为意外情况提供后备错误处理非常有用。

[unhandledrejection](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/unhandledrejection_event)



### Process exited with code 1
(node:20359) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)


### The 'fetchCountryDivisions' function makes the dependencies of useMemo Hook (at line 238) change on every render. Move it inside the useMemo callback. Alternatively, wrap the definition of 'fetchCountryDivisions' in its own useCallback() Hook.eslintreact-hooks/exhaustive-deps

```
  const fetchCountryDivisions: InputAddress.EffectCountryDivisions = async (params) => {
    async function fetchCountryDivisions0(country?: string, lang?: string) {
      if (country === undefined || lang === undefined) {
        return effectResult(undefined, undefined);
      }
      const result = {
        items: CountryDivisionsData?.divisions,
      };
      return effectResult(undefined, result);
    }
    const country = params?.country?.toLowerCase() ?? 'cn';
    const lang = getLang(params?.locales) ?? 'zh';
    return fetchCountryDivisions0(country, lang);
  };
```

### RangeError: Maximum call stack size exceeded 爆栈

栈 stack 
堆 heap

### Module not found: Error: You attempted to import /Users/zangxiaohui/mme/demo/cra-demo/node_modules/react-refresh/runtime.js which falls outside of the project src/ directory. Relative imports outside of src/ are not supported.
You can either move it inside src/, or add a symlink to it from project's node_modules/.

```
 new ModuleScopePlugin(paths.appSrc, [
          paths.appPackageJson,
          reactRefreshRuntimeEntry,
          reactRefreshWebpackPluginRuntimeEntry,
          babelRuntimeEntry,
          babelRuntimeEntryHelpers,
          babelRuntimeRegenerator,
        ]),
```

###  webpack < 5 used to include polyfills for node.js core modules by default.
This is no longer the case. Verify if you need this module and configure a polyfill for it.
