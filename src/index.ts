import { FiveNoI18N } from '../typings/app'

const translateDatabases = {} as FiveNoI18N.TranslateDatabases

export let currentLanguage = 'en'

export let defaultLanguage = 'en'

export const init = (options: Array<FiveNoI18N.InitParam>) => {
  for (const option of options) {
    translateDatabases[option.language] = option.db
    if (option?.default) {
      defaultLanguage = option.language
      currentLanguage = option.language
    }
  }
}

export const getTranslateDatabases = (): FiveNoI18N.TranslateDatabases => translateDatabases

export const initDefault = () => {
  currentLanguage = defaultLanguage
}

export const setLanguage = (language: string) => {
  if (!translateDatabases[language]) {
    throw new Error('Language is not exists')
  }

  currentLanguage = language
}

export const translate = (value: string, variables?: FiveNoI18N.TranslateVariables): string => {
  let str = value

  if (translateDatabases[currentLanguage] && translateDatabases[currentLanguage][value]) {
    str = translateDatabases[currentLanguage][value]
  }

  if (variables) {
    for (const variableKey of Object.keys(variables)) {
      const value = variables[variableKey]
      if (['number', 'string'].includes(typeof value)) {
        str = str.replace(variableKey, value.toString())
      }
    }
  }

  return str
}
