/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {   protocol :'https',
                hostname: 'yourimageshare.com'}
        ]
    }
}

module.exports = nextConfig
