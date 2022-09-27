/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  eslint: {
    dirs: ['pages', 'Components'] //or ['pages', 'hooks']
  }
}

module.exports = nextConfig
