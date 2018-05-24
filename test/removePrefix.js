const assert = require("assert");
const dikstemmer = require("../index.js");

describe("#removePrefix()", function() {
  [
    ["ala-una", "una"],
    ["alas-dos", "dos"],
    ["alas-tres", "tres"],
    ["kasama", "sama"],
    ["gabundok", "bundok"],
    ["ipatago", "tago"],
    ["marupok", "rupok"],
    ["natago", "tago"],
    ["mayumi", "yumi"],
    ["mapapatawa", "tawa"],
    ["nagkabulutong", "bulutong"]
    ["marami", "dami"],
  ].forEach(function(data) {
    let entry = data[0];
    let test = data[1];
    it("successfully stemmed " + entry, function() {
      result = dikstemmer.removePrefix(entry);

      assert.equal(test, result);
    });
  });
});
