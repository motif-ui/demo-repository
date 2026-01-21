import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
import { applyCustomCSSModuleNaming } from "../src/lib/styles/scripts/build";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  staticDirs: [{ from: "../src/lib/styles/themes", to: "/themes" }],

  core: {
    disableTelemetry: true,
  },

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    {
      name: "@storybook/addon-essentials",
      options: {
        interactions: false, // Interactions'ı devre dışı bırak
      },
    },
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  webpackFinal: config => {
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@/components": path.resolve(process.cwd(), "src/lib/components"),
        "@styles": path.resolve(process.cwd(), "src/lib/styles"),
      };
    }

    config.module?.rules?.push({
      test: /\.browserslistrc$/,
      type: "asset/source",
    });

    // Find the rule for CSS Modules and update getLocalIdent
    return applyCustomCSSModuleNaming(config, { rootDir: process.cwd() });
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
