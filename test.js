var assert = require('assert')
var swap = require('./swap')

assert.equal(swap('bob'), 'bob')
assert.equal(swap('{bob}'), '')
assert.equal(swap('{bob}', {bob: 'anne'}), 'anne')
assert.equal(swap('{bob} and {dave}', {bob: 'anne', dave: 'sue'}), 'anne and sue')
assert.equal(swap('{bob}', {bob: {xox: 'hello'}}), '[object Object]')
assert.equal(swap('{bob.xox}', {bob: {xox: 'hello'}}), '{bob.xox}')
assert.equal(swap('{bob}', {bob: [1, 2, 3]}), '1,2,3')
assert.equal(swap('{!bob!}', {bob: 'anne'}), '')
assert.equal(swap('{!{bob} and others!} arrived', {bob: 'anne'}), ' arrived')
assert.equal(swap('{bob}{!and others!} arrived', {bob: 'anne'}), 'anne arrived')
assert.equal(swap('{bob}', 'bob'), '')
assert.equal(swap('{bob} and stick', 12), ' and stick')
