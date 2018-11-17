# stringNormalizer

> A Simple String Normalizer. Good to make strings comparison.

## Install

```bash
npm install git+https://git@github.com/mchagas90/stringNormalizer.git#master
```

## Usage

```bash
var stringNormalizer = require('stringNormalizer');

console.log(stringNormalizer("Grátis império"));
-> "gratis imperio"

# a custom dictionary may be used:
console.log(stringNormalizer("Grátis império", {'é': 'e'}));
-> "grátis imperio"
```
