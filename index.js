'use strict';
const http = require('http');
const https = require('https');
const url = require('url');
const typedError = require('error/typed');

let unknownProtocolError = typedError({
  type: 'request-function/unknown-protocol',
  message: "Unknown protocol '{protocol}'"
});

module.exports = (input) => {
  let parsedUrl = url.parse(input);

  switch(parsedUrl.protocol){
    case 'http:':
      return http.request;
    case 'https:':
      return https.request;
    default:
      throw unknownProtocolError({
        protocol: parsedUrl.protocol
      });
  }
};