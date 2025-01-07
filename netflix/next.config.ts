import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['image.tmdb.org'], // 외부 도메인 추가
    },
};

export default nextConfig;
