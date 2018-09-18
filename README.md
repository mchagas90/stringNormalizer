# stringNormalizer

> A Simple String Normalizer. Good to make strings comparison.

## Install

```bash
npm install stringNormalizer
```

## Usage

```bash
var stringNormalizer = require('stringNormalizer');
console.log(stringNormalizer.execute("Grátis império"));  //"gratis imperio"
```

```bash
import { normalize } from 'stringNormalizer';
console.log(normalize('império grátis'));  //"imperio gratis"
```