# os

os 即 operating system 操作系统


const maxPort = 65_535;

在数字之间加_ 没特殊含义，就是为了分隔，方便阅读


lo0 即localhost

```
{
  lo0: [
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      ...
    },
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      ...
    },
    {
      address: 'fe80::1',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      ...
    }
  ],
  anpi2: [
    {
      address: 'fe80::a8f5:98ff:fe2b:963b',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      ...
    }
  ],
  anpi1: [
    {
      ...
    }
  ],
  anpi0: [
    {
    ...
    }
  ],
  en0: [
    {
      ...
    },
    {
      ...
    }
  ],
  awdl0: [
    {
      ...
    }
  ],
  llw0: [
    {
      ...
    }
  ],
  utun0: [
    {
      ...
    }
  ],
  utun1: [
    {
      ...
    }
  ],
  utun2: [
    {
      ...
    }
  ]
}
```

for...of

The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.


  http.createServer()
  net.createServer()
