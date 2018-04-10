var protractorJasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    chromeDriver: "../config/chromedriver.exe",
    framework: 'jasmine2',
    specs: ['../functional/*.js'],
    directConnect: true,
    browserName: 'chrome',
    baseUrl: 'http://todomvc.com/examples/vue/',
    params: {
        username: '',
        password: ''
    },
    capabilities: {
        browserName: 'chrome',

    },
    allScriptsTimeout: 500000,
    baseUrl: 'http://todomvc.com/examples/vue/',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {

        var screenshotReporter = new protractorJasmine2HtmlReporter({
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
            fixedScreenshotName: true
        });
        jasmine.getEnv().addReporter(screenshotReporter);
    }
};
