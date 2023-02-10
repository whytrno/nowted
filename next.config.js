/** @type {import('next').NextConfig} */
var path = require("path");
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb+srv://whytrno:Whytrno2205@cluster.d5zofi5.mongodb.net/nowted?retryWrites=true&w=majority',
    GOOGLE_CLIENT_ID: '562184986347-h08ptk9i49uk8egdr6lbr956ol3komtu.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    GITHUB_ID: 'bb44e4c585a81ace4a70',
    GITHUB_SECRET: '2aeae2b6b5ab5cca76bda1f957d07604dda4a70a',
    SECRET: 'e0d4f088d20db90bc4819af49a2e7b7a'
  },
  //webpack alias
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias["lodash/debounce"] = "lodash.debounce"
    return config;
  },
}

module.exports = nextConfig
