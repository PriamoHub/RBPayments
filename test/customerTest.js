var expect = require('chai').expect;
var Customer = require('../pageObject/customerObject.js');
var Login = require('../pageObject/loginObject.js')
var Dashboard = require ('../pageObject/dashboardObject.js')



describe('RBPayments - CustomerA utomated Testing', function () {

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

        it('Sign Up with Empty Emails', function () {
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123"
          Customer.password = "JohnDoe123";
          Customer.confirmPassword = "JohnDoe123";
          Customer.completeCustomer();
          Customer.invalidEmail();
        });

        it('Sign Up without Name', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123"
          Customer.password = "JohnDoe123";
          Customer.confirmPassword = "JohnDoe123";
          Customer.completeCustomer();
          Customer.invalidName();
        });

        it('Sign Up without Last Name', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123"
          Customer.password = "JohnDoe123";
          Customer.confirmPassword = "JohnDoe123";
          Customer.completeCustomer();
          Customer.invalidLastName();
        });

        it('Sign Up without Phone Number', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.taxNumber = "123123123123123"
          Customer.password = "JohnDoe123";
          Customer.confirmPassword = "JohnDoe123";
          Customer.completeCustomer();
          Customer.invalidPhone();
        });


        it('Sign Up with invalid tax', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123"
          Customer.completeCustomer();
          Customer.invalidTax();
        });

        it('Sign Up with Valid Details', function () {
          Customer.email = "JohnDoeTL@yopmail.com";
          Customer.firstName = "John";
          Customer.lastName = "Doe";
          Customer.phoneNumber = "7178888888";
          Customer.taxNumber = "123123123123123"
          Customer.completeCustomer();
        });

});
