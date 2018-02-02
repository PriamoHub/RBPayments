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

    //Business

    get legalName()                    { return $("[name='LegalName']").getValue(); }
    set legalName(v)                   {        $("[name='LegalName']").setValue(v); }
    get operatingName()                { return $("[name='OperatingName']").getValue(); }
    set operatingName(v)               {        $("[name='OperatingName']").setValue(v); }


    //Address details

    get address()                  { return $("[ng-model='user.PrimaryAddress.Address1']").getValue(); }
    set address(v)                 {        $("[ng-model='user.PrimaryAddress.Address1']").setValue(v); }
    get address2()                 { return $("[name='Address2']").getValue(); }
    set address2(v)                {        $("[name='Address2']").setValue(v); }
    get city()                     { return $("[name='City']").getValue(); }
    set city(v)                    {        $("[name='City']").setValue(v); }
    get province()                 { return $("[name='Province']").getValue(); }
    set province(v)                {        $("[name='Province']").setValue(v); }
    get postcalCode()              { return $("[name='PostalCode']").getValue(); }
    set postcalCode(v)             {        $("[name='PostalCode']").setValue(v); }
    set country(v)                 {        $("[name='Country']").selectByVisibleText(v); }
    get country()                  { return $("[name='Country']").getText('option:checked'); }


    //Error Messages Element

    invalidEmail(){
      browser.waitForExist("[ng-show='userForm.EmailAddress.$error.required && submitted']"); }
    invalidName(){
      browser.waitForExist("[ng-show='userForm.FirstName.$error.required && submitted']"); }
    invalidLastName(){
      browser.waitForExist("[ng-show='userForm.LastName.$error.required && submitted']"); }
    invalidPass() {
      browser.waitForExist("[ng-show='userForm.Password.$error.required && submitted']"); }
    invalidPhone(){
      browser.waitForExist("[ng-show='userForm.PhoneNumber.$error.required && submitted']"); }
    invalidTax(){
      browser.waitForExist("[ng-show='userForm.TaxNumber.$error.minlength && submitted']"); }
    invalidConfirmPass(){
      browser.waitForExist("[ng-show='userForm.ConfirmPassword.$error.required && submitted']"); }

      //BusinessRequired

      invalidLegalName(){
        browser.waitForExist("[ng-show='userForm.LegalName.$error.required && submitted']"); }
      invalidLegalName(){
        browser.waitForExist("[ng-show='userForm.OperatingName.$error.required && submitted']"); }

    //Buttons

    openSignup() {
        super.open('#/signup');
        browser.waitForEnabled("[name='EmailAddress']");}

    completeSignUp() {
      browser.waitForEnabled("[type='submit']");
        browser.click("[type='submit']"); }

    cancelSignUp(){
      super.open('login'); }

    bizAccount(){
      browser.click("[value='Business']");
      browser.waitForEnabled("[name='LegalName']");
    }

    addressDetails() {
    browser.click("[data-target='#addressDetails']");
    browser.waitForEnabled("[name='Address2']"); }
}
module.exports = new Signup();
