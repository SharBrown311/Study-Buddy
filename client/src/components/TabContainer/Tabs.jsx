import React, {useState} from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Decks from "../pages/Decks/Decks";
import Notes from "../pages/Notes/Notes";
import StudyContainer from "../pages/Study/StudyContainer";
import './Tabs.css'
export default function Tabs(){
  const [activeTab, setActiveTab] = useState("tab1")
  return(
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
      <TabNavItem title="Tab 1" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} className = "first-tab"/>
        <TabNavItem title="Tab 2" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} className = "middle-tab"/>
        <TabNavItem title="Tab 3" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}
        className = "third-tab"
        />
      </ul>
      <div className="outlet">
      <TabContent id="tab1" activeTab={activeTab}>
          <Decks />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <StudyContainer />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Notes />
        </TabContent>
      </div>
      </div>
  )
}