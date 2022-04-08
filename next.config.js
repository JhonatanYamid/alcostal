const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ['lh4.googleusercontent.com', 'lh3.googleusercontent.com', 'www.noticiasensalud.com', 'img.lalr.co'],
  },
});
