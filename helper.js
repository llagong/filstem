'use strict';

function replaceAt(word, index, character) {
  if (!word) {
    return word;
  }

  return word.slice(0, index) + character + word.slice(index + 1, word.length);
}

function hasPrefix(word, prefix) {
  if (!word) {
    return false;
  }

  if (prefix instanceof RegExp) {
    if (word.match(prefix)) {
      return true;
    }
  } else {
    if (word.indexOf(prefix) === 0) {
      return true;
    }
  }
  return false;
}

function hasSuffix(word, suffix) {
  if (!word) {
    return false;
  }

  if (word.lastIndexOf(suffix) == word.length - suffix.length) {
    return true;
  }
  return false;
}

function countSyllables(word) {
  if (!word) {
    return 0;
  }

  let match = word
    .toString() //For handling regex
    .replace('(?![aeiou])', '') //For regex. Removes negativelookahead for vowels
    .match(/[aeiou]/g);

  if (match) {
    return match.length;
  } else {
    return 0;
  }
}

module.exports = {
  replaceAt,
  hasPrefix,
  hasSuffix,
  countSyllables
};
