'use strict';
const requestFunction = require('./index');
const test = require('tap').test;

test('http protocol returns correct request', (assert => {
  assert.plan(1);
  
  var request = requestFunction('http://localhost');
  assert.equal(request, require('http').request);

}));

test('https protocol returns correct request', (assert => {
  assert.plan(1);
  
  var request = requestFunction('https://localhost');
  assert.equal(request, require('https').request);

}));

test('unknown protocol throws correct error', (assert) => {
  assert.plan(2);
  
  const requestFunction = require('./index');

  try{
    requestFunction('telnet://localhost');
  }
  catch(e){
    assert.equal(e.type, 'request-function/unknown-protocol');
    assert.equal(e.message, "Unknown protocol 'telnet:'");
  }
});