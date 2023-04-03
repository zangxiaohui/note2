eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIxMjM0NTY3ODkwIiwiZXhwIjoxNjA1MDAxNzQyLCJpYXQiOjE2MDQ5OTQ1NDIsImp0aSI6IjU5YjI2NDEzLTE4MjMtNDVlZS1iZTI1LTA5M2ZjMjlhMmYzOCJ9.FMpVjuTUSOY5sbYqbJslJCnIvExfhPciSHXFZ9B8nH0

token 分成了三部分，每部分用 . 分隔，每段都是用 Base64 编码的。如果我们用一个 Base64 的解码器的话 （ https://www.base64decode.org/ ）

header（头）、payload（负载）和 signature（签名）

header.payload.signature

// 高晨 你这个估计不是解密，你只是获取了 JWT 的前面一段，JWT 有三段，前面一段是明文
atob () 对经过 base-64 编码的字符串进行解码
btoa() 方法可以将一个二进制字符串（例如，将字符串中的每一个字节都视为一个二进制数据字节）编码为 Base64 编码的 ASCII 字符串。

```
export function getTokenPayload(token: string): TokenPayload {
  try {
    const decoded = atob(token.split('.')[1] || '');
    return JSON.parse(decoded);
  } catch (error) {
    return {};
  }
}
```
