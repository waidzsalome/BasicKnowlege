- 无符号右移以0填充空位，有符号右移以符号位填充空位
    - 无符号右移会把负数的二进制码当成正数的二进制码
- 同时使用逻辑非操作符（！），实际上会模拟Boolean()转型函数的行为
- 利用逻辑或避免为变量赋null或undefined
```
let myObject = preferredObject || backupObject
```
- 
