/** @type {import('next').NextConfig} */
var path = require("path");
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb+srv://whytrno:Whytrno2205@cluster.d5zofi5.mongodb.net/nowted?retryWrites=true&w=majority'
  },
  //webpack alias
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["lodash/debounce"] = "lodash.debounce"
    return config;
  },
}

module.exports = nextConfig
