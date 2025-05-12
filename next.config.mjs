import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  images: {
    unoptimized: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
