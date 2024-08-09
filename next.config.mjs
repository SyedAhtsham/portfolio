// next.config.mjs

import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config options here
    output: "export",
};

const sentryConfig = {
    silent: true,
    org: "your-org-slug",
    project: "your-project-slug",
};

const additionalOptions = {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryConfig, additionalOptions);
