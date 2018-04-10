var home_page = require('../pageObjects/Home_Page.js');;

beforeEach(function () {
    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);
    browser.driver.manage().window().maximize();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;

});
afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;

});
describe('Add Event functionality', function () {

    it('should add an event', function () {

        home_page.addJobsFun('Create a defect');
        expect(home_page.lisOfJobs(0)).toBe('Create a defect');

    });
});
describe('"mark the Event as completed" functionality', function () {

    it('should mark the event as completed', function () {

        home_page.addJobsFun('Assign the defect');
        home_page.MarkTheJobs(1);
        home_page.completedtoDoJobs();
        expect(home_page.lisOfJobs(0)).toBe('Assign the defect');
        expect(home_page.countOfJobs()).toBe(1);
    });
});
describe('"All" events button functionality', function () {
    it('should give all the events', function () {
        home_page.alltoDoJobs();
        home_page.addJobsFun('Defect is  Fixed');
        expect(home_page.countOfJobs()).toBe(3);
        browser.sleep(5000);

    });

});
describe('"Active" events button functionality', function () {
    it('should give only active events', function () {

        home_page.addJobsFun('ReAssign the defect');
        home_page.activetoDoJobs();
        expect(home_page.countOfJobs()).toBe(3);
        browser.sleep(5000);
    });
});
describe('"Completed" events button functionality', function () {
    it('should give only Completed   events', function () {
        home_page.addJobsFun('Defect is Tested');
        home_page.MarkTheJobs(3);
        home_page.completedtoDoJobs();
        expect(home_page.countOfJobs()).toBe(2);
        browser.sleep(5000);
    });
});
describe('"ClearCompleted" events button functionality', function () {
    it('should remove all completed events', function () {
        home_page.activetoDoJobs();
        home_page.addJobsFun('Close the defect');
        home_page.MarkTheJobs(3);
        home_page.clearCompletedtoDoJobs();
        home_page.alltoDoJobs();
        expect(home_page.countOfJobs()).toBe(3);
        browser.sleep(5000);

    });
});
describe('"itemsleft" lable functionality', function () {
    it('should display count of active events in the lable', function () {
        home_page.addJobsFun('Create another defect');
        expect(home_page.countOfJobsLable()).toEqual(['4']);

    });
});
describe('"Edit Event"functionality of a completed events', function () {
    it('should edit the completed events', function () {
        home_page.addJobsFun('Assign a defect');
        home_page.MarkTheJobs(4);
        home_page.completedtoDoJobs();
        home_page.editToDoJobs(0, ' to developer');
        expect(home_page.lisOfJobs(0)).toBe('Assign a defect to developer');
    });
});
describe('"Edit Event"functionality of an active event', function () {
    it('should edit the active event', function () {
        home_page.activetoDoJobs();
        home_page.addJobsFun('Assign a defect');
        home_page.editToDoJobs(4, ' to developer');
        expect(home_page.lisOfJobs(4)).toBe('Assign a defect to developer');

    });
});
describe('"(^) mark/unmark all events functonality" ', function () {
    it('should mark all events as completed/Active', function () {

        home_page.addJobsFun('Close the defect');
        home_page.alltoDoJobs();
        home_page.updateAllJobs();
        browser.sleep(5000);
        expect(home_page.countOfJobsLable()).toEqual(['0']);
        home_page.updateAllJobs();
        expect(home_page.countOfJobsLable()).toEqual(['7']);
    });
});

describe('"input field help text"value', function () {
    it('should have help text as "What needs to be done?"', function () {
        expect(home_page.helpText()).toEqual('What needs to be done?');
    });
});
describe('Add an Event  with empty string', function () {

    it('should  not add an empty event', function () {
        home_page.alltoDoJobs();
        home_page.addJobsFun('   ');
        expect(home_page.countOfJobs()).toBe(7);
    });
});
describe('Add an Event only with special characters', function () {

    it('should  not add an event with special characters', function () {
        home_page.alltoDoJobs();
        home_page.addJobsFun('!@#$%^&*');
        expect(home_page.countOfJobs()).toBe(7);
        expect(home_page.lisOfJobs(7)).not.toEqual('!@#$%^&*');
    });
});
describe('Add an Event with more than 100 characters', function () {

    it('should  not add an event with special characters', function () {
        home_page.alltoDoJobs();
        home_page.addJobsFun('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        expect(home_page.countOfJobs()).toBe(8);
        expect(home_page.lisOfJobs(8)).not.toEqual('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    });
});
