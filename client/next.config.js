/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["shisuke-nft-marketplace","shisuke-nft-marketplace.infura-ipfs.io", "infura-ipfs.io"],
  },}

module.exports = nextConfig
