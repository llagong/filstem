const assert = require("assert");
const dikstemmer = require("../index.js");

describe("#removeInfix()", function() {
  [
    ["pinain", "pain"],
    ["pinaalis", "paalis"],
    ["kumakain", "kakain"],
    ["tumingin", "tingin"],
    ["tinatamisan", "tatamisan"]
  ].forEach(function(data) {
    let entry = data[0];
    let test = data[1];
    it("successfully stemmed " + entry, function() {
      result = dikstemmer.removeInfix(entry);

      assert.equal(test, result);
    });
  });
});
