var expect = require('chai').expect;
var Signup = require('../pageObject/signupObject.js');



describe('RBPAyments - Bussiness Signup Automated Testing', function () {

        it('Sign Up with Valid Details', function () {
          Signup.openSignup();
          Signup.bizAccount();
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.addressDetails();
          Signup.address = "2424 Garden of the Gods";
          browser.scroll("[name='PostalCode']");
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
        });

    });
