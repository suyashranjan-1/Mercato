/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    images: {
        domains: ["images.unsplash.com", "flowbite.s3.amazonaws.com"],
    },
    // ... any other existing config
};

module.exports = nextConfig;
