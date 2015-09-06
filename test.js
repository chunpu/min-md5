var assert = require('assert')
var md5 = require('./')

describe('md5', function() {
	it('basic', function() {
		// echo -n abc | md5sum
		assert.deepEqual(md5('abc'), '900150983cd24fb0d6963f7d28e17f72')
	})

	it('support chinese', function() {
		// echo -n 中国123のabc | md5sum
		assert.deepEqual(md5('中国123のabc'), '2150a6840dbd6c6c3ae83a988226ff91')
	})
})
