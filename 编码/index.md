# escape()

废弃的 escape() 方法生成新的由十六进制转义序列替换的字符串。使用 encodeURI 或 encodeURIComponent 代替。

# unicode 编码转换为中文

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

[https://www.utf8icons.com/character/9751/black-shogi-piece]
Symbol information table
｜ Name: ｜ Black Shogi Piece ｜
｜ Unicode Subset: ｜ Miscellaneous Symbols ｜
｜ Unicode HEX: ｜ U+2617 ｜
｜ ASCII value: ｜ 9751 ｜
｜ HTML: ｜ &#9751; ｜
｜ CSS: ｜ \2617 ｜

# ASCII 编码

计算机起源于美国，上个世纪，他们对英语字符与二进制位之间的关系做了统一规定，并制定了一套字符编码规则，这套编码规则被称为 ASCII 编码

ASCII，读音：美/ˈæski/；英/ˈæski/。 2、释义：abbr.美国信息交换标准码（American Standard Code for Information Interchange）

01011010 90 5A Z

# HEX 编码

hex 编码就是 16 进制编码，是字符的 ASCII 码值的 16 进制表示

# URL 编码

- 字母不需要进行 URL 编码
- 特殊字符的 URL 编码是其 ASCII 值的 16 进制表示，前面加个%
- 中文的 URL 编码是其 UTF-8 编码前面加个 %

# ASCII 与 Unicode 的区别

两者字符集都不同
Unicode HEX 是什么

## 为什么 HTML 中和 js 中都能正常渲染，但是在 css 中就渲染不出来？

```
<span class="box">
	&#9729;
</span>

<script type="text/javascript">
	// var box = document.querySelector('.box')
	// box.innerHTML = '\uf017'
</script>
```

https://www.utf8icons.com/subsets/miscellaneous-symbols
