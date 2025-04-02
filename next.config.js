const nextConfig = {
  i18n: {
    locales: ['pt', 'en', 'ro'],
    defaultLocale: 'pt',
    localeDetection: false, // ← IMPORTANTE: sem aspas!
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;