function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={activeTab === tab.id ? "active-tab" : ""}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
