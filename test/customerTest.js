var expect = require('chai').expect;
var Customer = require('../pageObject/customerObject.js');
var Login = require('../pageObject/loginObject.js')
var Dashboard = require ('../pageObject/dashboardObject.js')



describe('RBPayments - Add Customer Automated Testing', function () {

        it('Customer - Login To App', function () {
          Login.open();
          Login.waitForLogin();
          Login.username = "priamo.ramirez@gmail.com";
          Login.password = "B36i18e%";
          Login.login();
          Login.successLogin();
          });

        it('Customer - Create Customer', function () {
          Dashboard.customer();
          Customer.createCustomer();
        });

        it('Sign Up with invalid Emails', function () {
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123";
          Customer.email = "."
          Customer.addCustomer();
          Customer.invalidEmail();
        });

        it('Sign Up without Name', function () {
          Customer.firstName = "";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123";
          Customer.email = "test@yopmail.com";
          Customer.addCustomer();
          Customer.invalidName();
        });

        it('Sign Up without Last Name', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123";
          Customer.email = "test@yopmail.com";
          Customer.addCustomer();
          Customer.invalidLastName();
        });

        it('Sign Up without Phone Number', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "";
          Customer.taxNumber = "123123123123123";
          Customer.email = "test@yopmail.com";
          Customer.addCustomer();
          Customer.invalidPhone();
        });

        it('Sign Up with invalid tax', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123"
          Customer.addCustomer();
          Customer.invalidTax();
        });

        it('Sign Up with Valid Details', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123"
          Customer.addCustomer();
        });

        it('Sign Up with Valid Details with Do not bill this user automatically', function () {
          Customer.createCustomer();
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123"
          Customer.billAutomatic();
          Customer.addCustomer();
        });

});


describe('RBPayments - Add Business Customer Automated Testing', function () {

        it('Customer - Login To App', function () {
          Login.open();
          Login.waitForLogin();
          Login.username = "priamo.ramirez@gmail.com";
          Login.password = "B36i18e%";
          Login.login();
          Login.successLogin();
          });

        it('Customer - Create Customer', function () {
          Dashboard.customer();
          Customer.createCustomer();
        });

        it('Sign Up with invalid Emails', function () {
          Customer.bizAccount();
          Customer.operatingName = "John Doe";
          Customer.legalName = "John Doe";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123";
          Customer.email = ".";
          Customer.addCustomer();
          Customer.invalidEmail();
        });

        it('Sign Up without Name', function () {
          Customer.legalName = "John Doe";
          Customer.operatingName = "John Doe";
          Customer.firstName = "";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123";
          Customer.email = "test@yopmail.com";

          Customer.addCustomer();
          Customer.invalidName();
        });

        it('Sign Up without Last Name', function () {
          Customer.legalName = "John Doe";
          Customer.operatingName = "John Doe";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123";
          Customer.email = "test@yopmail.com";
          Customer.addCustomer();
          Customer.invalidLastName();
        });

        it('Sign Up without Phone Number', function () {
          Customer.legalName = "John Doe";
          Customer.operatingName = "John Doe";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "";
          Customer.taxNumber = "123123123123123";
          Customer.email = "test@yopmail.com";
          Customer.addCustomer();
          Customer.invalidPhone();
        });

        it('Sign Up with invalid tax', function () {
          Customer.legalName = "John Doe";
          Customer.operatingName = "John Doe";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123"
          Customer.addCustomer();
          Customer.invalidTax();
        });

        it('Sign Up with invalid Operating Name', function () {
          Customer.legalName = "John Doe";
          Customer.operatingName = "";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123";
          Customer.addCustomer();
          Customer.invalidOperatingName();
        });

        it('Sign Up with invalid Legal Name', function () {
          Customer.legalName = "";
          Customer.operatingName = "John Doe";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123";
          Customer.addCustomer();
          Customer.invalidLegalName();
        });


        it('Sign Up with Valid Details', function () {
          Customer.legalName = "John Doe";
          Customer.operatingName = "John Doe";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123"
          Customer.addCustomer();
        });

        it('Sign Up with Valid Details with Do not bill this user automatically', function () {
          Customer.createCustomer();
          Customer.bizAccount();
          Customer.legalName = "John Doe";
          Customer.operatingName = "John Doe";
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123"
          Customer.billAutomatic();
          Customer.addCustomer();
        });

});
