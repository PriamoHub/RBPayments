var expect = require('chai').expect;
var Customer = require('../pageObject/customerObject.js');
var Login = require('../pageObject/loginObject.js');
var Dashboard = require ('../pageObject/dashboardObject.js');
var webdriverio = require('webdriverio');


describe('RBPayments - Edit Customer Automated Testing', function () {

        it('Customer - Login To App', function () {
          Login.open();
          Login.waitForLogin();
          Login.username = "priamo.ramirez@gmail.com";
          Login.password = "B36i18e%";
          Login.login();
          Login.successLogin();
        });

  /*      it('Edit Customer - Search Customer', function () {
          Dashboard.customer();
          Customer.editCustomer("Priamo Ramirez");
          Customer.firstName = "Test";
        });
        */

});
