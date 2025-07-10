/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  // If your repo name is not your username.github.io, uncomment and modify:
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
}

export default nextConfig
