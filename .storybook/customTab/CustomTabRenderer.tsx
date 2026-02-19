import { CustomTabButtons } from "./CustomTabButtons";
import { CustomTabRendererProps } from "./types";
import "./styles.scss";

export function CustomTabRenderer({ activeTab, onTabChange, customData, docsContent }: CustomTabRendererProps) {
  if (!customData) return <>{docsContent}</>;

  return (
    <div className={`mtfDoc-tab-container ${activeTab !== "docs" ? "tab-hide-toc" : ""}`}>
      <CustomTabButtons activeTab={activeTab} onTabChange={onTabChange} />

      <div style={{ display: activeTab === "docs" ? "block" : "none" }}>{docsContent}</div>

      {activeTab !== "docs" && customData.customContent && <div>{customData.customContent()}</div>}
    </div>
  );
}
