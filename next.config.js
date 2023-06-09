/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true
    },
    reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['www.dumpaday.com', 'localhost', 'avataaars.io', 'cdn.pixabay.com', 'picsum.photos', 'www.thecocktaildb.com', 'images.unsplash.com', 'www.youtube.com']
    },
  };
