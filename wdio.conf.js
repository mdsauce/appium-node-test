let mochaTimeout = 100000;

var config = {
    protocol: 'https',
    host: 'us1.appium.testobject.com',
    // host: 'eu1.appium.testobject.com'
    port: '443',
    path: '/wd/hub',

    // For use with wdio-sauce-service https://github.com/webdriverio/wdio-sauce-service
    // user: process.env.SAUCE_USERNAME,
    // key: process.env.SAUCE_ACCESS_KEY,
    // sauceConnect: true, // Optional use of Sauce Connect Proxy http://webdriver.io/guide/services/sauce.html#sauceConnect 

    maxInstances: 20,
    capabilities: [{
        testobject_api_key: 'D377483757DE4C7FA46B0DBDEF9540AA',
        platformName: 'Android',
        browserName: 'chrome',
        /* supply `platformVersion` without `deviceName` to get any available device with that version dynamically */
        // platformVersion: '7', // Optional
        // deviceName: 'Samsung Galaxy S8' // Optional
        testobject_test_name: 'Basic Nodejs Test',
        // tunnelIdentifier: 'fakeBusiness' // Optional tunnel
    },
    {
        testobject_api_key: 'D377483757DE4C7FA46B0DBDEF9540AA',
        platformName: 'iOS',
        browserName: 'chrome',
        testobject_test_name: 'Basic Nodejs Test',
        // tunnelIdentifier: 'fakeBusiness' // Optional tunnel
    }
    ],

    specs: [
        'specs/**/*.js'
    ],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    reporters: ['spec'], // Optional with wdio-spec-reporter
    // waitforTimeout: 10000,
    connectionRetryTimeout: 10 * 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: mochaTimeout
    }
}

exports.config = config
