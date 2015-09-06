var assert = require('assert')
var md5 = require('./')

describe('md5', function() {
	it('basic', function() {
		// echo -n abc | md5sum
		assert.deepEqual(md5('abc'), '900150983cd24fb0d6963f7d28e17f72')
	})

	it('support chinese', function() {
		// echo -n 中文123のabc | md5sum
		assert.deepEqual(md5('中文123のabc'), '0fa86f501c35fbd40e1cc8d1f99a1c66')
	})
})
