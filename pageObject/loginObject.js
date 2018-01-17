"use strict";
var Page = require('./page.js')

class Login extends Page {

    get username()              { return $("[name='UserName']").getValue(); }
    set username(v)             {        $("[name='UserName']").setValue(v); }
    get password()              { return $("[name='Password']").getValue(); }
    set password(v)             {        $("[name='Password']").setValue(v); }
    get userError()           { return browser.element("[ng-show='loginForm.UserName.$error.email && submitted']"); }
    get passError()           { return browser.element("[ng-show='loginForm.Password.$error.required && submitted']"); }
    get greetings()             { return browser.element("#greetings");   }

    open() {
        super.open('login');
        browser.waitForVisible('#login-form');
    }
    log() {
        browser.submitForm('#login-form');
    }
}
module.exports = new Login();
