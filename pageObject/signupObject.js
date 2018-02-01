"use strict";
var Page = require('./page.js')

class Signup extends Page {

    get email()                        { return $("[name='EmailAddress']").getValue(); }
    set email(v)                       {        $("[name='EmailAddress']").setValue(v); }
    get firstName()                    { return $("[name='FirstName']").getValue(); }
    set firstName(v)                   {        $("[name='FirstName']").setValue(v); }
    get lastName()                     { return $("[name='LastName']").getValue(); }
    set lastName(v)                    {        $("[name='LastName']").setValue(v); }
    get phoneNumber()                  { return $("[name='PhoneNumber']").getValue(); }
    set phoneNumber(v)                 {        $("[name='PhoneNumber']").setValue(v); }
    get taxNumber()                    { return $("[name='TaxNumber']").getValue(); }
    set taxNumber(v)                   {        $("[name='TaxNumber']").setValue(v); }
    get password()                     { return $("[name='Password']").getValue(); }
    set password(v)                    {        $("[name='Password']").setValue(v); }
    get confirmPassword()              { return $("[name='ConfirmPassword']").getValue(); }
    set confirmPassword(v)             {        $("[name='ConfirmPassword']").setValue(v); }
    get userError()                    { return $("[ng-show='loginForm.UserName.$error.email && submitted']"); }
    get passError()                    { return $("[ng-show='loginForm.Password.$error.required && submitted']"); }



    //Address details

    get address()                  { return $("[ng-model='user.PrimaryAddress.Address1']").getValue(); }
    set address(v)                 {        $("[ng-model='user.PrimaryAddress.Address1']").setValue(v); }
    get address2()                 { return $("[name='Address2']").getValue(); }
    set address2(v)                {        $("[name='Address2']").setValue(v); }
    get city()                     { return $("[name='city']").getValue(); }
    set city(v)                    {        $("[name='city']").setValue(v); }
    get province()                 { return $("[name='province']").getValue(); }
    set province(v)                {        $("[name='province']").setValue(v); }
    get postcalCode()              { return $("[name='PostalCode']").getValue(); }
    set postcalCode(v)             {        $("[name='PostalCode']").setValue(v); }
    set country(v)                 {        $("[name='country']").selectByVisibleText(v); }
    get country()                  { return $("[name='country']").getText('option:checked'); }


    openSignup() {
        super.open('#/signup');
        browser.waitForEnabled("[name='EmailAddress']");
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

    addressDetails()
    {
      browser.click("[data-target='#addressDetails']");
    }
}
module.exports = new Signup();
