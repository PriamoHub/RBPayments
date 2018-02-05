"use strict";
var Page = require('./page.js')

class Customer extends Page {


      get firstName()                    { return $("[name='FirstName']").getValue(); }
      set firstName(v)                   {        $("[name='FirstName']").setValue(v); }
      get lastName()                     { return $("[name='LastName']").getValue(); }
      set lastName(v)                    {        $("[name='LastName']").setValue(v); }
      get phoneNumber()                  { return $("[name='PhoneNumber']").getValue(); }
      set phoneNumber(v)                 {        $("[name='PhoneNumber']").setValue(v); }
      get email()                        { return $("[name='EmailAddress']").getValue(); }
      set email(v)                       {        $("[name='EmailAddress']").setValue(v); }
      get taxNumber()                    { return $("[name='TaxNumber']").getValue(); }
      set taxNumber(v)                   {        $("[name='TaxNumber']").setValue(v); }
      get operatingName()                { return $("[name='OperatingName']").getValue(); }
      set operatingName(v)               {        $("[name='OperatingName']").setValue(v); }
      get legalName()                    { return $("[name='LegalName']").getValue(); }
      set legalName(v)                   {        $("[name='LegalName']").setValue(v); }

      //Address details

      get address()                  { return $("[name='Address1']").getValue(); }
      set address(v)                 {        $("[name='Address1']").setValue(v); }
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

      setAddress() {
        browser.click("[ng-model='setAddress']");      }

      billAutomatic() {
        browser.click("body > div.page-container > div.page-content-wrapper > div > div > div.portlet.box.blue-hoki.ng-scope > div.portlet-body.form > form > div.form-body > div:nth-child(3) > div > label:nth-child(2) > div > span > input");      }

      selectBusiness() {
        browser.click("[value='Personal']");      }

      addCustomer()  {
        browser.waitForEnabled("[ng-click='submit()']");
        browser.click("[ng-click='submit()']");     }

      bizAccount() {
        browser.click("[value='Business']");
        browser.waitForVisible("[name='LegalName']"); }

      addressDetails() {
        browser.click("[data-target='#addressDetails']");      }

        invalidEmail(){
          browser.waitForExist("[ng-show='(userForm.EmailAddress.$error.Email || userForm.EmailAddress.$error.pattern) && submitted']"); }
        invalidName(){
          browser.waitForExist("[ng-show='userForm.FirstName.$error.required && submitted']"); }
        invalidLastName(){
          browser.waitForExist("[ng-show='userForm.LastName.$error.required && submitted']"); }
        invalidPhone(){
          browser.waitForExist("[ng-show='userForm.PhoneNumber.$error.required && submitted']"); }
        invalidTax(){
          browser.waitForExist("[ng-show='userForm.TaxNumber.$error.minlength && submitted']"); }
          //BusinessRequired
          invalidLegalName(){
            browser.waitForExist("[ng-show='userForm.LegalName.$error.required && submitted']"); }
          invalidOperatingName(){
            browser.waitForExist("[ng-show='userForm.OperatingName.$error.required && submitted']"); }

createCustomer() {
  browser.waitForExist("[href='#/customers/create']");
  browser.click("[href='#/customers/create']");
  browser.waitForExist("[name='FirstName']"); }

}
module.exports = new Customer();
