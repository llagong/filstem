'use strict';

let helper = require('./helper');

const { prefixes, suffixes, infixes } = require('./affixes');

function removePrefix(word) {
  if (helper.countSyllables(word) < 3) {
    return word;
  }

  for (let i = 0; i < prefixes.length; i++) {
    if (
      helper.hasPrefix(word, prefixes[i]) &&
      helper.countSyllables(word) - helper.countSyllables(prefixes[i]) > 1
    ) {
      return word.replace(prefixes[i], '').replace(/^-/, '');
    }
  }

  return word;
}

function prefixSoundChange(word) {
  if (word[i] == 'r') {
    word[i] = 'd';
    return word;
  }
}

function removeSuffix(word) {
  let removed;
  for (let i = 0; i < suffixes.length; i++) {
    if (
      helper.hasSuffix(word, suffixes[i]) &&
      helper.countSyllables(word) - helper.countSyllables(suffixes[i]) > 1
    ) {
      word = word.slice(0, word.length - suffixes[i].length);
      removed = suffixes[i];
      break;
    }
  }
  if (removed && removed.length == 3 && word[word.length - 1] == 'u') {
    word = helper.replaceAt(word, word.length - 1, 'o');
  }

  if (removed && removed.length == 2 && word[word.length - 2] == 'u') {
    word = helper.replaceAt(word, word.length - 2, 'o');
  }

  if (removed && removed.length == 2 && word[word.length - 1] == 'u') {
    word = helper.replaceAt(word, word.length - 1, 'o');
  }

  return word;
}

function removeInfix(word) {
  for (let i = 0; i < infixes.length > 0; i++) {
    let infix = infixes[i];

    let infixIndex = word.indexOf(infix);

    if (infixIndex === 0) {
      return word.slice(infixIndex + infix.length);
    } else if (infixIndex === 1) {
      return word[0] + word.slice(infix.length + 1);
    }
  }
  return word;
}

function removePartialReduplication(word) {
  //if two syllablic root

  if (word[0] == word[1]) {
    return word.slice(1);
  } else if (word[0] == word[2] && word[1] == word[3]) {
    return word.slice(2);
  }

  //if three syllabic root

  return word;
}

function removeFullReduplication(word) {
  let middleIndex = Math.floor(word.length / 2);

  if (word.slice(0, middleIndex) == word.slice(middleIndex)) {
    return word.slice(middleIndex);
  }

  return word;
}

function stem(word) {
  let pipeline = [
    removePrefix,
    removeSuffix,
    removeInfix,
    removePartialReduplication,
    removeFullReduplication
  ];

  let history = [word];
  for (let i = 0; i < pipeline.length; i++) {
    word = pipeline[i](word);
    history.push(word);
  }

  return {
    result: word,
    history: history
  };
}

module.exports = {
  stem,
  removePrefix,
  removeSuffix,
  removeInfix,
  removePartialReduplication,
  removeFullReduplication
};
