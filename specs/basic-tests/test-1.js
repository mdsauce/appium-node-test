const assert = require('assert')
let TestObject = require('testobject_api')
let rdcAccount = new TestObject({
    username: process.env.RDC_ADMIN_USERNAME,
    apiKey: process.env.RDC_ACCESS_KEY,
    password: process.env.RDC_ADMIN_PW
})

describe('TestObject website', function() {
    it('TestObject homepage loads', function() {
        browser.url('https://app.testobject.com')
        browser.getUrl()
        browser.waitForVisible('#loginScreen', 12000)
        let title = browser.getTitle()
        if (assert.equal(title, 'Sign In | Sauce Labs')) {
            rdcAccount.updateTest(browser.session().sessionId, {"passed":false}, function(err, resp){})
        } else {
            rdcAccount.updateTest(browser.session().sessionId, {"passed":true}, function(err, resp){})
        }
    })

    it('Can get device info', function() {
        console.log("Getting the Session Info")
        let device = browser.session()
        console.log("Returned capabilities: ", device)
        console.log("\nDevice: ", device.value.device)

        console.log("Avaiilable Browser contexts: ", browser.contexts())
        browser.context(["NATIVE_APP"])
        let nativeDevice = browser.session()
        console.log("browser session in NATIVE_APP context: ", nativeDevice)
    })

    /*it('Can get the device logs', function() {
        let logs = browser.log("driver") // syslog is not recognized by android but 'driver' is.
        console.log("Logs: ", logs)
        const logTypes = driver.logTypes();
        console.log("Log Types available: ", logTypes)
    })*/
})
