(DestroyOnClose is not working)[https://github.com/ant-design/ant-design/issues/21740]



## form 的状态是在 useForm 里面的，自然不会跟着 Modal 一起被销毁，这个和 useState 是一样的道理。

form state was maintained by useForm outside the Modal, which would never destroyed by Modal. It is the same behavior when using useState outside the Modal.

## destroyOnClose 只是 Modal 的API，所以只会处理 Modal 相关的逻辑，和表单的逻辑是解耦的，两者没有关系。

destroyOnClose is only the API of Modal, so it will only deal with the logic related to Modal, and it is decoupled from the logic of the form, there is no relationship between the two.


类比 useState 就很好理解。

```
const [value, setValue] = useState('');

return (
  <>
    <Modal destroyOnClose>
      <input value={value} onChange={setValue} />
    </Modal>
    <div>此处 value 不会因为 Modal 关闭而消失：{value}</div>
    <div>This value won't disappear when Modal is closed: {value}</div>
  </>
);
```

## Modal 关闭时会销毁 input 节点，但是 useState 的 value 不会被销毁。