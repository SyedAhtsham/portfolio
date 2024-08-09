// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config options here
    output: "export",
};

export default withSentryConfig(nextConfig);
