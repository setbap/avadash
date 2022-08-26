import names from "./src/lib/utility/names";

/** @type {import('next-sitemap').IConfig} */
const NextSitemapConfig = {
  siteUrl: `https://${names.APP_NAME}`,
  generateRobotsTxt: true,
};

module.exports = NextSitemapConfig;
