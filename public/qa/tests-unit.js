var fortune = require('../Lib/fortune.js');
var expect = require('chai').expect;

suite('Fortune Cookie tests',function(){
    test('getFortune() should return a fortune', function(){
        expect(typeof fortune.getFortune() === 'string');
    });
})