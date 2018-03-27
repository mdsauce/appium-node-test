var config = {
    protocol: 'https',
    host: 'us1.appium.testobject.com',
    port: '443',
    path: '/wd/hub',
    capabilities: [{
        testobject_api_key: '27CFF10C8AAB4B9D9B6898C94FDBA2D4',
        platformName: 'Android',
        /* supply `platformVersion` without `deviceName` to get any available device with that version dynamically */
        // platformVersion: '7', // Optional
        // deviceName: 'Samsung Galaxy S8' // Optional
        testobject_test_name: 'Basic Nodejs Test',
        // testobject_session_creation_timeout: '900000',
        // tunnelIdentifier: 'FakeBusiness'
    }],

    specs: [
        'specs/**/*.js'
    ],

    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 10 * 60000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }
}

exports.config = config
