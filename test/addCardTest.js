var expect = require('chai').expect;
var Login = require('../pageObject/loginObject.js');
var Dashboard = require ('../pageObject/dashboardObject.js');
var Card = require ('../pageObject/cardObject.js');
var webdriverio = require('webdriverio');


describe('RBPayments - Add Card to Profile - Automated Testing', function () {

  it('Customer - Login To App', function () {
    Login.open();
    Login.waitForLogin();
    Login.username = "priamo.ramirez@gmail.com";
    Login.password = "B36i18e%";
    Login.login();
    Login.successLogin();
    });

/*  it('Add Card to Profile', function () {
    Dashboard.myCard();
    Card.addCard();
    Card.cardNumber = "4242424242424242";
    Card.expiryDate = "March-2018";
    Card.nameOnCard = "John Doe";
    Card.description = "Test Card";
    Card.newAddress();
    Card.address = "Test Address 123";
    Card.city = "Toronto";
    Card.province = "Ontario";
    Card.postcalCode = "M5V2T6";
    Card.save();
    });
    */
});
