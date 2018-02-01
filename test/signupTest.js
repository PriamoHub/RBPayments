var expect = require('chai').expect;
var Signup = require('../pageObject/signupObject.js');



describe('RBPAyments - Signup Automated Testing', function () {

        it('Sign Up with Empty Emails', function () {
          Signup.openSignup();
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.completeSignUp();
          Signup.invalidEmail();
        });

        it('Sign Up without Name', function () {
          Signup.openSignup();
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.lastName = "Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.completeSignUp();
          Signup.invalidName();
        });

        it('Sign Up without Last Name', function () {
          Signup.openSignup();
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.completeSignUp();
          Signup.invalidLastName();
        });

        it('Sign Up without Phone Number', function () {
          Signup.openSignup();
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.completeSignUp();
          Signup.invalidPhone();
        });

        it('Sign Up without Password', function () {
          Signup.openSignup();
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.confirmPassword = "JohnDoe123";
          Signup.completeSignUp();
          Signup.invalidPass();
        });

        it('Sign Up without Confirm Password', function () {
          Signup.openSignup();
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.completeSignUp();
          Signup.invalidConfirmPass();
        });

        it('Sign Up with invalid tax', function () {
          Signup.openSignup();
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.completeSignUp();
          Signup.invalidTax();
        });

        it('Sign Up with Valid Details', function () {
          Signup.openSignup();
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
