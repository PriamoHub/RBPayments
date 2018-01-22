"use strict";
var Page = require('./page.js')

class Customer extends Page {


      get firstName()                    { return $("[name='FirstName']").getValue(); }
      set firstName(v)                   {        $("[name='FirstName']").setValue(v); }
      get lastName()                     { return $("[name='LastName']").getValue(); }
      set lastName(v)                    {        $("[name='LastName']").setValue(v); }
      get phoneNumber()                  { return $("[name='PhoneNumber']").getValue(); }
      set phoneNumber(v)                 {        $("[name='PhoneNumber']").setValue(v); }
      get taxNumber()                    { return $("[name='TaxNumber']").getValue(); }
      set taxNumber(v)                   {        $("[name='TaxNumber']").setValue(v); }
      get operatingName()                { return $("[name='OperatingName']").getValue(); }
      set operatingName(v)               {        $("[name='OperatingName']").setValue(v); }
      get legalName()                    { return $("[name='legalName']").getValue(); }
      set legalName(v)                   {        $("[name='legalName']").setValue(v); }

      //Address details

      get address()                  { return $("[name='Address1']").getValue(); }
      set address(v)                 {        $("[name='Address1']").setValue(v); }
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

      setAddress() {
        browser.click("[ng-model='setAddress']");
      }

      selectBusiness() {
        browser.click("[value='Personal']");
      }

      addCustomer()  {
        browser.click("[ng-click='submit()']");
      }

      bizAccount() {
        browser.click("[value='Business']");
      }

      addressDetails() {
        browser.click("[data-target='#addressDetails']");
      }


addCustomer() {
browser.click("[href='#/customers/create']");
  }
}
module.exports = new Customer();
