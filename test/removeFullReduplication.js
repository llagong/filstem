const assert = require("assert");
const dikstemmer = require("../index.js");

describe("#removeFullReduplication()", function() {
  [
    ["isaisa", "isa"],
    ["gawagawa", "gawa"],
  ].forEach(function(data) {
    let entry = data[0];
    let test = data[1];
    it("successfully stemmed " + entry, function() {
      result = dikstemmer.removeFullReduplication(entry);

      assert.equal(test, result);
    });
  });
});
