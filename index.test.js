'use strict';
const getRequestFunction = require('./index')
const test = require('tap').test;

test('http protocol returns correct request', (assert => {
  assert.plan(1);
  
  var requestFunction = getRequestFunction('http://localhost');
  assert.equal(requestFunction, require('http').request);

}));

test('https protocol returns correct request', (assert => {
  assert.plan(1);
  
  var requestFunction = getRequestFunction('https://localhost');
  assert.equal(requestFunction, require('https').request);

}));

test('unknown protocol throws correct error', (assert) => {
  assert.plan(2);
  
  const getRequestFunction = require('./index')

  try{
    getRequestFunction('telnet://localhost');
  }
  catch(e){
    assert.equal(e.type, 'request-function/unknown-protocol');
    assert.equal(e.message, "Unknown protocol 'telnet:'");
  }
});

test('foo', (assert) => {
  throw new Error("aaa");
  assert.ok();
});
