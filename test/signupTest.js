var expect = require('chai').expect;
var Signup = require('../pageObject/signupObject.js');



describe('RBPAyments - Signup Automated Testing', function () {

        it('Sign Up with Valid Details', function () {
          Signup.openSignup();
          Signup.password = "Doe";
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.completeSignUp();
        });

    });
