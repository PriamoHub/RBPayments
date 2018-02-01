"use strict";
var Page = require('./page.js')

class Login extends Page {

    get username()              { return $("[name='UserName']").getValue(); }
    set username(v)             {        $("[name='UserName']").setValue(v); }
    get password()              { return $("[name='Password']").getValue(); }
    set password(v)             {        $("[name='Password']").setValue(v); }
    get greetings()             { return browser.element("#greetings");   }

    open() {
        super.open('#/login');
        browser.waitForExist("[name='loginForm']");
    }
    login() {
        browser.click("[type='submit']");
    }
    forgotPass() {
      browser.click("#forget-password");
    }
    badUser(){
      browser.waitForExist("[ng-show='loginForm.UserName.$error.required && submitted']")
    }
    badPass(){
      browser.waitForExist("[ng-show='loginForm.Password.$error.required && submitted']")
    }
    waitForLogin(){
      browser.waitForEnabled("[name='UserName']");
    }
}
module.exports = new Login();
