var md5 = require('./')
console.time(1)
for (var i = 0; i < 100000; i++) {
	md5('中国123のabc')
}
console.timeEnd(1)

