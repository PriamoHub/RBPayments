var expect = require('chai').expect;
var Signup = require('../pageObject/signupObject.js');



describe('RBPayments - Bussiness Account Signup Automated Testing', function () {

        it('Sign Up without Email', function () {
          Signup.openSignup();
          Signup.bizAccount();
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.addressDetails();
          browser.scroll("[name='PostalCode']");
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidEmail();
        });

        it('Sign Up without Name', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidName();
        });

        it('Sign Up without Last Name', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidLastName();
        });

        it('Sign Up without Legal Name', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidLegalName();
        });

        it('Sign Up without Phone Number', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe"
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidPhone();
        });

        it('Sign Up without Password', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe"
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"

          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidPass();
        });

        it('Sign Up without Confirm Password', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe"
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";

          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidConfirmPass();
        });

        it('Sign Up without Address', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe"
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidAdress();
        });

        it('Sign Up without City', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidCity();
        });

        it('Sign Up without Province', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidProvince();
        });

        it('Sign Up without Postal Code', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.country = "Canada";
          Signup.completeSignUp();
          Signup.invalidPostalCode();
        });

        it('Sign Up without Country', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.completeSignUp();
          Signup.invalidCountry();
        });

        it('Sign Up with Valid Details', function () {
          Signup.email = "JohnDoeTL@yopmail.com";
          Signup.firstName = "John";
          Signup.lastName = "Doe";
          Signup.legalName = "John Doe";
          Signup.operatingName = "John The Rocket Doe";
          Signup.phoneNumber = "7178888888";
          Signup.taxNumber = "123123123123123"
          Signup.password = "JohnDoe123";
          Signup.confirmPassword = "JohnDoe123";
          Signup.address = "2424 Garden of the Gods";
          Signup.city = "Toronto";
          Signup.province = "Ontario";
          Signup.postcalCode = "M5V2T6";
          Signup.country = "Canada";
          Signup.completeSignUp();
        });
    });
