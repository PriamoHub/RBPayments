var expect = require('chai').expect;
var Signup = require('../pageObject/signupObject.js');



describe('RBPAyments - Signup Automated Testing', function () {

        it('Verify that is not able to login with invalid password and invalid username', function () {
          Signup.open();
          browser.waitForEnabled("[name='UserName']");
          Login.username = "Test";
          Login.password = "Test";
          Login.login();

        });

    });
