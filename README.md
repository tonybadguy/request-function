# request-function

[![Build Status](https://travis-ci.org/tonybadguy/request-function.svg?branch=master)](https://travis-ci.org/tonybadguy/request-function) [![codecov](https://codecov.io/gh/tonybadguy/request-function/branch/master/graph/badge.svg)](https://codecov.io/gh/tonybadguy/request-function) [![Code Climate](https://codeclimate.com/github/tonybadguy/request-function/badges/gpa.svg)](https://codeclimate.com/github/tonybadguy/request-function) [![Dependency Status](https://david-dm.org/tonybadguy/request-function.svg)](https://david-dm.org/tonybadguy/request-function) [![devDependency Status](https://david-dm.org/tonybadguy/request-function/dev-status.svg)](https://david-dm.org/tonybadguy/request-function#info=devDependencies) [![Known Vulnerabilities](https://snyk.io/test/github/tonybadguy/request-function/badge.svg)](https://snyk.io/test/github/tonybadguy/request-function)

This Node.js module contains a simple helper function to get the corresponding http/https request function based on a url.

```
var httpRequest = requestFunction('http://www.google.com');
var httpsRequest = requestFunction('https://www.google.com');
```

The Node.js http / https request functions are described here:
* https://nodejs.org/api/http.html#http_http_request_options_callback
* https://nodejs.org/api/https.html#https_https_request_options_callback
