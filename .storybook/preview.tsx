import type { Preview } from "@storybook/nextjs";
import { EDKUIProvider } from "../src/lib";
import { useInsertionEffect } from "react";

const DEFAULT_THEME = "default-theme";
const RESET_THEME_BUTTON_VAL = "_reset";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: RESET_THEME_BUTTON_VAL,
      toolbar: {
        icon: "paintbrush",
        items: [
          { value: RESET_THEME_BUTTON_VAL, title: "Default Theme", right: "🔵" },
          { value: "papyrus", title: "Papyrus", right: "📜" },
        ],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeProp = context.globals.theme as string;
      const theme = !themeProp || themeProp === RESET_THEME_BUTTON_VAL ? DEFAULT_THEME : themeProp;

      useInsertionEffect(() => {
        document.querySelectorAll("link[data-theme-css]").forEach(link => link.remove());

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.setAttribute("data-theme-css", "true");
        link.href = `/themes/${theme}.css`;
        document.head.appendChild(link);

        return () => link.remove();
      }, [theme]);

      return (
        <EDKUIProvider>
          <Story />
        </EDKUIProvider>
      );
    },
  ],
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Getting Started",
          ["Overview", "Installation", "Element Access", "EDKUIProvider", "Localization", "Accessibility", "Browser Support"],
          "Integrations",
          "Customization",
          ["Guide"],
          "Design",
          ["Themes", "Figma", "Design Tokens", "Color Palette"],
          "Blocks",
          "Components",
          "Icons",
          "Form",
          "Hooks",
          "Utility",
          "Support",
        ],
        locales: "en-US",
      },
    },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: {
        title: "On this page",
        headingSelector: "h2, h3",
        // ignoreSelector: ".sbdocs-content h2[id='Stories']", // CSS selector to ignore specific elements
      },
    },
    layout: "centered",
    chromatic: {
      disable: process.env.NODE_ENV === "production",
    },
  },
  tags: ["autodocs"],
};

export default preview;
