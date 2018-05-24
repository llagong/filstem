const assert = require("assert");
const dikstemmer = require("../index.js");

describe("#removeSuffix()", function() {
  [
    ["karurukan", "damo"],
  ].forEach(function(data) {
    let entry = data[0];
    let testResult = data[1];
    it("successfully stemmed " + entry, function() {
      result = dikstemmer.stem(entry);


      assert.equal(testResult, result);
    });
  });
});
