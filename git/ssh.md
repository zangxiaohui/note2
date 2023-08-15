# 报错 no such identity: /Users/zangxiaohui/.ssh/id_rsa: No such file or directory

.ssh 中是 id_ed25519 的文件

# 将 SSH 密钥添加到 ssh 代理中

ssh 服务器默认是去找 id_rsa，现在需要把这个 key 添加到 ssh-agent 中，这样 ssh 服务器才能认识 id_rsa_TestSSH_github。

1. 在后台启动 ssh-agent
   Start the ssh-agent in the background

<pre>
$ eval "$(ssh-agent -s)"
> Agent pid 59566
</pre>
