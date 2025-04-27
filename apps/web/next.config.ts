import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://qg4jfsqsfxj4pwmc.public.blob.vercel-storage.com/**'),
    ],
  },
}

export default nextConfig
