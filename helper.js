"use strict";

function replaceAt(word, index, character) {
  return word.slice(0, index) + character + word.slice(index + 1, word.length);
}

function hasPrefix(word, prefix) {
  if (word.indexOf(prefix) == 0) {
    return true;
  }
  return false;
}

function hasSuffix(word, suffix) {
  if (word.lastIndexOf(suffix) == word.length  - suffix.length) {
    return true;
  }
  return false;
}

module.exports = {
  replaceAt: replaceAt,
  hasPrefix: hasPrefix,
  hasSuffix: hasSuffix
};
