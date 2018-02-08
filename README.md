# RBPayments Automation

## Terms

* Page object - a semantic model and controller of a browser "page" (or part of a page representing the current "view"
  as seen by the user).

## Setting up local environment

### Prerequisites

To work with GIT, you will need to have GIT installed on your machine, which can be downloaded from:

https://git-scm.com/downloads

In order to run the tests you need to have NodeJS installed (preferrably version 6.10.3 or higher). That can be downloaded from:

https://nodejs.org/en/download/

After installing GIT, you will have to clone the repository to your desired folder by executing:

On Windows:
 - Open Run (Windows + R)
 - Execute command CMD
 - CD /Documents (CD is a command used to open folder)

 on Mac:
 - Command + Space Bar (To open spotlight)
 - Type Terminal and Open it
 - CD to navigate to the desired Folder
 - CD Documents

 After being in the desired folder on the terminal, you will execute the following command to clone the repository to your pc:

```bash
 git clone https://github.com/PriamoHub/RBPayments.git
```
This will clone the entire repository to your PC, after the process is done, execute the following command to open the folder:

```bash
  cd Mediseen
```

Now that you are on the directory of the repository, you will have to install the automation modules, you can simply do this by running:

```bash
 $ npm install
```

This will install dependencies needed for running tests:
  * mocha - the test framework, https://mochajs.org;
  * webdriverIO - WebDriver protocol bindings for NodeJS, http://webdriver.io;
  * wdio-mnocha-framework - glue for using WebdriverIO with Mocha;
  * wdio-spec-reporter - for reporting test results in the Spec format;

### Directory layout

* pageObjects - page object model code
* node_modules - local NPM dependencies (this directory is created when running `npm update`, see above)
* errorShots - screenshots of the browser. automatically taken
* test - Folders containing the different tasks

Files in the root directory:
* package.json - Node module declaration (most importantly, npm dependencies are declared here).
* wdio.conf.js - WebdriverIO configuration script.

## Running tests

You can run test by using the webdriverIO test runner directly (`./node_modules/webdriverio/bin/wdio`) or via
the provided launcher file (`npm test`, recommended).

Refer to the WebdriverIO documentation for command line parameters (selecting tests to run, etc)
