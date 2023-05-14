import { useEffect, useState } from "react";
import "./tabs.css";

interface tabProps {
  tabNames: string[];
}

interface dataType {
  frontend: string[];
  backend: string[];
}
const data: dataType = {
  frontend: [
    "Frontend System Design",
    "Component Architecture Design",
    "Frontend Interview",
    "User Interface Design",
    "React Questions",
  ],
  backend: ["Backend Interview", "API Design", "System Design Questions"],
};

const Tabs = ({ tabNames }: tabProps) => {
  const [activeTab, setActiveTab] = useState("frontend");
  const [tabData, setTabData] = useState(data["frontend"]);

  useEffect(() => {
    setTabData(data[activeTab as keyof dataType]);
  }, [activeTab]);

  return (
    <div className="tab-container">
      <div className="tabs">
        {tabNames.map((name) => (
          <p className="tab" onClick={() => setActiveTab(name.toLowerCase())}>
            {name}
          </p>
        ))}
      </div>
      <div className="tab-content">
        <ul>
          {tabData.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
