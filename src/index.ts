import { FiveNoI18N } from '../typings/app'

const translateDatabases = {} as FiveNoI18N.TranslateDatabases

let translateLanguage = 'en'

let translateLanguageDefault = 'en'

export const init = (options: Array<FiveNoI18N.InitParam>) => {
  for (const option of options) {
    translateDatabases[option.language] = option.db
    if (option?.default) {
      translateLanguageDefault = option.language
      translateLanguage = option.language
    }
  }
}

export const getTranslateDatabases = (): FiveNoI18N.TranslateDatabases => translateDatabases

export const initDefault = () => {
  translateLanguage = translateLanguageDefault
}

export const setLanguage = (language: string) => {
  translateLanguage = language
}

export const translate = (value: string, variables?: FiveNoI18N.TranslateVariables): string => {
  let str = value

  if (translateDatabases[translateLanguage] && translateDatabases[translateLanguage][value]) {
    str = translateDatabases[translateLanguage][value]
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
