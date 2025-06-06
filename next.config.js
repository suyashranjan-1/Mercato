/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove distDir - let Next.js use default .next directory
    // distDir: "build", // REMOVE THIS LINE
    
    // Remove output standalone to fix routes-manifest issue
    // output: 'standalone', // REMOVE THIS LINE
    
    images: {
        domains: ["images.unsplash.com", "flowbite.s3.amazonaws.com"],
        unoptimized: true, // Add this for better Vercel compatibility
    },
    
    // Clean experimental section
    experimental: {
        // Only add experimental features if absolutely needed
    },
    
    // Add trailingSlash for better static routing
    trailingSlash: false,
    
    // ... any other existing config
};

module.exports = nextConfig;