"use strict";
var Page = require('./page.js')

class Signup extends Page {

    get email()              { return $("[name='EmailAddress']").getValue(); }
    set email(v)             {        $("[name='EmailAddress']").setValue(v); }
    get firstName()              { return $("[name='FirstName']").getValue(); }
    set firstName(v)             {        $("[name='FirstName']").setValue(v); }
    get lastName()              { return $("[name='LastName']").getValue(); }
    set lastName(v)             {        $("[name='LastName']").setValue(v); }
    get phoneNumber()              { return $("[name='PhoneNumber']").getValue(); }
    set phoneNumber(v)             {        $("[name='PhoneNumber']").setValue(v); }
    get taxNumber()              { return $("[name='TaxNumber']").getValue(); }
    set taxNumber(v)             {        $("[name='TaxNumber']").setValue(v); }
    get password()              { return $("[name='Password']").getValue(); }
    set password(v)             {        $("[name='Password']").setValue(v); }
    get confirmPassword()              { return $("[name='confirmPassword']").getValue(); }
    set confirmPassword(v)             {        $("[name='confirmPassword']").setValue(v); }
    get userError()           { return browser.element("[ng-show='loginForm.UserName.$error.email && submitted']"); }
    get passError()           { return browser.element("[ng-show='loginForm.Password.$error.required && submitted']"); }


    openSignup() {
        super.open('signup');
        browser.waitForExist("[name='userForm']");
    }
    completeSignUp() {
        browser.click("[type='submit']");
    }

    cancelSignUp()
    {
      super.open('login');
    }

    bizAccount()
    {
      browser.click("[value='Business']");
    }
}
module.exports = new Signup();
