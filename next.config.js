/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    output: 'standalone', // or remove this line if not needed
    images: {
        domains: ["images.unsplash.com", "flowbite.s3.amazonaws.com"],
    },
    experimental: {
        // Remove any experimental features that might cause issues
    },
    // ... any other existing config
};

module.exports = nextConfig;
