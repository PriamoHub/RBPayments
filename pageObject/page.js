"use strict";
const assert = require('assert');

/**
 * Base class for page objects.
 */
class Page {
    open(path) {
        browser.url('/' + path);
        this.openedUrl = path;
    }

    isOnPage(urlRegexp) {
        const url = browser.getUrl();
        const regexp = urlRegexp || this.openedUrl;
        return url.match(regexp);
    }

    assertIsOnPage(urlRegexp) {
        assert(this.isOnPage(urlRegexp), "Browser did not navigate to " + urlRegexp);
    }
}

module.exports = Page;
