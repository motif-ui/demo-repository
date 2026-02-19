import { ReactNode, useState } from "react";
import { CustomTabRenderer } from "./CustomTabRenderer";

type CustomTabMDXProps = {
  customContent: () => ReactNode;
  children?: ReactNode;
};

export const CustomTabMDX = ({ customContent, children }: CustomTabMDXProps) => {
  const [activeTab, setActiveTab] = useState("docs");

  return <CustomTabRenderer activeTab={activeTab} onTabChange={setActiveTab} customData={{ customContent }} docsContent={children} />;
};
