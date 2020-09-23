const chai = require('chai')
const FiveNoI18N = require('../index')

const enOne = {
  'test %name%': 'translate1 %name%'
}

const enTwo = {
  'test %name%': 'translate2 %name%'
}

FiveNoI18N.init([
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

describe('i18n', () => {
  it('en1', () => {
    chai.expect('translate1 %name%').equal(FiveNoI18N.translate('test %name%'))
  })

  it('en2', () => {
    FiveNoI18N.setLanguage('en2')
    chai.expect('translate2 %name%').equal(FiveNoI18N.translate('test %name%'))
  })

  it('variable', () => {
    FiveNoI18N.setLanguage('en2')
    chai.expect('translate2 Test').equal(FiveNoI18N.translate('test %name%', { '%name%': 'Test' }))
  })
})
