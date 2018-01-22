"use strict";
var Page = require('./page.js')

class Card extends Page {

  get cardNumber()                        { return $("[name='CardNumber']").getValue(); }
  set cardNumber(v)                       {        $("[name='CardNumber']").setValue(v); }
  get expiryDate()                    { return $("[name='ExpiryDate']").getValue(); }
  set expiryDate(v)                   {        $("[name='ExpiryDate']").setValue(v); }
  get nameOnCard()                     { return $("[name='NameOnCard']").getValue(); }
  set nameOnCard(v)                    {        $("[name='NameOnCard']").setValue(v); }
  get description()                     { return $("[name='Description']").getValue(); }
  set description(v)                    {        $("[name='Description']").setValue(v); }
  get search()                     { return $("[ng-model='search.$']").getValue(); }
  set search(v)                    {        $("[ng-model='search.$']").setValue(v); }

//Address

get address()                  { return $("[name='BillingAddress_Address1']").getValue(); }
set address(v)                 {        $("[name='BillingAddress_Address1']").setValue(v); }
get address2()                 { return $("[name='BillingAddress_Address2']").getValue(); }
set address2(v)                {        $("[name='BillingAddress_Address2']").setValue(v); }
get city()                     { return $("[name='BillingAddress_City']").getValue(); }
set city(v)                    {        $("[name='BillingAddress_City']").setValue(v); }
get province()                 { return $("[name='BillingAddress_Province']").getValue(); }
set province(v)                {        $("[name='BillingAddress_Province']").setValue(v); }
get postcalCode()              { return $("[name='BillingAddress_PostalCode']").getValue(); }
set postcalCode(v)             {        $("[name='BillingAddress_PostalCode']").setValue(v); }
set country(v)                 {        $("[name='BillingAddress_Country']").selectByVisibleText(v); }
get country()                  { return $("[name='BillingAddress_Country']").getText('option:checked'); }

set existingAddress(v)                 {        $('[ng-show="addressOption \=\=\= \'existing\'"] .select2-chosen').selectByVisibleText(v); }
get existingAddress()                  { return $('[ng-show="addressOption \=\=\= \'existing\'"] .select2-chosen').getText('option:checked'); }

  save() {
      browser.click("[ng-click='submit()']");
  }

  existingAddress()
  {
    browser.click("[value='existing']");
  }
  newAddress() {
    browser.click("[value='new']");
  }

  deleteCard()
  {
    browser.click("[ng-click='deleteCard(card)']");
  }
  confirmDel() {
    browser.click("[data-bb-handler='confirm']");
  }
  cancel() {
    browser.click("[data-bb-handler='cancel']");
  }
  editCard() {
    browser.click("[class='btn default btn-xs margin-right-10 blue-hoki-stripe']");
  }

}
module.exports = new Card();
