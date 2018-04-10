
var BrowserUtils = function () {

    var EC = protractor.ExpectedConditions;
    this.clearAndType = function (element, text) {
        element.clear();
        element.sendKeys(text);
    };


    this.clickAndType = function (element, text) {
        element.click();
        element.sendKeys(text);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();

    };

    this.click = function (element) {
        element.click();

    };
    this.getTextValue = function (element) {
        return element.getText();
    };

    this.getTextofListValues = function (element, index1) {
        return element.then(function (items) {
            return items[index1].getText();
        });

    };
    this.editTextofListValues = function (element, index2, text) {
        return element.then(function (items) {
            browser.actions().doubleClick(items[index2]).sendKeys(text).perform();
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
        });

    };

    this.getElements = function (element) {
        return element.then(function (items) {
            return items.length;
        });
    };

    this.clickListValues = function (element, index1) {
        return element.then(function (items) {
            items[index1].click();
        });
    };
    this.waitForElement = function (elementToWait) {
        browser.wait(function () {
            return elementToWait.isPresent();
        }, 5000);
    };

    this.waitForElementToBeClickable = function (elementToClick) {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(elementToClick), 10000).then(function () {
            element.click();
        });
    };


};
module.exports = new BrowserUtils();


