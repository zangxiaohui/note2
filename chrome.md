### ps aux|grep Chrome

英文全拼：process status

ps aux 输出格式
| user | pid | cpu | mem | vsz | rss | tty | stat | start time | command
| zxh | 31607 | 0.0 | 1.6 | 442552320 | 270048 | ?? | S | 9:37AM 0:27.88 | /Applications/Google Chrome.app/Contents/MacOS/Google Chrome

打开 More tools > Task manager 对照看

### Chromium 里有三种进程——浏览器、渲染器和插件。

代浏览器采用的都是多进程浏览器，每个进程处理一个任务。 以 chrome 浏览器为例，打开一个 chrome 浏览器最少会产生 4 个进程，分别是：

1. Browser (浏览器进程)
2. GPU Process (GPU 进程) 用来进行硬件加速以提高浏览体验
3. Utility: Network Service (网络进程)
4. 页面进程（每新增一个标签页会增加一个进程）
5. 插件进程（如果有插件的话，一个插件一个进程）

StorageService?

This site can’t provide a secure connection
localhost sent an invalid response.
ERR_SSL_PROTOCOL_ERROR

1.go to chrome://net-internals/#hsts
2.Under Delete domain security policies, fill in localhost and click Delete
