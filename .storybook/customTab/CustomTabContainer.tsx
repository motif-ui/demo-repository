import { DocsContainer, Title, Subtitle, Description, Primary, Controls } from "@storybook/addon-docs/blocks";
import { CustomTabContainerProps } from "./types";
import "../../src/lib/styles/themes/default-theme.css";
import { PropsWithChildren, useState } from "react";
import { CustomTabRenderer } from "./CustomTabRenderer";

export const CustomTabContainer = (props: PropsWithChildren<CustomTabContainerProps>) => {
  const { context, children } = props;
  const [activeTab, setActiveTab] = useState("docs");

  const attachedFiles = context.attachedCSFFiles;
  const csfFile = attachedFiles ? Array.from(attachedFiles)[0] : undefined;
  const customData = csfFile?.meta?.parameters?.customTab?.data;

  const docsContent = (
    <>
      <Primary />
      <Controls />
    </>
  );
  //mdx
  if (!attachedFiles?.size) {
    return <DocsContainer context={context}>{children}</DocsContainer>;
  }

  //stories with custom tab
  return (
    <DocsContainer context={context}>
      <Title />
      <Subtitle />
      <Description />
      <CustomTabRenderer activeTab={activeTab} onTabChange={setActiveTab} customData={customData} docsContent={docsContent} />
    </DocsContainer>
  );
};
