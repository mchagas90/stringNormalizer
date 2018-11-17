'use strict';

/**
 * Make it easy to compare string
 * @param {string} text
 * @param {string} text
 * @return {string}
 */
module.exports = function(string, custom_dictionary=undefined) {
  return normalize(string, custom_dictionary);
};

function custom_normalizer(string, custom_dictionary) {
  let dictionary = custom_dictionary ? custom_dictionary : default_dictionary()
  var string = string.split('');
  let stringLength = string.length;

  for (var i = 0; i < stringLength; i++) {
    let normalized_char = dictionary[string[i]]
    string[i] = normalized_char || string[i];
  }

  return string.join('');
}

function normalize(string, custom_dictionary) {
  var string = string.toLowerCase();
  var converted_string = '';

  try {
    converted_string = custom_normalizer(string, custom_dictionary);
  } catch(error) {
    console.log(error);
    try {
      converted_string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    } catch(error) {
      console.log(error);
      converted_string = string;
    }
  }

  return converted_string;
}

function default_dictionary() {
  return {
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "ð": "e",
    "Ç": "C",
    "ç": "c",
    "Ð": "D",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "Ñ": "N",
    "ñ": "n",
    "Š": "S",
    "š": "s",
    "Ÿ": "Y",
    "ÿ": "y",
    "ý": "y",
    "Ž": "Z",
    "ž": "z"
  }
}