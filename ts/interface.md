getParamsFromUrl(urlParams: FilterParams & { tab: CustomerTabType })

#

```
export interface EntComponentSchema<T = string> extends IComponent<T>, ComponentProperties {
}
```

ts 你设置了一些字面量（字符串，数字、布尔），当你有个变量是该类型时，需要给 as const

不过 typescript 5 不需要了

还有就是返回类型是静态类型，而不是数组也可以

```

type UseSyncStateProps<T> = readonly [() => T, (newValue: T) => void];

export default function useSyncState<T>(initialValue: T): UseSyncStateProps<T> {
  const ref = React.useRef<T>(initialValue);
  const forceUpdate = useForceUpdate();

  return [
    () => ref.current,
    (newValue: T) => {
      ref.current = newValue;
      // re-render
      forceUpdate();
    },
  ] as const;
}

```

对，你不 as const,他就认为是数组类型

你也可以手动指定下类型，就不需要 as 断言了

```
/**
 *
 * @param containerWidth
 * @param containerHeight
 * @return [cellWidth, cellHeight, gapWidth, gapHeight]
 */
function calcCellSize(containerWidth: number, containerHeight: number) {
  return [
    Math.floor(containerWidth * 0.175),
    Math.floor((containerHeight - 15 * 20) / 14),
    20,
    20,
  ] as const;
}
```

Types of property 'fixed' are incompatible.
表格中 fixed: 'right' as const 要加一个断言，因为表格是字符字面量

寻址于传递
map 会改变
filter 不会改变地址
