const assert = require('assert')
let TestObject = require('testobject_api')

let rdcAccount = new TestObject({
    username: process.env.RDC_ADMIN_USERNAME,
    apiKey: process.env.RDC_ACCESS_KEY,
    password: process.env.RDC_ADMIN_PW
})

describe('TestObject website', function() {
    it('TestObject homepage loads', function() {
        browser.url('https://testobject.com')
        let pageUrl = browser.getUrl()
        let uiOverlay = browser.element(".overlay")
        uiOverlay.waitForVisible(5000)
        let title = browser.getTitle()
        assert.equal(title, 'TestObject – Android and iOS Mobile App Testing Made Easy')
        if (title !== 'TestObject – Android and iOS Mobile App Testing Made Easy') {
            rdcAccount.updateTest(browser.session().sessionId, {"passed":false}, function(err, resp){})
        } else {
            rdcAccount.updateTest(browser.session().sessionId, {"passed":true}, function(err, resp){})
        }
        browser.pause(2000)
    })
    
    it('Homepage rotates to portrait mode', function() {
        browser.orientation('portrait')
        let currentOrientation = browser.orientation()
        assert.equal('PORTRAIT', currentOrientation.value)
        if ( currentOrientation.value !== 'PORTRAIT') {
            rdcAccount.updateTest(browser.session().sessionId, {"passed":false}, function(err, resp){})
        } else {
            rdcAccount.updateTest(browser.session().sessionId, {"passed":true}, function(err, resp){})
        }
    })
})
