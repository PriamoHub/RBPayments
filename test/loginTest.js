var expect = require('chai').expect;
var Login = require('../pageObject/loginObject.js');



describe('RBPAyments - Login Automated Testing', function () {

        it('Login with No Username and Password', function () {
          Login.open();
          Login.waitForLogin();
          Login.username = "";
          Login.password = "B36i18e%";
          Login.login();
          Login.badUser();
        });

        it('Login with Username and No Password', function () {
          Login.open();
          Login.waitForLogin();
          Login.username = "priamo.ramirez@gmail.com";
          Login.password = "";
          Login.login();
          Login.badPass();
        });
        it('Login with No Username and No Password', function () {
          Login.open();
          Login.waitForLogin();
          Login.username = "";
          Login.password = "";
          Login.badUser();
          Login.badPass();
        });

        it('Forgot Password', function () {
          Login.forgotPass();
          Login.login();
          });

        it('Login with Correct Username and Password', function () {
          Login.open();
          Login.waitForLogin();
          Login.username = "priamo.ramirez@gmail.com";
          Login.password = "B36i18e%";
          Login.login();
          Login.successLogin();
          });

    });
