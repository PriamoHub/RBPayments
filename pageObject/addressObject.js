"use strict";
var Page = require('./page.js')

class Adress extends Page {

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

  get search()                     { return $("[ng-model='search.$']").getValue(); }
  set search(v)                    {        $("[ng-model='search.$']").setValue(v); }

    addAddress() {
        browser.click("[ng-click='submit()']");
    }

    addNewAddress() {
      browser.click("[ng-click='addAddress()']");
    }

    deleteAddress()    {
      browser.click("[ng-click='deleteAddress(address)']");
    }
    confirmDel() {
      browser.click("[data-bb-handler='confirm']");
    }
    cancel() {
      browser.click("[data-bb-handler='cancel']");
    }
    editAddress() {
      browser.click("[class='btn default btn-xs margin-right-10 blue-hoki-stripe']");
    }

}
module.exports = new Adress();
