import type { NextConfig } from "next";
import type { Configuration } from "webpack";
import { applyCustomCSSModuleNaming } from "@styles/scripts/build";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  //TODO: https://talep.turksat.com.tr/browse/EDKUI-1214 Bu talep sprinte alındığında bakılacak ve buradaki çakışma çözülecek.
  turbopack: {},
  webpack: (config: Configuration): Configuration => {
    // Find the rule for CSS Modules and update getLocalIdent
    return applyCustomCSSModuleNaming(config, { rootDir: __dirname });
  },
};

export default nextConfig;
