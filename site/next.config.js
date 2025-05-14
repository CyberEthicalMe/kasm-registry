/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Cyber Ethical',
    description: 'CyberEthical.Me store for Kasm supported workspaces.',
    icon: 'https://raw.githubusercontent.com/CyberEthicalMe/blog-assets/refs/heads/master/img/logo-circle-dark.png',
    listUrl: 'https://cyberethicalme.github.io/kasm-registry/',
    contactUrl: 'https://blog.cyberethical.me/discord',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
