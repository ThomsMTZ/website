import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({enabled: process.env.ANALYZE === 'true'});

export default withBundleAnalyzer({
    reactStrictMode: true,
    poweredByHeader: false,
    experimental: {
        optimizePackageImports: ['react', 'react-dom']
    },
    images: {formats: ['image/avif', 'image/webp']}
});