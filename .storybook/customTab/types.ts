import { ReactRenderer } from "@storybook/nextjs";
import { ReactNode } from "react";
import { DocsContextProps } from "storybook/internal/types";

export type CustomTabData = {
  customContent?: () => ReactNode;
  [key: string]: unknown;
};

type CSFFile = {
  meta?: {
    parameters?: {
      customTab?: {
        data?: CustomTabData;
      };
    };
  };
};

export type CustomTabContainerProps = {
  context: DocsContextProps<ReactRenderer> & {
    attachedCSFFiles?: Set<CSFFile>;
  };
};

export type CustomTabRendererProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  customData?: CustomTabData;
  docsContent: ReactNode;
};
