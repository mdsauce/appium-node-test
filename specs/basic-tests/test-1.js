let assert = require('assert')

describe('TestObject website', function() {
    it('TestObject homepage loads', function() {
        browser.url('https://testobject.com')
        let pageUrl = browser.getUrl()
        let uiOverlay = browser.element(".overlay")
        uiOverlay.waitForVisible(5000)
        let title = browser.getTitle()
        assert.equal(title, 'TestObject – Android and iOS Mobile App Testing Made Easy')
        browser.pause(2000)
    })
    
    it('Homepage rotates to portrait mode', function() {
        browser.orientation('portrait')
        let currentOrientation = browser.orientation()
        assert.equal('PORTRAIT', currentOrientation.value)
    })
})
