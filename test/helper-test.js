const assert = require('assert');
const helper = require('../helper.js');

describe('helper.js', function() {
  describe('#replaceAt()', function() {
    [
      ['inamin', 0, 'k', 'knamin'],
      ['inalis', 0, 'k', 'knalis'],
      ['humangin', 0, 'k', 'kumangin'],
      ['tumingin', 0, 'k', 'kumingin'],
      ['inamin', 1, 'k', 'ikamin'],
      ['inalis', 1, 'k', 'ikalis'],
      ['humangin', 1, 'k', 'hkmangin'],
      ['tumingin', 1, 'k', 'tkmingin'],
      ['inamin', 5, 'k', 'inamik'],
      ['inalis', 5, 'k', 'inalik'],
      ['humangin', 7, 'k', 'humangik'],
      ['tumingin', 7, 'k', 'tumingik']
    ].forEach(function(data) {
      let word = data[0];
      let index = data[1];
      let character = data[2];

      let testResult = data[3];

      it('successfully  replaced ' + word + ' to ' + testResult, function() {
        result = helper.replaceAt(word, index, character);

        assert.equal(result, testResult);
      });
    });
  });

  describe('#hasPrefix()', function() {
    [
      ['inamin', 'i', true],
      ['inamin', 'in', true],
      ['inamin', 'ina', true],
      ['inamin', 'inam', true],
      ['inamin', 'inami', true],
      ['inamin', 'inamin', true],
      ['inamin', 'a', false],
      ['inamin', 'ig', false],
      ['inamin', 'inj', false],
      ['inamin', 'inab', false],
      ['inamin', 'inama', false],
      ['inamin', 'inamis', false],
      ['inamin', 'namin', false],
      ['inamin', 'amin', false],
      ['inamin', 'min', false],
      ['inamin', 'n', false],
      ['inamin', 'ami', false],
      ['inamin', 'nam', false]
    ].forEach(function(data) {
      let word = data[0];
      let prefix = data[1];

      let testResult = data[2];

      it(word + ' has prefix ' + prefix, function() {
        result = helper.hasPrefix(word, prefix);

        assert.equal(result, testResult);
      });
    });
  });

  describe('#hasSuffix()', function() {
    [
      ['inamin', 'n', true],
      ['inamin', 'in', true],
      ['inamin', 'min', true],
      ['inamin', 'amin', true],
      ['inamin', 'namin', true],
      ['inamin', 'inamin', true],
      ['inamin', 'g', false],
      ['inamin', 'ij', false],
      ['inamin', 'mif', false],
      ['inamin', 'amia', false],
      ['inamin', 'namis', false],
      ['inamin', 'inamiq', false],
      ['inamin', 'i', false],
      ['inamin', 'ina', false],
      ['inamin', 'ami', false],
      ['inamin', 'nam', false],
      ['inamin', 'inam', false],
      ['inamin', 'inami', false]
    ].forEach(function(data) {
      let word = data[0];
      let suffix = data[1];

      let testResult = data[2];

      it(word + ' has suffix ' + suffix, function() {
        result = helper.hasSuffix(word, suffix);

        assert.equal(result, testResult);
      });
    });
  });
});

describe('#countSyllables()', function() {
  [
    ['ala-una', 4],
    ['nakakapagpabagabag', 8],
    ['ang', 1],
    ['at', 1],
    ['kasama', 3],
    ['iba', 2],
    ['umuwa', 3],
    ['t', 0]
  ].forEach(function(data) {
    let entry = data[0];
    let test = data[1];
    it(`should count ${entry} (${test})`, function() {
      result = helper.countSyllables(entry);

      assert.equal(test, result);
    });
  });
});
