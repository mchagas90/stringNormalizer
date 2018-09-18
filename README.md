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
import { normalizer } from 'stringNormalizer';
console.log(normalizer('império grátis'));  //"imperio gratis"
```