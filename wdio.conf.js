let mochaTimeout = 100000;

var config = {
    protocol: 'https',
    host: 'us1.appium.testobject.com',
    // host: 'eu1.appium.testobject.com' // Uncomment and use if you need the EU datacenter
    port: '443',
    path: '/wd/hub',

    /* Optional maxInstances value limits the number of child processes spawned.
    * Each capability defined gets a child process so that tests automatically run in parallel
    * Refer to for more info https://github.com/webdriverio/webdriverio/issues/205#issuecomment-183345085
    */
    maxInstances: 20,
    capabilities: [
        /*{
            testobject_api_key: process.env.RDC_SAMPLE_API_KEY,
            platformName: 'Android',
            browserName: 'chrome',
            // supply `platformVersion` without `deviceName` to get any available device with that version dynamically 
            // platformVersion: '7', // Optional
            // deviceName: 'Samsung Galaxy S8' // Optional
            testobject_test_name: 'Basic Nodejs Test',
            // tunnelIdentifier: 'fakeBusiness' // Optional tunnel
            appiumVersion: '1.7.2'
        },
        {
            testobject_api_key: process.env.RDC_SAMPLE_API_KEY,
            platformName: 'iOS',
            browserName: 'chrome',
            testobject_test_name: 'Basic Nodejs Test',
            // tunnelIdentifier: 'fakeBusiness' // Optional tunnel
            appiumVersion: '1.7.2'
        },*/
        {
            testobject_api_key: process.env.RDC_SAMPLE_API_KEY,
            platformName: 'iOS',
            browserName: 'safari',
            browserVersion: 'latest',
            testobject_test_name: 'TestObject.com Render Verification',
            // tunnelIdentifier: 'fakeBusiness' // Optional tunnel
            appiumVersion: '1.7.2'
        },
        {
            testobject_api_key: process.env.RDC_SAMPLE_API_KEY,
            platformName: 'android',
            testobject_test_name: 'TestObject.com Render on Android'
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
