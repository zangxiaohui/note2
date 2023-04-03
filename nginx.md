## 默认的路由模式是history，只需要加上 try file

location / {
	root html/dist/
	try_files $uri $uri/ /
}