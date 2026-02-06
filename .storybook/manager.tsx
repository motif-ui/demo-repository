import { addons } from "storybook/manager-api";
import edkTheme from "./edkTheme";

addons.setConfig({
  theme: edkTheme,
  sidebar: {
    showRoots: false,
    collapsedRoots: ["Integrations", "Customization", "Design", "Blocks", "Components", "Icons", "Form", "Hooks", "Utility", "Support"],
  },
});
