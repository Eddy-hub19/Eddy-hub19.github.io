export const getLocale = (userConfig, knownLocales) => {
  for (let i = 0; i < knownLocales.length; i++) {
    if (knownLocales[i] === userConfig.locale) {
      return userConfig.locale;
    }
  }
  return "en";
};
