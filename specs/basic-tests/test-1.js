var assert = require('assert')

describe('TestObject website', function() {
    it('TestObject homepage loads', function() {
        browser.url('https://testobject.com')
        var pageUrl = browser.getUrl()
    })
    it('Homepage rotates to portrait mode', function() {
        browser.orientation('portrait')
    })
})
