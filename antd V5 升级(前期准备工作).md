

### react 18 升级(前期准备工作)
https://docs-dev.factchina.com/

/apps/{business_code}/result/customers/{customer_id}/universe

在项目中用了一些 React-router ， redux 等工具后，虚拟 Dom 树可能会受到一些侵入，比如 Dom 树中多了一些 Conext.Consumer 的结构，这些是 context 的语法，不管这些结构，双击目标组件即可下钻定位到这个组件的详细结构中，


### maxLength 是不是 single source of truth



### antd 升级相关

查阅的资料
[v5 Task List #34087](https://github.com/ant-design/ant-design/issues/34087)<br>
[更新日志](https://ant.design/changelog-cn)

1. day.js replacement<br>
下个大版本将会替换moment为 dayjs，先通过插件将V4版本下的组件替换为dayjs，删除项目中的 moment 为 dayjs，可优化打包大小

2. Remove antd/lib/xxx, ESM only<br>
下个版本将会将会删除 antd/lib/xxx，需要将涉及到引用 antd/lib/xxx 的引用修改为 antd/es/xxx

3. 4.20.0 更新日志上 Menu 添加 items 数据化菜单项支持以为将来性能提升做准备，并且 children 将会在下个大版本中废弃。[#34559](https://github.com/ant-design/ant-design/pull/34559)<br>
因此需要排查涉及到的仓库具有 Menu.Item 渲染的修改

...持续更新


## useSWR 是 react hooks 中一个比较有意思的组件，既可以作为请求库，也可以作为状态管理的缓存用，SWR 的名字来源于“stale-while-revalidate”, 是在HTTP RFC 5861标准中提出的一种缓存更新策略

React 18
React 18 rc version is out. It's predictable the concurrent mode is coming. We will list all the un-compatible components and fix one by one. It's in the plan but we can not promise much on this since React 18 is still on the way. We will:

Remove all findDOMNode directly call in code. (but still provide fallback if passed node is not ref-fable)
Check all render-time props calculation conflict.
Test coverage of concurrent mode.