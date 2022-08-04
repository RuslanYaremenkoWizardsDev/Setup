const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  reloadOnPrerender: isDev,
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
  },
};
