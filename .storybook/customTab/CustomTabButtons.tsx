type CustomTabButtonsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const DEFAULT_TABS = [
  { id: "docs", label: "Overview" },
  { id: "prop", label: "CSS ClassNames" },
];

export const CustomTabButtons = ({ activeTab, onTabChange }: CustomTabButtonsProps) => {
  return (
    <div className="mtfDoc-tab-header">
      {DEFAULT_TABS.map(({ id, label }) => (
        <button key={id} onClick={() => onTabChange(id)} className={`mtfDoc-tab--button ${activeTab === id ? "active" : ""}`}>
          {label}
        </button>
      ))}
    </div>
  );
};
