# <a href='https://5no.io'><img src='https://5no.io/img/5no-small-logo.png' height='100' alt='5no Logo' aria-label='5no.io' /></a>i18n

Lightweight simple translation module

[@5no/i18n](https://www.npmjs.com/package/@5no/i18n)

## Install

@5no/i18n requires Node version 8 or above.

```sh
npm install --save @5no/i18n
```

## Examples

```js

import { init, setLanguage, translate, initDefault } from '@5no/i18n'

const enOne = {
  'test %name%': 'translate1 %name%'
}

const enTwo = {
  'test %name%': 'translate2 %name%'
}

init([
  {
    language: 'en1',
    default: true,
    db: enOne,
  },
  {
    language: 'en2',
    db: enTwo,
  }
])

setLanguage('en2')

translate('test %name%', {
  '%name%': 'TestName'
})

/**
 * 
 * Result:
 * translate2 TestName
 * 
 * /

```

## License

MIT Licensed, Copyright (c) 2020 Aleksandr Sokol