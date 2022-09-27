/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['.'] //or ['pages', 'hooks']
  }
}

module.exports = nextConfig
