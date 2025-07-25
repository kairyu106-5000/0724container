// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 他のオプション例:
  reactStrictMode: true,
  // App Router使用時はi18nを**含めない**ようにする
  // i18n: { locales: ['en', 'ja'], defaultLocale: 'en' } ← 削除!!
};

export default nextConfig;
