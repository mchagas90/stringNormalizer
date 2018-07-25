exports.execute = function(string) {
  return normalize(string);
}

function custom_normalizer(string) {
  // TODO: allow custom dictionary
  var accents    = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
  string = string.split('');
  var stringLength = string.length;
  for (var i = 0; i < stringLength; i++) {
    var x = '';
    if ((x = accents.indexOf(string[i])) != -1) {
      string[i] = accentsOut[x];
    }
  }

  return string.join('');
}

function normalize(string) {
  var string = string.toLowerCase();
  var converted_string = '';

  try {
    converted_string = string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  } catch(error) {
    console.log(error);
    try {
      converted_string = custom_normalizer(string);
    } catch(error) {
      console.log(error);
      converted_string = string;
    }
  }

  return converted_string;
}