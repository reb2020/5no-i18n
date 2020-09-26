export namespace FiveNoI18N {

  interface TranslateDatabase {
    [value: string]: string;
  }

  interface TranslateDatabases {
    [language: string]: TranslateDatabase;
  }

  interface TranslateVariables {
    [variable: string]: string | number;
  }

  interface InitParam {
    language: string;
    default?: boolean;
    db: TranslateDatabase;
  }

}
