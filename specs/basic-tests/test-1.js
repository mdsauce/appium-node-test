var assert = require('assert')

describe('TestObject website', function() {
    it('Opens TestObject', function() {
        browser.url('https://testobject.com')
        var pageUrl = browser.getUrl()
    })
})
