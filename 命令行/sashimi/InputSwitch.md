InputSwitch 没有 default_value, 只有 value_mapping

```
{
  value_mapping: [
     [false, false],
     [true, true],
     [null, false],
   ]
}
```

```
/**
 * 处理JSON形式的schema配置
 */
export function buildValueMap(valueMap?: [any, boolean][]) {
  // 配置中的null等价于undefined
  return (
    valueMap?.map(([k, v]) => (k === null ? [undefined, v] : [k, v])) ??
    defaultValueMap
  );
}
```

```
export function getDefaultValue(valueMap?: [any, boolean][]) {
  const valueMap1 = buildValueMap(valueMap);
  // 实现默认值行为，表单项加载的值为undefined时，查表得出应保存的表单项默认值
  const defaultChecked = valueMap1.find(([k]) => k === undefined)?.[1];
  const defaultValue = valueMap1.find(([, v]) => v === defaultChecked)?.[0];
  return defaultValue;
}
```

1. 把二维数组中的[null, false]转为[undefined, false]
2. 找到 undefined 的映射值 v
3. 找到满足 右边映射值与 v 相当的 第一个元素的的 key 即是传给后台的值
