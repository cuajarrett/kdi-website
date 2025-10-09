/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "nolte-prod-ebcwh6b9axcgebb3.z01.azurefd.net",
      "www.nolte-kuechen.com",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
