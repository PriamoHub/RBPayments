"use strict";
var Page = require('./page.js')

class Signup extends Page {


  // Menu

dashboard(){
  browser.click("[alt='logo']")
}
customer(){
  browser.click("[href='#/customers/list']");
  browser.waitForEnabled("[ng-model='searchTerm']");
}
subscription(){
  browser.click("[href='#/subscriptions/list/received/all']");
}
leases(){
  browser.click("[href='#/leases/list/received/all']");
}
invoice(){
  browser.click("[href='#/invoices/list/received/all']");
}
transfers(){
  browser.click("[href='#/transfers/list/received/all']");
}
imports(){
  browser.click("[href='#/imports/list']");
}

hoverProfile(){
  browser.moveToObject("[alt='']");
}

userProfile() {
  browser.click("[href='#/profile']");
}

myAccount() {
  browser.click("[href='#/accounts/list']");
}

myCard(){
  browser.click("[href='#/cards/list']");
}

logOut(){
  browser.click("[ng-click='logout()']");
}

}
module.exports = new Signup();
