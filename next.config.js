/** @type {import('next').NextConfig} */
const nextConfig = {
    image:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname:"www.pexels.com"
            }
        ]
    }
}

module.exports = nextConfig
