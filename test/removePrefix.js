const assert = require('assert');
const dikstemmer = require('../index.js');

describe('#removePrefix()', function() {
  [
    ['ala-una', 'ala-una'],
    ['kasama', 'sama'],
    ['gabundok', 'bundok'],
    ['ipatago', 'tago'],
    ['marupok', 'rupok'],
    ['natago', 'tago'],
    ['mayumi', 'yumi'],
    ['mapapatawa', 'tawa'],
    ['nagkabulutong', 'bulutong'],
    ['gabutil', 'butil'],
    ['gaan', 'gaan'],
    ['nasabik', 'sabik'],

    // ['isara', 'sara'],
    ['ipagamot', 'gamot'],
    ['ipagpabuti', 'buti'],
    ['ipagkait', 'kait'],

    ['mag-aral', 'aral'],
    ['magsayaw', 'sayaw'],

    ['pagamit', 'gamit'],
    ['pag-asa', 'asa'],
    ['paggamit', 'gamit'],

    ['mabuhay', 'buhay'],
    // ['mamatay', 'patay'],

    ['natuto', 'tuto'],
    // ['nalaman', 'alam'],

    ['ilaw', 'ilaw']
  ].forEach(function(data) {
    let entry = data[0];
    let test = data[1];
    it('successfully stemmed ' + entry, function() {
      result = dikstemmer.removePrefix(entry);

      assert.equal(result, test);
    });
  });
});
