// i18nConfig.ts
const i18nConfig = {
  locales: ['en', 'de', 'ja'],
  defaultLocale: 'en',
  trailingSlash: false,// App Router のときは true にしておくと便利
  localeDetection: true,
};

export default i18nConfig;
