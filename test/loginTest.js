var expect = require('chai').expect;
var Login = require('../pageObject/loginObject.js');



describe('RBPAyments - Login Automated Testing', function () {

        it('Verify that is not able to login with invalid password and invalid username', function () {
          Login.open();
          browser.waitForEnabled("[name='UserName']");
          Login.username = "Test";
          Login.password = "Test";
          Login.login();

        });



    });
