/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ["okinawascooters.com", "www.eveez.in"],
    }
}

export default process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig;