- 字符的 unicode 编码是其 ascii 值前加上 &#
- 中文的 unicode 编码是其 hex 编码的 0x 换成 \u

需要注意的是，Unicode 只是一个符号集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储。

比如，汉字严的 Unicode 是十六进制数 4E25，转换成二进制数足足有 15 位（100111000100101），也就是说，这个符号的表示至少需要 2 个字节。表示其他更大的符号，可能需要 3 个字节或者 4 个字节，甚至更多。

这里就有两个严重的问题，第一个问题是，如何才能区别 Unicode 和 ASCII ？计算机怎么知道三个字节表示一个符号，而不是分别表示三个符号呢？第二个问题是，我们已经知道，英文字母只用一个字节表示就够了，如果 Unicode 统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有二到三个字节是 0，这对于存储来说是极大的浪费，文本文件的大小会因此大出二三倍，这是无法接受的

# HTML 中使用：&#dddd; 或&#xhhhh;

其中 dddd 表示 4 位 10 进制数值，hhhh 表示 4 位 16 进制数值，两种格式分别以&#及&#x 为前缀，表示为 10 进制码或者 16 进制的 Unicode 码，都需要以分号为后缀。
目前，使用 4 位 16 进制码的 Unicode 字符获得比较好的支持，大多数都可以在网页中正常显示，但其他更多的 Unicode 字符往往还不能显示出来，这是因为使用的计算机平台还没有安装相关的 Unicode 支持。

# CSS 中使用：\hhhh

使用 4 位 16 进制 Unicode 码表示，前缀为反斜符。

# JavaScript 中使用：\uhhhh

4 位 Unicode 的 16 进制码前面加上前缀“\u”

# unicode 编码转换为中文

1. escape()

废弃的 escape() 方法生成新的由十六进制转义序列替换的字符串。使用 encodeURI 或 encodeURIComponent 代替。

2. charCodeAt()，例如：
   var ucode="罗".charCodeAt().toString(16);
   // 7f57

```
// encodeURI('罗舒也')
const xx = '%E7%BD%97%E8%88%92%E4%B9%9F'

// escape('罗舒也')
const xx = '%u7F57%u8212%u4E5F'
const xx = '\u7F57\u8212\u4E5F'

eval("'"+ xx + "'")
console.log(xx)
decodeURI(xx)
unescape(yy)
```
