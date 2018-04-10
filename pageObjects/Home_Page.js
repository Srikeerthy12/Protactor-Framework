
var bUtils = require('../utils/browserUtils.js');

var home_page = function () {
    this.addjob = element(by.css('.new-todo'));
    this.changeAllEvents = element(by.css('.toggle-all'));
    this.entityDropDown = element(by.css('ul.filters li a.selected'));
    this.alljobs = element(by.linkText('All'));
    this.activejobs = element(by.linkText('Active'));
    this.compltedjobs = element(by.linkText('Completed'));
    this.clearCompltedjobs = element(by.buttonText('Clear completed'));
    this.actualJobcount = element.all(by.css('.todo-list li'));
    this.todoCheckBox = element.all(by.css('.toggle'));
    this.todoLable = element.all(by.css('.view lable'));
    this.todoRemove = element.all(by.css('.view button'));
    this.todoCountLable = element.all(by.css('.todo-count'));
    this.todoCountValues = element.all(by.css('.todo-count strong'));


};
home_page.prototype = Object.create({}, {
    addJobsFun: {
        value: function (input) {
            bUtils.clickAndType(this.addjob, input);


        }
    },

    alltoDoJobs: {
        value: function () {
            bUtils.click(this.alljobs);
        }


    },
    activetoDoJobs: {
        value: function () {
            bUtils.click(this.activejobs);
        }


    },
    completedtoDoJobs: {
        value: function () {
            bUtils.click(this.compltedjobs);
        }


    },
    clearCompletedtoDoJobs: {
        value: function () {
            bUtils.click(this.clearCompltedjobs);
        }


    },
    editToDoJobs: {
        value: function (indexf, text) {
            return bUtils.editTextofListValues(this.actualJobcount, indexf, text);
            browser.sleep(5000);

        }


    },
    countOfJobs: {
        value: function () {
            return bUtils.getElements(this.actualJobcount);
        }

    },
    removetoDoJobs: {
        value: function () {
            bUtils.click(this.todoRemove);
        }
    },
    updateAllJobs: {
        value: function () {
            bUtils.click(this.changeAllEvents);

        }
    },
    countOfJobsLable: {
        value: function () {
            return bUtils.getTextValue(this.todoCountValues);
        }
    },
    lisOfJobs: {
        value: function (index) {
            return bUtils.getTextofListValues(this.actualJobcount, index);
        }
    },
    MarkTheJobs: {
        value: function (index) {
            return bUtils.clickListValues(this.todoCheckBox, index);
        }
    },



    helpText: {
        value: function () {
            return element(by.css('.new-todo')).getAttribute('placeholder').then(function (element) {
                return element;

            });

        }
    },
});

module.exports = new home_page();