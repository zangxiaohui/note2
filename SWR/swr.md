The name “SWR” is derived from stale-while-revalidate, a HTTP cache invalidation strategy popularized by (HTTP RFC 5861)[https://datatracker.ietf.org/doc/html/rfc5861].

HTTP RFC 5861

1. 不会在组件挂载、页面重新聚焦、网络重连时主动触发请求，需要手动调用其返回的 trigger 方法
2. 请求过程中 isMutating 被设置成 true，可以看作 loading 状态
3. trigger 接受一个额外的参数，会被放在 fetch 函数的第二个参数 arg 属性中
