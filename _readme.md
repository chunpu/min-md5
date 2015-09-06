Usage
---

```js
var md5 = require('min-md5')

md5('abc')
// => 900150983cd24fb0d6963f7d28e17f72

// support unicode
md5('中文123のabc')
// => 0fa86f501c35fbd40e1cc8d1f99a1c66
```

> always return 32 length lowercase string

return same value like `md5sum`

```sh
echo -n 中文123のabc | md5sum
```
