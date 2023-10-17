/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {   protocol :'https',
                hostname: 'yourimageshare.com'}
        ]
    },
    experimental:{ 
        serverActions: true,
    }
}

module.exports = nextConfig
