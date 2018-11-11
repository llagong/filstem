const assert = require('assert');
const dikstemmer = require('../index.js');

describe('#removeSuffix()', function() {
  [
    ['damuhan', 'damo'],
    ['babuyan', 'baboy'],
    ['basahan', 'basa'],
    ['banlawan', 'banlaw'],
    ['alamin', 'alam'],
    ['sinamahan', 'sinama'],

    ['laruin', 'laro'],

    ['daan', 'daan'],
    ['tahan', 'tahan']
  ].forEach(function(data) {
    let entry = data[0];
    let testResult = data[1];
    it('successfully stemmed ' + entry, function() {
      result = dikstemmer.removeSuffix(entry);

      assert.equal(testResult, result);
    });
  });
});
