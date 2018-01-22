"use strict";
var Page = require('./page.js')

class Account extends Page {

  get accountNumber()                        { return $("[name='Number']").getValue(); }
  set accountNumber(v)                       {        $("[name='Number']").setValue(v); }
  get transitNumber()                    { return $("[name='TransitNumber']").getValue(); }
  set transitNumber(v)                   {        $("[name='TransitNumber']").setValue(v); }
  get institutionNumber()                     { return $("[name='InstitutionNumber']").getValue(); }
  set institutionNumber(v)                    {        $("[name='InstitutionNumber']").setValue(v); }
  get description()                     { return $("[name='Description']").getValue(); }
  set description(v)                    {        $("[name='Description']").setValue(v); }
  get search()                     { return $("[ng-model='search.$']").getValue(); }
  set search(v)                    {        $("[ng-model='search.$']").setValue(v); }


  save() {
      browser.click("[ng-click='submit()']");
  }

  preAuthorize()
  {
    browser.click("[name='IsPadAccount']");
  }

  deleteAccount()
  {
    browser.click("[ng-click='deleteAccount(account)']");
  }
  confirmDel(){
    browser.click("[data-bb-handler='confirm']");
  }
  cancel(){
    browser.click("[data-bb-handler='cancel']");
  }
  editAcc(){
    browser.click("[class='btn default btn-xs margin-right-10 blue-hoki-stripe']");
  }

}
module.exports = new Account();
