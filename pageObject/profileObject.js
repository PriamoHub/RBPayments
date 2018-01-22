"use strict";
var Page = require('./page.js')

class Profile extends Page {

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
    get confirmPassword()              { return $("[name='confirmPassword']").getValue(); }
    set confirmPassword(v)             {        $("[name='confirmPassword']").setValue(v); }
    get userError()                    { return $("[ng-show='loginForm.UserName.$error.email && submitted']"); }
    get passError()                    { return $("[ng-show='loginForm.Password.$error.required && submitted']"); }

    get currentPassword()              { return $("[name='OldPassword']").getValue(); }
    set currentPassword(v)             {        $("[name='OldPassword']").setValue(v); }




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


    save() {
        browser.click("[type='submit']");
    }

}
module.exports = new Profile();
